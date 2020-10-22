import axios from 'axios';
import VisitContext from './visitContext';
import VisitReducer from './visitReducer';
import { GET_VISITS, SET_LOADING } from '../types';
import React, { useReducer } from 'react';

const VisitState = (props) => {
  const intialState = {
    visits: [],
    loading: false,
    lastPage: false,
  };

  const [state, dispatch] = useReducer(VisitReducer, intialState);

  const searchVisits = async (page = 1) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(`http://localhost:8000/v1/visits?page=${page}`);

    dispatch({
      type: GET_VISITS,
      payload: res.data,
      lastPage: !res?.headers?.['link']?.includes('next'),
    });
  };

  return (
    <VisitContext.Provider
      value={{
        visits: state.visits,
        loading: state.loading,
        lastPage: state.lastPage,
        searchVisits,
      }}
    >
      {props.children}
    </VisitContext.Provider>
  );
};

export default VisitState;
