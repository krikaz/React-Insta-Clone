import React from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import uuid from 'uuid';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: dummyData,
			value: '',
			search: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.searchUser = this.searchUser.bind(this);
	}

	handleChange(event) {
		this.setState({ search: event.target.value });
	}

	searchUser(event) {
		this.setState({
			data: this.state.data.filter(obj => obj.username === this.state.search),
		});
	}

	componentDidMount() {}

	render() {
		return (
			<div className="app">
				<div className="nav">
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
				</div>
				<div className="content">
					{this.state.data.map(postObj => (
						<PostContainer key={uuid()} post={postObj} />
					))}
				</div>
			</div>
		);
	}
}
