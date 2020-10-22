import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Contact from './Contact';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { loading, contacts } = contactContext;

  useEffect(() => {
    contactContext.searchContacts();
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // } else {
  //   return (
  //     <table>
  //       {contacts.map((contact) => (
  //         <Contact contact={contact} key={uuid()} />
  //       ))}
  //     </table>
  //   );
  // }
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
            <th>Email</th>
            <th>Name</th>
          </thead>
          {contacts.map((contact) => (
            <Contact contact={contact} key={uuid()} />
          ))}
        </table>
      </div>
    );
  }
};

export default Contacts;
