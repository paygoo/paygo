const Mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
class Database {
	constructor() {
		this.db = null;
	}

	async connect() {
		try {
			this.db = await Mongoose.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log("Database connected");
		} catch (error) {
			console.log("Database connection error", error);
		}
	}
}

module.exports = new Database();
