import React from 'react';
import Comment from '../Comment/Comment';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './CommentSection.css';


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
		// alert('A name was submitted: ' + this.state.value);
		this.setState({comments: this.props.comments.concat({username:'newguy', text:this.state.value})})
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
						<input type="text" value={this.state.value} onChange={this.handleChange} />
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
