import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
    return (
      <div>
        <div className="post">
          <Link to={props.id}><h2>{props.title}</h2></Link>
          <h6 className="text-secondary">Author: {props.author}</h6>
        </div>
      </div>
    );
}

export default PostPreview;
