const ShipmentModel = require("../database/model/Shipemnt.model");
const UserModel = require("../database/model/User.model");
const {
	ShipementNotCreated,
	ShipementDetailNotFound,
} = require("../Exceptions/ShipementNotValid");
const {
	UserNotCreated,
	UserNotValidException,
} = require("../Exceptions/UserNotValid");

async function createShipmentService(body) {
	try {
		const {
			shipmentId,
			shipmentName,
			customerName,
			customerAddress,
			shipmentOrigin,
		} = body;

		const shipmentObj = new ShipmentModel({
			shipmentId: shipmentId,
			shipmentName: shipmentName,
			customerName: customerName,
			customerAddress: customerAddress,
			shipmentOrigin: shipmentOrigin,
		});

		await shipmentObj.save();

		return {
			status: 201,
			message: "Shipment successfully created ::: " + shipmentObj._id,
		};
	} catch (error) {
		throw new ShipementNotCreated("SHIPMENT NOT CREATED !!! " + error);
	}
}

async function getAllShipementService() {
	try {
		const results = await ShipmentModel.find({});
		return {
			status: 200,
			message: "user fetch successfull",
			data: results,
		};
	} catch (error) {
		throw new ShipementDetailNotFound("Cant GET USer Sadly !!!");
	}
}

async function createuserservice(body) {
	try {
		const { username } = body;
		const userObj = new UserModel({
			username: username,
		});

		await userObj.save();

		return {
			status: 201,
			message: "User created Successfully ::: " + userObj._id,
		};
	} catch (error) {
		throw new UserNotCreated("USER NOT CREATED !!! " + error);
	}
}

async function getAllUsersService() {
	try {
		const results = await UserModel.find({});
		return {
			status: 200,
			message: "user fetch successfull",
			data: results,
		};
	} catch (error) {
		throw new UserNotValidException("Cant GET USer Sadly !!!");
	}
}

module.exports = {
	createShipmentService,
	getAllShipementService,
	createuserservice,
	getAllUsersService,
};
