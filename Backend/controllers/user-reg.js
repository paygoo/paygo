const UserModel = require("../models/user");
const { createWallet, getTokenBalance } = require("../paygo_account/account");
exports.registerUser = async (req, res, next) => {
  try {
    const user = new UserModel();
    address = req.body.address;
    result = user.checkUserExists(address);

    if (result == null) {
      const wallet = createWallet();
      const privateKey = wallet.privateKey;
      const publicKey = wallet.address; // This is address of inner account

      const result = await user.registerUser(address, publicKey, privateKey);
      const userInfo = {
        user_id: result._id,
        smart_address: publicKey,
      };

      // Send JSON response
      res.status(200).json(userInfo);
    } else {
      const userInfo = {
        user_id: result.userID,
        smart_address: result.eoAddress,
      };

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
    const eoAddress = req.params.address;
    res = getKeysfromEOA(eoAddress);

    // const result = await getTokenBalance(res.publicKey);
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
