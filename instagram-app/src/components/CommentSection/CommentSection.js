import React from 'react';
import Comment from '../Comment/Comment';

export default function CommentSection({ comments }) {
  return (
    <div>
      <Comment username={comments.username} text={comments.text} />
    </div>
  );
}