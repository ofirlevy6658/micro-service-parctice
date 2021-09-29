import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
	const [posts, setPosts] = useState({});

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		const res = await axios("http://localhost:4000/posts");
		setPosts(res.data);
	};

	const renderedPosts = Object.values(posts).map((post) => {
		return (
			<div
				key={post.id}
				className="card"
				style={{ width: "30%", marginBottom: "20px" }}
			>
				<div className="card-body">
					<h3>{post.title}</h3>
				</div>
				<CommentList id={post.id} />
				<CommentCreate id={post.id} />
			</div>
		);
	});

	return (
		<div className="d-flex flex-row flex=wrap justify-content-between">
			{renderedPosts}
		</div>
	);
}
