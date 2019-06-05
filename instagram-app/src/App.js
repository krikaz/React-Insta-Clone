import React from 'react';
import './App.css';
import PostPages from './components/PostContainer/PostPages';
import WithAuthenticate from './components/Authentification/WithAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = WithAuthenticate(PostPages)(Login);

export default class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	render() {
		return (
			<div>
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}
