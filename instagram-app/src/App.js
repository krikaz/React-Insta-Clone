import React from 'react';
import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import uuid from 'uuid';
import PostPages from './components/PostContainer/PostPages';
import WithAuthenticate from './components/Authentification/WithAuthenticate';

const ComponentFromWithAuthenticate = WithAuthenticate(PostPages);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}


	render() {
		return (
			<div>
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}

