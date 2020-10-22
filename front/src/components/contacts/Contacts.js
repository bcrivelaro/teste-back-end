import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Contact from './Contact';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { loading, contacts, lastPage } = contactContext;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    contactContext.searchContacts(currentPage);
    // eslint-disable-next-line
  }, []);

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    contactContext.searchContacts(newPage);
  };

  const handleBackPage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    contactContext.searchContacts(newPage);
  };

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
        <div className='btn-group' role='group' aria-label='Basic example'>
          {currentPage > 1 && (
            <button
              type='button'
              className='btn btn-secondary'
              onClick={handleBackPage}
            >
              Back
            </button>
          )}
          {!lastPage && (
            <button
              type='button'
              className='btn btn-secondary'
              onClick={handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default Contacts;
