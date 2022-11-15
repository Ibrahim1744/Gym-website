import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import {GrFacebook} from 'react-icons/gr'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <article>
          <Link className='logo' to="/">
              <img src={Logo} alt="" />
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et architecto officia dolorem porro mollitia deleniti voluptas! Deserunt, libero dignissimos.

          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100008558927155" target="_blank"><BsLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100008558927155" target="_blank"><BsFacebook/></a>
            <a href="https://www.facebook.com/profile.php?id=100008558927155" target="_blank"><BsTwitter/></a>
            <a href="https://www.facebook.com/profile.php?id=100008558927155" target="_blank"><BsInstagram/></a>

          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/Contact">contact</Link>

        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Community</Link>
          <Link to="/s">FAQs</Link>

        </article>  <article>
          <h4>Get In Touch</h4>
        
          <Link to="/Contact">Contact Us</Link>
          <Link to="/s">Support</Link>


        </article>
      </div>
      <div className="footer-copyright">
        <small>2022 Ibrahim-Nasser &copy; All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
