const path = require("path");
const { check, validationResult } = require("express-validator/check");
const statusCodes = require(path.join(__dirname, "..", "config", "httpConfig.js"));
module.exports = {
	validate: async function (req, res, next) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(statusCodes.badRequest).send({ errors: errors.mapped() });
		}
		else {
			return next();
		}
	}
};
