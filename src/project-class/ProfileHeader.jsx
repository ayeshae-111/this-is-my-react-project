import React from "react";

import "./Profile.css";

function ProfileHeader({ name, image }) {
  return (
    <div className="profile-header">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default ProfileHeader;