import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = ({ route, title, author, comments }) => {
    return (
      <div>
        <div className="post">
          <Link to={route}><h2>{title}</h2></Link>
          <h6 className="text-secondary">{`Author: ${author}`}</h6>
          <h6 className="text-secondary">{`Comments: ${comments}`}</h6>
        </div>
      </div>
    );
}

export default PostPreview;
