const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/app-slack-oauth", (req, res) => {
  console.log(req.query);
  console.log(req.query.code);
  const code = req.query.code;
  res.send(code);
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Landing page app listening at http://localhost:${port}`)
);
