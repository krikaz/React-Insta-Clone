import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		};
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
			<form onSubmit={this.searchUser}>
				<input
					type="text"
					value={this.state.search}
					onChange={this.handleChange}
					placeholder="search"
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
