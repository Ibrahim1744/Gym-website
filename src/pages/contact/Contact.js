import React from 'react';
import UsableHeader from '../../Components/UsableHeader';
import HeaderImage from '../../images/header_bg_2.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'

import './contact.css'
const Contact = () => {
  return (
    <>
        <UsableHeader title="Get In Touch" image={HeaderImage} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere quas cum delectus dolores iste?
        </UsableHeader>
        <section className='contact'>
          <div className="container contact-container">
            <div className="contact-wrapper">
              <a href="mailto:himanaser86@gmail.com" target="_blank"><AiOutlineMail/></a>
              <a href="https://wa.me/+201068184721" target="_blank"><BsWhatsapp/></a>
              <a href="https://m.me/100008558927155" target="_blank"><FaFacebookMessenger/></a>

            </div>
          </div>
        </section>
    </>
  );
}

export default Contact;
