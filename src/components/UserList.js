import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions";
import { Link } from "react-router-dom";
import "./userList.css";
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, 5));
  }, [dispatch, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container">
      <ul class="list-group">
        {users.map((user) => (
          <li key={user.id} class="list-group-item">
            <Link to={`/user/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button type="button" class="btn btn-primary" onClick={nextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
