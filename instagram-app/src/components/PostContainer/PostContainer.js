import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

export default function PostContainer({ post }) {
	// console.log(post);

	return (
		<div className="postContainer">
			<h2>{post.username}</h2>
			<img src={post.thumbnailUrl} alt="thumbnail" />
			<img src={post.imageUrl} alt="post" />
			<p>Likes {post.likes}</p>
			<p>Posted on {post.timestamp}</p>
			<CommentSection comments={post.comments} />
		</div>
	);
}

PostContainer.propType = {
	username: PropTypes.string.isRequired,
	likes: PropTypes.number,
	timestamp: PropTypes.string.isRequired,
};
