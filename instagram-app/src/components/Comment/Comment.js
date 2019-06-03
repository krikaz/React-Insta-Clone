import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ username, text }) {
	// console.log(username);
	// console.log(text);

	return (
		<div className='comment'>
			<h4>{username}</h4>
			<p>{text}</p>
		</div>
	);
}

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
