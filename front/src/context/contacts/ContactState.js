import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { GET_CONTACTS, SET_LOADING } from '../types';
import React, { useReducer } from 'react';

const ContactState = (props) => {
  const intialState = {
    contacts: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ContactReducer, intialState);

  const searchContacts = async () => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get('http://localhost:8000/v1/contacts');

    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        searchContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
