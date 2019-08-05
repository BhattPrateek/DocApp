const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

const dataHelpers = require("./service/dataHelpers.js");

const helpers = dataHelpers();

app.get("/ping", function(req, res) {
  return res.send(JSON.stringify("pong"));
});

app.get("/getDoctors", function(req, res) {
  const doctors = helpers.getDoctors();
  return res.send(JSON.stringify(doctors));
});

app.post("/getAppointmentById", function(req, res) {
  const appointments = helpers.getAppoinmentsByDoctorId(req.body.id);
  return res.send(JSON.stringify(appointments));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
