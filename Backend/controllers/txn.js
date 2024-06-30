const TransactionModel = require("../models/txn");
const { transferTokens } = require("../paygo_account/account");
const { getKeysfromEOA } = require("../models/user");
exports.addTxn = async (req, res, next) => {
	try {
		const transactionData = req.body;
		senderAddress = transactionData.senderAddress;
		recieverAddress = transactionData.recieverAddress;
		curType = transactionData.curType;
		recurrence = transactionData.recurrence;
		amount = transactionData.amount;
		currency = transactionData.currency;
		keys = getKeysfromEOA(senderAddress);
		if (curType == "crypto_funding" && recurrence == "payment") {
			result = transferTokens(keys.eoAddress, recieverAddress, amount, keys.privateKey);
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
