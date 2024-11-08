const express = require("express");
const {
	createShipment,
	getAllShipement,
	createUser,
	getAllUsers,
} = require("../controllers/home.controller");
const {
	validateShipmentCreationMiddleware,
} = require("../middlewares/shipmentValidation/shipmentValidationMiddleware");
const { fetchUser } = require("../middlewares/fetchUserValidation");

const router = express.Router();

router.post("/createUser", createUser);

router.get("/getallUsers", getAllUsers);

router.post(
	"/createShipment",
	fetchUser,
	validateShipmentCreationMiddleware,
	createShipment
);

router.get("/getAllShipment", getAllShipement);

module.exports = router;
