import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = ({ id, title, author }) => {
    return (
      <div>
        <div className="post">
          <Link to={id}><h2>{title}</h2></Link>
          <h6 className="text-secondary">{`Author: ${author}`}</h6>
        </div>
      </div>
    );
}

export default PostPreview;
