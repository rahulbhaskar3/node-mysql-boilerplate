const path = require("path");
const { check, validationResult } = require("express-validator/check");
const validationHelper = require(path.join(__dirname, "..", "helper", "validationHelper.js"));

var jokeMiddleware = {
    chkId : [
        check("id").exists().isNumeric().withMessage('Please enter a valid joke id'),
		(req, res, next) => {
			validationHelper.validate(req, res, next);
        }
    ],
    chkSearch: [
        check("searchTerm").exists().custom((value, { req }) => {
            let keyCheck = true;
            let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
			if (typeof req.query.searchTerm === "undefined" || req.query.searchTerm == "") {
                keyCheck = false;
            }
            if (req.query.searchTerm !== "" && regex.test(req.query.searchTerm) === true) {
                keyCheck = false;
            }
			return keyCheck;
		}).withMessage("Please enter a valid search term"),
		(req, res, next) => {
			validationHelper.validate(req, res, next);
		}
    ],
    chkJokeDescription:[
        check("jokeDescription").exists().custom((value, { req }) => {
            let keyCheck = true;
			if (typeof req.body.jokeDescription === "undefined" || req.body.jokeDescription == "") {
                keyCheck = false;
            }
			return keyCheck;
		}).withMessage("Please enter a valid joke description"),
		(req, res, next) => {
			validationHelper.validate(req, res, next);
		}
    ],
    chkJokeCategory:[
        check("jokeCategory").exists().isNumeric().custom((value, { req }) => {
            let keyCheck = true;
			if (typeof req.body.jokeCategory === "undefined" || req.body.jokeCategory == "") {
                keyCheck = false;
            }
			return keyCheck;
		}).withMessage("Please enter a valid joke category"),
		(req, res, next) => {
			validationHelper.validate(req, res, next);
		}
    ]

};

module.exports = jokeMiddleware;