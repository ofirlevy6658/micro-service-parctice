import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await axios(`http://localhost:4200/posts/${postId}/comments`);
		setComments(res.data);
	};
	const renderedComments = comments.map((comment) => {
		return <li key={comment.id}>{comment.content}</li>;
	});
	return <ul>{renderedComments}</ul>;
}
