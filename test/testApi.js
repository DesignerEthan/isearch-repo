// source - https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai

// load in requirements
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../api");
const should = chai.should();

chai.use(chaiHttp);

// Test our main block
describe("Get iTunes Data", () => {
  // test the end point
  describe("hit /search endpoint", () => {
    // what it should be doing
    it("it should GET search results for post malone", (done) => {
      chai
        .request(app)
        .get("/search")
        .end((err, res) => {
          res.should.have.status(200); // should return a 200 status
          res.body.resultCount.should.not.eql(0); // json resultCount field should not return 0
          // I know the resultCount should be 50 however I went with just checking is not 0 as new songs could be added so the 50 is a growing number
          done();
        });
    });
  });
});
