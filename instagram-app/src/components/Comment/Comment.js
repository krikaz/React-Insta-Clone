import React from 'react';


export default function Comment({ username, text }) {

	// console.log(username);
  // console.log(text);
  
	return (
		<div>
			<h4>{username}</h4>
			<p>{text}</p>
		</div>
	);
}
