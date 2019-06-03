import React from 'react';
import Comment from '../Comment/Comment';
import uuid from 'uuid';


export default function CommentSection({ comments }) {
	// console.log(comments);


	return (
		<div>
			{comments.map(comment => (
				<Comment key={uuid()} username={comment.username} text={comment.text} />
			))}
		</div>
	);
}
