const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipmentSchema = new Schema(
	{
		shipmentId: {
			type: String,
			required: true,
			unique: [true, "Shipment ID should be unique"],
			match: /^[a-zA-Z0-9]+$/, // Ensures alphanumeric only
		},
		shipmentName: {
			type: String,
			required: true,
			maxLength: 100,
		},
		customerName: {
			type: String,
			required: true,
			maxLength: 100,
		},
		customerAddress: {
			type: String,
			required: true,
			maxLength: 255,
		},
		shipmentOrigin: {
			type: String,
			required: true,
			maxLength: 100,
		},
	},
	{ timestamps: true }
);

const ShipmentModel = mongoose.model("Shipment", shipmentSchema);

module.exports = ShipmentModel;
