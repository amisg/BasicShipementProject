const {
	createShipmentService,
	getAllShipementService,
	getAllUsersService,
	createuserservice,
} = require("../services/home.service");

async function createShipment(req, res) {
	try {
		const { status, message } = await createShipmentService(req.body);

		res.status(status).json({
			message: message,
		});
	} catch (error) {
		res.status(500).json({
			message: "Some error occurred !!! " + error.message,
		});
	}
}

async function getAllShipement(req, res) {
	try {
		const { status, message, data } = await getAllShipementService();

		res.json({
			status,
			message,
			data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Some error occured !!! " + error.message,
		});
	}
}

async function createUser(req, res, next) {
	try {
		const { status, message } = await createuserservice(req.body);

		res.json({
			message: message,
			status: status,
		});
	} catch (error) {
		res.status(500).json({
			message: "Some error occured !!! " + error.message,
		});
	}
}

async function getAllUsers(req, res, next) {
	try {
		const { status, message, data } = await getAllUsersService();

		res.json({
			status,
			message,
			data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Some error occured !!! " + error.message,
		});
	}
}

module.exports = { createShipment, getAllShipement, createUser, getAllUsers };
