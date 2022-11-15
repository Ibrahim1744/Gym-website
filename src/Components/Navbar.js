import Logo from '../images/logo.png'
import React from 'react';
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose}  from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing,setIsNavShowing]=useState(false)
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className='logo' onClick={()=>setIsNavShowing(false)}>
            <img src={Logo} alt="" />
        </Link>
        <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
         {
          links.map(({name,path}, index)=>{
            return(
              <li key={index}>
                <Link  className="nav-link" to={path} onClick={()=> setIsNavShowing(!isNavShowing)} >{name}</Link>
              </li>
            )
          })
         }
        </ul>
        <button className='nav-toggle-btn' onClick={()=> setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ? <AiOutlineClose/>  : <FaBars/>
          }
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
