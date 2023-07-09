import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => {
    return state.user.value;
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};

export default Profile;
