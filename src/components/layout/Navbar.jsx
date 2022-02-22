import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

function Navbar({ title }) {
  return (
    <nav className="mb-12 shadow-lg navbar bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link className="text-lg font-bold align-middle" to='/'>{title}</Link>
        </div> 
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/'>Home</Link> 
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/about'>About</Link>
          </div>
        </div>
        <div className="flex-none pl-2">
          <div className="avatar">
            <div className="w-10 h-10 m-1 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/29257731?v=4" alt="Logged in user" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GitHub Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;