import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./userDetails.css";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container">
      <div className="details-card">
        <img src={user.avatar} class="card-img-top user-img" alt="..." />
        <div className="card-body">
          <p className="card-text details-text">
            {user.first_name} {user.last_name} <br />
            {user.email}
          </p>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-details">
        {" "}
        <Link to="/" className="link-class">
          Back to User List
        </Link>
      </button>
    </div>
  );
};

export default UserDetails;
