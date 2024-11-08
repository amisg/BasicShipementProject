const express = require("express");
const server = express();

const mongoose = require("mongoose");
const cors = require("cors");

const homeRoute = require("./1.ShipmentProject/routes/home.routes");
const authRoute = require("./1.ShipmentProject/routes/auth.routes");

const dotenv = require("dotenv");

dotenv.config();

server.use(express.json());
server.use(cors());

/// register routes
server.use("/api/", homeRoute);
server.use("/api/auth", authRoute);

// database connection

const connectionString = process.env.MONGO_CONNECTION;
const database = "ShipmentDetails";

mongoose
	.connect(connectionString + database)
	.then(() => {
		console.log("db connected");
	})
	.catch(() => {
		console.log("db not connected");
	});

server.listen(8083, () => {
	console.log("server running on 8083");
});
