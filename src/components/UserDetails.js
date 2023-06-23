import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./userDetails.css"
const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <img src={user.avatar} alt="User Avatar" />
      <p>
        <strong>Name:</strong> {user.first_name} {user.last_name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetails;
