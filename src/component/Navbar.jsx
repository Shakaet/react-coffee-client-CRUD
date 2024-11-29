import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthProvider } from './Provider';

const Navbar = () => {


    let {users,handleSignOut}=useContext(AuthProvider)

    let nav=useNavigate()

    let signOut=()=>{
        handleSignOut()
        .then(()=>{
            console.log("SignOut Successful")
            nav("/login")

        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let link=<>

      <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/addCoffee">Add User</NavLink>
        </li>
        
        <li><NavLink to="/user">users</NavLink></li>
        {
           users ? <li><button onClick={signOut}>SignOut</button></li>:<li><NavLink to="/login">login</NavLink></li>
        }
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
       {link}
      </ul>
    </div>
    <h2 className='text-black text-3xl font-extrabold'>Espresso Emporium</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;