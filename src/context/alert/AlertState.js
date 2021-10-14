import React, { useReducer } from 'react';

import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

function AlertState(props) {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;