import axios from 'axios';
import VisitContext from './visitContext';
import VisitReducer from './visitReducer';
import { GET_VISITS, SET_LOADING } from '../types';
import React, { useReducer } from 'react';

const VisitState = (props) => {
  const intialState = {
    visits: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(VisitReducer, intialState);

  const searchVisits = async () => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get('http://localhost:8000/v1/visits');

    dispatch({
      type: GET_VISITS,
      payload: res.data,
    });
  };

  return (
    <VisitContext.Provider
      value={{
        visits: state.visits,
        loading: state.loading,
        searchVisits,
      }}
    >
      {props.children}
    </VisitContext.Provider>
  );
};

export default VisitState;
