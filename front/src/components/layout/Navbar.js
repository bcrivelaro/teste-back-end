import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        Home
      </Link>

      <div className='navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/visits' className='nav-link'>
              Visits
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contacts' className='nav-link'>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
