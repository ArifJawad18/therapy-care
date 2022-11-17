import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch( error => console.log(error))
   
  }
    return (
        <div className="navbar pt-3 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Home</a></li>
        <li><a href='/service'>Services</a></li>
        <li><a href='/blog'>Blog</a></li>
      </ul>
    </div>
    <a href='/' className="normal-case text-xl ml-5 text-blue-600">Therapy Care</a>
  </div>
  <div className="navbar hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href='/'>Home</a></li>
      <li><a href='/service'>Service</a></li>
      <li><a href='/blog'>Blog</a></li>
      <li>
        {
        user ?
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogOut}>Logout</button>
        </>
        :
        <>
          <li><a href='/login'>Login</a></li>
          <li><a href='/register'>Register</a></li>

        </>
        }
        </li>

    </ul>
  </div>


 
</div>
    );
};

export default Header;