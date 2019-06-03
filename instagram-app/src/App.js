import React from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import uuid from 'uuid';

export default function App() {
	// console.log(dummyData[0]);

	return (
		<div className="app">
			<div className="nav">
        nav
      </div>
			<div className="content">
				{dummyData.map(postObj => (
					<PostContainer key={uuid()} post={postObj} />
				))}
			</div>
		</div>
	);
}
