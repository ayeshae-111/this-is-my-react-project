import React from "react";

import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import pookie from "../assets/pookie.jpg";

function ProfileContainer() {
  const profiles = [
    
    {
      id: 1,
      name: "Ayesha Elahi",
      image: pookie,
      followers: 120,
      posts: 15,
      likes: 230,
    },
  ];

  return (
    <div className="profile-container">
      {profiles.map((profile) => (
        <div key={profile.id}>
          <ProfileHeader name={profile.name} image={profile.image} />
          <ProfileStats
            followers={profile.followers}
            posts={profile.posts}
            likes={profile.likes}
          />
        </div>
      ))}
    </div>
  );
}

export default ProfileContainer;