const { createShipmentSchema } = require("../Joi/joiSchema");

function validateShipmentCreationMiddleware(req, res, next) {
	const { error } = createShipmentSchema.validate(req.body);

	if (error) {
		return res.status(400).json({
			error,
		});
	} else {
		next();
	}
}

module.exports = { validateShipmentCreationMiddleware };
