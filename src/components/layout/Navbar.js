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
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">              
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
            </svg>
          </button>
        </div> 
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
          </button>
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