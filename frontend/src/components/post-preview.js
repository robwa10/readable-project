import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
    return (
      <div>
        <div className="post">
          <Link><h2>{props.title}</h2></Link>
          <p>{props.body}</p>
          <h5>{props.score}</h5>
          <h6 className="text-secondary">Author: {props.author}</h6>
          <h6 className="text-secondary">{props.timestamp}</h6>
        </div>
      </div>
    );
}

export default PostPreview;
