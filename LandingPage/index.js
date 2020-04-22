const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/app-slack-oauth", (req, res) => {
  const body = `code=${req.query.code}&client_id=${process.env.CLIENTID}&client_secret=${process.env.CLIENTSECRET}`;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  axios
    .post("https://slack.com/api/oauth.v2.access", body, { headers })
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      console.log(`ERROR: ${JSON.stringify(err.response.data)}`);
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Landing page app listening at http://localhost:${port}`)
);
