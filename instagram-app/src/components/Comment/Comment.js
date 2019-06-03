import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export default function Comment({ username, text }) {
	// console.log(username);
	// console.log(text);

	return (
		<div className='comment'>
			<span className='username'>{username}</span>
			<span className='text'> {text}</span>
		</div>
	);
}

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
