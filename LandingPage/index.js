const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/app-slack-oauth", (req, res) => {
  console.log(req.query);
  console.log(req.query.code);
  const code = req.query.code;
  //   axios.post("https://slack.com/api/oauth.v2.access",)
  res.send(code);
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Landing page app listening at http://localhost:${port}`)
);
