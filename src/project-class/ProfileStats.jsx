import React from "react";


import "./Profile.css";

function ProfileStats({ followers, posts, likes }) {
  return (
    <div className="profile-stats">
      <div className="profile-stat">
        <span>{posts}</span>
        <label>Posts</label>
      </div>
      <div className="profile-stat">
        <span>{followers}</span>
        <label>Followers</label>
      </div>
      <div className="profile-stat">
        <span>{likes}</span>
        <label>Likes</label>
      </div>
    </div>
  );
}

export default ProfileStats;