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
		};
	}
	componentDidMount() {}

	render() {
		return (
			<div className="app">
				<div className="nav">
					<span>Instagram</span>
					
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
