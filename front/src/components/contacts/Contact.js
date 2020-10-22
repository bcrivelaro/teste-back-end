import React from 'react';

const Contact = ({ contact }) => {
  return (
    <tr>
      <td>{contact.email}</td>
      <td>{contact.name}</td>
    </tr>
  );
};

export default Contact;
