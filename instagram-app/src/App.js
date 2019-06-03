import React from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


function App() {
  return (
    <div>
      {dummyData.map(postObj => (
        <PostContainer props={postObj} />
      ))}
    </div>
  );
}

export default App;


