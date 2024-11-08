class ShipementNotCreated extends Error {
	constructor(message) {
		super(message);
	}
}

class ShipementDetailNotFound extends Error {
	constructor(message) {
		super(message);
	}
}

module.exports = { ShipementNotCreated, ShipementDetailNotFound };
