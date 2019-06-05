import React from 'react';

export default function WithAuthenticate(FirstComponent, SecondComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				logginIn: false,
			};
		}

		componentDidMount() {
			if (window.localStorage['user']) {
				this.setState({ logginIn: true });
			}
		}

		render() {
      if (this.state.logginIn) {
        return <FirstComponent />;
      } else {
		  	return <SecondComponent />;
      }
		}
	};
}
