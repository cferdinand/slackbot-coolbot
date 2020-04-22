const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.all("/app-slack-oauth", (req, res) => {
  console.log(req);
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Landing page app listening at http://localhost:${port}`)
);
