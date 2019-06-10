import React from 'react';
import Comment from '../Comment/Comment';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments,
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	addNewComment = (event, index) => {
		if (this.state.value) {
			this.setState({
				comments: this.state.comments.concat({
					username: Object.keys(window.localStorage)[0],
					text: this.state.value,
				}),
				value: '',
			});
		}
		event.preventDefault();
	};

	render() {
		return (
			<div className="commentSection">
				{this.state.comments.map(comment => (
					<Comment
						key={uuid()}
						username={comment.username}
						text={comment.text}
					/>
				))}
				<form onSubmit={this.addNewComment}>
					<label>
						Add comment:
						<input
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired,
};
