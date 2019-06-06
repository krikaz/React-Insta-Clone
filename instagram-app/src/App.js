import React from 'react';
import PostPages from './components/PostContainer/PostPages';
import WithAuthenticate from './components/Authentification/WithAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = WithAuthenticate(PostPages)(Login);

export default class App extends React.Component {
	render() {
		return (
			<div>
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}
