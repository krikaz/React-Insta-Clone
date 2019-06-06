import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Like from '../Like/Like';
import styled from 'styled-components';

const ContainerPost = styled.div`
	margin: 0.5rem;
	max-width: 350px;
	background-color: lightcyan;
`;

const User = styled.div`
	display: flex;
	align-items: center;
`;

const UserDiv = styled.div`
	width: 50px;
	height: 50px;
	margin: 1rem;
`;

const Img = styled.img`
	width: 100%;
	height: auto;
`;

const UserH2 = styled.h2`
	margin: 1rem;
`;

const TimeStamp = styled.p`
	color: grey;
	opacity: 0.6;
`;

export default function PostContainer({ post }) {
	return (
		<ContainerPost>
			<User>
				<UserDiv>
					<Img src={post.thumbnailUrl} alt="thumbnail" />
				</UserDiv>
				<UserH2>{post.username}</UserH2>
			</User>
			<Img src={post.imageUrl} alt="post" />
			<Like likes={post.likes} />
			<CommentSection comments={post.comments} />
			<TimeStamp>Posted on {post.timestamp}</TimeStamp>
		</ContainerPost>
	);
}

PostContainer.propType = {
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number,
	timestamp: PropTypes.string.isRequired,
};
