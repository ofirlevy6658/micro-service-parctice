const express = require("express");
bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
	console.log("in");
	res.send(posts);
});

app.post("/posts", async (req, res) => {
	const id = randomBytes(4).toString("hex");
	try {
		const { title } = req.body;
		if (!title) throw new Error("Title not provided");
		posts[id] = {
			id,
			title,
		};
		await axios.post("http://localhost:4005/events", {
			type: "postCreated",
			data: {
				id,
				title,
			},
		});
		app.post("/events", (req, res) => {
			console.log("Received Event", req.body.type);

			res.send({});
		});
		res.status(201).send(posts[id]);
	} catch (e) {
		res.send(e.message);
	}
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listen on ${PORT}`);
});
