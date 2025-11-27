import React, { useState } from 'react';

const UserPosts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="user-posts-card">
      <h2>Posts by User</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="post-card"
            onClick={() => handlePostClick(post)}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body-preview">
              {post.body.length > 100 
                ? `${post.body.substring(0, 100)}...` 
                : post.body
              }
            </p>
            <span className="read-more">Click to read more</span>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="no-posts">
          <p>No posts found for this user.</p>
        </div>
      )}

      {selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedPost.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{selectedPost.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPosts;
