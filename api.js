// define constants / load in required
const express = require("express");
const helmet = require("helmet");
const app = express();

const fetch = require("node-fetch");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// simple fetch api based on - https://www.npmjs.com/package/node-fetch
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
app.get("/search", function (req, res, next) {
  // pass simple url queries to build itunes url + set defaults
  let term = req.query.term ? req.query.term : "Post Malone";
  let media = req.query.media ? req.query.media : "all";

  fetch("https://itunes.apple.com/search?term=" + term + "&media=" + media)
    .then((res) => res.json())
    .then((json) => res.send(json));

  // no need to build in error handling as itunes will always return valid json even if its just empty
});

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// set a wild card for any unset route - custom 404 message
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
app.get("*", function (req, res, next) {
  let err = new Error("Sorry! Please check your URL");
  err.statusCode = 404;
  next(err);
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


// setup listener on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Web Projects listening on port 3001!");
});


app.use(
  helmet({
    referrerPolicy: { policy: "no-referrer" },
  })
);

module.exports = app; // for testing : https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai & https://stackoverflow.com/questions/33986863/mocha-api-testing-getting-typeerror-app-address-is-not-a-function
