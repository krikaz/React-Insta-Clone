import React from 'react';

const myStorage = window.localStorage;

const login = () => {
	console.log('loggin in...');
	myStorage.setItem('user', 'pass');
};

export default function Login() {
	return (
		<div>
			<form onSubmit={login}>
				<input type="text" name="username" />
				<input type="text" name="password" />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}
