import React from 'react';


const Header = () => {
    return (
        <div className="navbar pt-3 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Home</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/blog'>Blog</a></li>
      </ul>
    </div>
    <a href='/' className="normal-case text-xl ml-5 text-blue-500">Therapy Care</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href='/'>Home</a></li>
      <li><a href='/services'>Services</a></li>
      <li><a href='/blog'>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button type="button" className="flex items-center justify-center p-3 mr-5 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50">Login</button>
  <button type="button" className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50">Register</button>
  </div>
</div>
    );
};

export default Header;