const UserModel = require("../models/user");
const { createWallet, getTokenBalance } = require("../paygo_account/account");
exports.registerUser = async (req, res, next) => {
  try {
    const user = new UserModel();
    address = req.body.address;
    console.log(address);
    result = await user.checkUserExists(address);
    console.log(result);
    if (result == null) {
      console.log("User does not exist");
      const wallet = createWallet();
      const privateKey = wallet.privateKey;
      const publicKey = wallet.address; // This is address of inner account

      const result = await user.registerUser(address, publicKey, privateKey);
      console.log(result);
      const userInfo = {
        user_id: result._id,
        smart_address: publicKey,
      };

      // Send JSON response
      res.status(200).json(userInfo);
    } else {
      console.log("User exists");
      const userInfo = {
        user_id: result.userID,
        smart_address: result.publicKey,
      };
      console.log(userInfo);
      // Send JSON response
      res.status(200).json(userInfo);
    }

    // res.status(201).json({
    // 	message: "User registered successfully",
    // 	result: result,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User registration failed",
      error: error,
    });
  }
};

exports.getBalance = async (req, res, next) => {
  try {
    const eoAddress = req.query.address;
    console.log(eoAddress);
    if(eoAddress === undefined){
      res.status(400).json({
        message: "Invalid address",
      });
    }
    const user = new UserModel();
    result1 = await user.getKeysfromEOA(eoAddress);

    // const result = await getTokenBalance(result1.publicKey);
    const result = await getTokenBalance(eoAddress);

    res.status(200).json({
      message: "Transaction fetched successfully",
      result: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Fetching transaction failed",
      error: error,
    });
  }
};
