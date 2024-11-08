const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			maxLength: 50,
			minLength: 3,
			unique: [true, "Username Should be Unique"],
		},
	},

	{ timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
