import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Visit from './Visit';
import VisitContext from '../../context/visits/visitContext';

const Visits = () => {
  const visitContext = useContext(VisitContext);
  const { loading, visits, lastPage } = visitContext;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    visitContext.searchVisits();
    // eslint-disable-next-line
  }, []);

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    visitContext.searchVisits(newPage);
  };

  const handleBackPage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    visitContext.searchVisits(newPage);
  };

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
            <tr>
              <th>GUID</th>
              <th>URL</th>
              <th>Acessed at</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <Visit visit={visit} key={uuid()} />
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

export default Visits;
