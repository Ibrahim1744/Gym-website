import React from 'react';
import UsableHeader from '../../Components/UsableHeader';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'
const About = () => {
  return (
   <>
   <UsableHeader title="About Us" image={HeaderImage}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci impedit illum voluptates blanditiis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique Inventore reiciendis non debitis dolores quo.

    </UsableHeader>
    <section className='about-story'>
        <div className="container about-story-container">
          <div className='about-section-img'>
            <img src={StoryImage} alt="" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique reiciendis similique aliquid facere provident nemo dicta.

            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique expedita reiciendis similique aliquid facere provident nemo dicta.
              
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique omnis?</p>
          </div>
        </div>
    </section>


    <section className='about-vision'>
        <div className="container about-vision-container">
          <div className="about-section-content">
            <h1>Out Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique ex maxime expedita reiciendis similique aliquid facere provident nemo dicta.

            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique Perspiciatis quod ex maxime expedita reiciendis similique aliquid facere provident nemo dicta.
              
            </p>
          </div>
          <div className='about-section-img'>
            <img src={VisionImage} alt="" />
          </div>
        </div>
    </section>


    <section className='about-mission'>
        <div className="container about-mission-container">
          <div className='about-section-img'>
            <img src={MissionImage} alt="" />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique aliquid facere provident nemo dicta.

            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique aliquid facere provident nemo dicta.
              
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod ex maxime expedita reiciendis similique elit. Numquam, omnis?</p>
          </div>
        </div>
    </section>
    </>
    
  );
}

export default About;
