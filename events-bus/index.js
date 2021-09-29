const express = require("express");
const axios = require("axios");
bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();
app.use(bodyParser.json());
// app.use(cors());

app.post("/events", (req, res) => {
	const event = req.body;
	console.log("test");
	axios.post("http://localhost:4000/events", event);
	axios.post("http://localhost:4200/events", event);
	res.send({ status: "ok" });
});

app.listen(4005, () => {
	console.log("Listening on 4005");
});
