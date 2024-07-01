const TransactionModel = require("../models/txn");
const { transferTokens } = require("../paygo_account/account");
const  UserModel = require("../models/user");
const { sendSuperToken, createFlow } = require("../superfluid");
exports.addTxn = async (req, res, next) => {
	try {
		const user = new UserModel();
		const transactionData = req.body;
		senderAddress = transactionData.senderAddress;
		recieverAddress = transactionData.recieverAddress;
		curType = transactionData.curType;
		recurrence = transactionData.recurrence;
		amount = transactionData.amount;
		currency = transactionData.currency;
		keys = await user.getKeysfromEOA(senderAddress);
		if (curType == "crypto_funding" && recurrence == "payment") {
			result = await sendSuperToken(keys.privateKey, recieverAddress, amount);
		}
		const transaction = new TransactionModel();
		const result = await transaction.createTransaction(transactionData);
		res.status(201).json({
			message: "Transaction created successfully",
			result: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Transaction creation failed",
			error: error,
		});
	}
};

exports.addFluidTxn = async (req, res, next) => {
  try {
    const user = new UserModel();
    const transactionData = req.body;
    senderAddress = transactionData.senderAddress;
    recieverAddress = transactionData.recieverAddress;
    curType = transactionData.curType;
    recurrence = transactionData.recurrence;
    rate = transactionData.rate;
    currency = transactionData.currency;
    keys = await user.getKeysfromEOA(senderAddress);
    if (curType == "crypto_funding" && recurrence == "payment") {
      result = await createFlow(
        senderAddress, keys.privateKey,
        recieverAddress,
        rate
      );
    }
    const transaction = new TransactionModel();
    const result = await transaction.createTransaction(transactionData);
    res.status(201).json({
      message: "Transaction created successfully",
      result: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Transaction creation failed",
      error: error,
    });
  }
};

exports.getTxnsbyId = async (req, res, next) => {
	try {
		const transactionId = req.params.id;
		const transaction = new TransactionModel();
		const result = await transaction.findTransactionById(transactionId);
		if (!result) {
			return res.status(404).json({
				message: "Transaction not found",
			});
		}
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

exports.getTxns = async (req, res, next) => {
	try {
		const userId = req.params.userId;
		const transaction = new TransactionModel();
		const result = await transaction.getTransactionsByUser(userId);
		res.status(200).json({
			message: "Transactions fetched successfully",
			result: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Fetching transactions failed",
			error: error,
		});
	}
};
