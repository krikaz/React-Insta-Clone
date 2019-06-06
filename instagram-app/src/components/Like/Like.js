import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
	font-weight: bold;
`;

export default class Like extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.likes,
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event) {
		this.setState({ likes: this.state.likes + 1 });
	}

	render() {
		return (
			<Paragraph onClick={this.clickHandler}>
				{this.state.likes} likes
			</Paragraph>
		);
	}
}
