const express = require("express");
bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
	console.log("in");
	res.send(posts);
});

app.post("/posts", (req, res) => {
	const id = randomBytes(4).toString("hex");
	try {
		const { title } = req.body;
		if (!title) throw new Error("Title not provided");
		posts[id] = {
			id,
			title,
		};
		res.status(201).send(posts[id]);
	} catch (e) {
		res.send(e.message);
	}
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listen on ${PORT}`);
});
