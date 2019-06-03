import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer ({post}) {
  return (
    <div>
      <CommentSection comments={post.comments} />
    </div>
  );
}