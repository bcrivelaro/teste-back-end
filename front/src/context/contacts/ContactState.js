import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { GET_CONTACTS, SET_LOADING } from '../types';
import React, { useReducer } from 'react';

const ContactState = (props) => {
  const intialState = {
    contacts: [],
    loading: false,
    lastPage: false,
  };

  const [state, dispatch] = useReducer(ContactReducer, intialState);

  const searchContacts = async (page = 1) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(
      `http://localhost:8000/v1/contacts?page=${page}`
    );

    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
      lastPage: !res?.headers?.['link']?.includes('next'),
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        lastPage: state.lastPage,
        searchContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
