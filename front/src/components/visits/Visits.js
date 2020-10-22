import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Visit from './Visit';
import VisitContext from '../../context/visits/visitContext';

const Visits = () => {
  const visitContext = useContext(VisitContext);
  const { loading, visits } = visitContext;

  useEffect(() => {
    visitContext.searchVisits();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Visits</h1>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Visits</h1>
        <table className='table'>
          <thead className='thead-dark'>
            <th>GUID</th>
            <th>URL</th>
            <th>Acessed at</th>
          </thead>
          {visits.map((visit) => (
            <Visit visit={visit} key={uuid()} />
          ))}
        </table>
      </div>
    );
  }
};

export default Visits;
