import { Link } from 'react-router-dom';
import React from 'react';
import Image from '../images/main_header.png'
import './header.css'
const Header = () => {
  return (
    <header className='main-header'>
      <div className="container main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos, modi nam necessitatibus maiores iure!</p>
          <Link className='btn lg' to="/plans">Get Started</Link>
        </div>
        <div className="main-header-right">
          <div className="main-header-circle">

          </div>
          <div className="main-header-img">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
