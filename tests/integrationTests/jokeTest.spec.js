const path = require("path");
const statusCodes = require(path.join(__dirname, "..", "..", "config", "httpConfig.js"));
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require(path.join(__dirname, ".", "..", "..", "index"));
const expect = require("chai").expect;
const should = chai.should();
chai.use(chaiHttp);
let jokeID;

describe("GET /jokes/", () => {
	it.skip("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.get("/joke/")
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});
});


describe("GET Jokes by jokeId /joke/1", () => {
	it("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.get("/joke/1")
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 when improper/no jokeID is passed", (done) => {
		chai.request(server)
			.get("/joke/$$$$")
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});

describe("GET Search jokes by searchTerm /joke/search", () => {
	it("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.get("/joke/search")
			.query({searchTerm: "s"})
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 when improper/no searchTerm is passed", (done) => {
		chai.request(server)
			.get("/joke/search")
			.query({"searchTerm": ""})
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});

describe("GET jokes by category /joke/category", () => {
	it("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.get("/joke/category/1")
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 when improper/no categoryID is passed", (done) => {
		chai.request(server)
			.get("/joke/category/")
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});


describe("POST add jokes /joke/add", () => {
	it("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.post("/joke/add/")
			.send({
				"jokeDescription": "My joke from test file",
				"jokeCategory": 1			
			})
			.end(function (err, res) {
				jokeID = res.body.resourceID;
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 when invalid body params are passed", (done) => {
		chai.request(server)
			.post("/joke/add/")
			.send({
				"jokeDescriptions": "My joke from test file",
				"jokeCategory1": 1			
			})
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});


describe("PUT update jokes /joke/update", () => {
	it("Should return a 200 if data fetching is successful", (done) => {
		chai.request(server)
			.put("/joke/update/"+jokeID)
			.send({
				"jokeDescription": "My update joke from test file",
				"jokeCategory": 1			
			})
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 imProper jokeID passed", (done) => {
		chai.request(server)
			.put("/joke/update/addddd")
			.send({
				"jokeDescription": "My update joke from test file",
				"jokeCategory": 1			
			})
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});


describe("DELETE delete joke on the basis of jokeID /joke/delete", () => {
	it("Should return a 200 if data deletion is successful", (done) => {
		chai.request(server)
			.delete("/joke/delete/"+jokeID)
			.end(function (err, res) {
				res.should.have.status(statusCodes.ok);
				done();
			});
	});

	it("Should return a 400 imProper jokeID passed", (done) => {
		chai.request(server)
			.delete("/joke/delete/$#$#$#")
			.end(function (err, res) {
				res.should.have.status(statusCodes.badRequest);
				done(err);
			});
	});
});