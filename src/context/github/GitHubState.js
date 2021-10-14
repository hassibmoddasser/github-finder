import React, { useReducer } from 'react';
import axios from 'axios';

import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

function GitHubState (props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  // Get single GitHub user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  }

  // Reset User State
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return <GitHubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      getUser,
      clearUsers
    }}>
      {props.children}
    </GitHubContext.Provider>
};

export default GitHubState;