import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import uuid from 'uuid';
import styled from 'styled-components';

const Navigation = styled.nav`
	background-color: lightgoldenrodyellow;
	border-bottom: 1px solid black;
	padding: 1rem;
	display: flex;
	justify-content: space-around;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

export default class PostPages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			value: '',
			search: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.searchUser = this.searchUser.bind(this);
	}

	componentDidMount() {
		this.setState({ data: dummyData });
	}

	handleChange(event) {
		this.setState({ search: event.target.value });
	}

	searchUser(event) {
		if (!this.state.search) {
			this.setState({
				data: dummyData,
			});
		} else {
			this.setState({
				data: this.state.data.filter(obj => obj.username === this.state.search),
			});
		}
		event.preventDefault();
	}

	render() {
		return (
			<div className="app">
				<Navigation>
					<span>Instagram</span>
					<form onSubmit={this.searchUser}>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
							placeholder="search"
						/>
						<input type="submit" value="Submit" />
					</form>
				</Navigation>
				<Content>
					{this.state.data.map(postObj => (
						<PostContainer key={uuid()} post={postObj} />
					))}
				</Content>
			</div>
		);
	}
}
