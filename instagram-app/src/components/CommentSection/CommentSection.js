import React from 'react';
import Comment from '../Comment/Comment';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './CommentSection.css';

const addNewComment = (comment, event, index) => {
	event.splice(index, 0, comment);
};

export default class CommentSection extends React.Component {
	constructor(comments) {
		super(comments);
		this.state = {
			comments: comments,
		};

	// console.log(comments);


	return (
		<div className="commentSection">
			{comments.map(comment => (
				<Comment key={uuid()} username={comment.username} text={comment.text} />
			))}
			<form onSubmit={addNewComment}>
				<label>
					Add comment:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

// CommentSection.propTypes = {
// 	comments: PropTypes.array.isRequired,
// };
