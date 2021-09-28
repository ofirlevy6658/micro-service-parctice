import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
	const [content, setContent] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios.post(`http://localhost:4200/posts/${postId}/comments`, {
			content,
		});
		setContent("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>new Comment</label>
					<input
						className="form-control"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
}
