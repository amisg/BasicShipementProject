const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const ShipmentModel = require("../database/model/Shipemnt.model");
const UserModel = require("../database/model/User.model");

async function loginUserService(body, secret) {
	try {
		const { username = "" } = body;
		const foundUser = await UserModel.find({ username: username });

		if (foundUser) {
			const payload = {
				user: { id: foundUser[0]._id, name: foundUser[0].username },
				role: "user",
			};
			const authToken = jwt.sign(payload, secret);

			return {
				status: 200,
				token: authToken,
			};
		} else {
			// return {
			// 	status: 401,
			// 	message: "Authentication failed",
			// };
			throw new Error();
		}
	} catch (error) {
		throw new Error("Cant Login Give good credentials" + error.message);
	}
}

module.exports = { loginUserService };
