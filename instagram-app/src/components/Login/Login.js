import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({ [name]: value });
	}

	login = () => {
		window.localStorage.setItem(this.state.username, this.state.password);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input type="text" name="username" onChange={this.handleChange} />
					<input type="text" name="password" onChange={this.handleChange} />
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}
