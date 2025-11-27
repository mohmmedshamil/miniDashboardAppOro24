import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info-card">
      <h2>Basic Information</h2>
      <div className="user-info-grid">
        <div className="info-item">
          <label>Name:</label>
          <span>{user.name}</span>
        </div>
        <div className="info-item">
          <label>Username:</label>
          <span>{user.username}</span>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="info-item">
          <label>Phone:</label>
          <span>{user.phone}</span>
        </div>
        <div className="info-item">
          <label>Website:</label>
          <span>{user.website}</span>
        </div>
        <div className="info-item">
          <label>Company:</label>
          <span>{user.company?.name}</span>
        </div>
        <div className="info-item">
          <label>Address:</label>
          <span>{user.address?.street}, {user.address?.city}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
