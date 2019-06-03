import React from 'react';

export default function Comment({username, text}) {
  return (
    <div>
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );
}