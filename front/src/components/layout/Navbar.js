import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        Home
      </Link>

      <div class='navbar-collapse'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <Link to='/visits' className='nav-link'>
              Visits
            </Link>
          </li>
          <li class='nav-item'>
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
