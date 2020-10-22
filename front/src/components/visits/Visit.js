import React from 'react';

const Visit = ({ visit }) => {
  return (
    <tr>
      <td>{visit.guid}</td>
      <td>{visit.url}</td>
      <td>{visit.accessed_at}</td>
    </tr>
  );
};

export default Visit;
