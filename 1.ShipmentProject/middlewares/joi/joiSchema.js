const joi = require("joi");

const createShipmentSchema = joi.object({
	shipmentId: joi.string().alphanum().required(),
	shipmentName: joi.string().required(),
	customerName: joi.string().required(),
	customerAddress: joi.string().required(),
	shipmentOrigin: joi.string().required(),
});

module.exports = { createShipmentSchema };
