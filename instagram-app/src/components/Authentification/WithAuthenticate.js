import React from 'react';

export default function WithAuthenticate(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component />
      );
    }
  }
}