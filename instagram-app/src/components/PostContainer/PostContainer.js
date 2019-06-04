import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import Like from '../Like/Like';
// import Moment from 'react-moment';

// var moment = require('moment');
// console.log(Moment().format());

export default function PostContainer({ post }) {

	return (
		<div className="postContainer">
			<div className="user">
				<div><img src={post.thumbnailUrl} alt="thumbnail" /></div>
				<h2>{post.username}</h2>
			</div>
			<img src={post.imageUrl} alt="post" />
			<Like likes={post.likes} />
			<CommentSection comments={post.comments} />
			<p className='timestamp'>Posted on {post.timestamp}</p>
		</div>
	);
}

PostContainer.propType = {
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number,
	timestamp: PropTypes.string.isRequired,
};
