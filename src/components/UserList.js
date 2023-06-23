import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions";
import { Link } from "react-router-dom";
import "./userList.css";
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, perPage));
  }, [dispatch, currentPage,perPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePerPageChange = (e) => {
    setPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="container list-details">
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
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="perPageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Per Page: {perPage}
          </button>
          <ul className="dropdown-menu" aria-labelledby="perPageDropdown">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handlePerPageChange}
                value="5"
              >
                5
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handlePerPageChange}
                value="10"
              >
                10
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handlePerPageChange}
                value="15"
              >
                15
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;
