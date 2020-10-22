import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Contact from './Contact';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { loading, contacts } = contactContext;

  useEffect(() => {
    contactContext.searchContacts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Contacts</h1>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Contacts</h1>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Contact contact={contact} key={uuid()} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Contacts;
