import React from 'react';
import './Like.css';

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
			<p className="likes" onClick={this.clickHandler}>
				{this.state.likes} likes
			</p>
		);
	}
}
