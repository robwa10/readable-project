import React from 'react';
import PostPreview from './post-preview';

const PostsList = ({ posts }) => (
  <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
    <div className="card">
      <div className="card-body">
        {posts.map((post, index) => {
          return (
            <div key={post.id}>
              <PostPreview
                title={post.title}
                body={`${post.body.substring(0, 300)}...`}
                score={post.voteScore}
                author={post.author}
                timestamp={post.timestamp}
              />
              {/* Add a <hr /> under all but last post */}
              {index + 1 !== posts.length ?  <hr /> : null}
            </div>
          );
        })}
      </div>
    </div>
  </div>
)

export default PostsList;
