import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const Span = styled.span`
	font-weight: bold;
`;

const CommentDiv = styled.div`
	margin-bottom: 0.5rem;
`;

export default function Comment({ username, text }) {
	return (
		<CommentDiv>
			<Span>{username}</Span>
			<span> {text}</span>
		</CommentDiv>
	);
}

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
