import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


export default function PostContainer({ post }) {
	// console.log(post);

	return (
		<div>
			<CommentSection comments={post.comments} />
		</div>
	);
}

PostContainer.propType = {
  username: PropTypes.string.isRequired,
	likes: PropTypes.number,
	timestamp: PropTypes.string.isRequired,
};
