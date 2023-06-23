import axios from 'axios';

export const fetchUsers = (page, perPage) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
      );
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
  };
};
