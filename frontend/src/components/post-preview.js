import React from 'react';

const PostPreview = (props) => {
    return (
      <div>
        <div className="post">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <h5>{props.score}</h5>
          <h6 className="text-secondary">Author: {props.author}</h6>
          <h6 className="text-secondary">{props.timestamp}</h6>
        </div>
      </div>
    );
}

export default PostPreview;
