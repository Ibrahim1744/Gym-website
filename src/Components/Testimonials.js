import React from 'react';
import SectionHead from './SectionHead';
import { useState } from 'react';
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card';
import {IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from '../data';
import './testimonial.css'




const Testimonials = () => {

  const [index,setIndex]=useState(0)
  const {name,job,avatar,quote}=testimonials[index];

  const nextTestimonialHandler=()=>{

       setIndex(prev=>prev + 1);
       if(index >= testimonials.length-1)
       {
        setIndex(0)
       }
  }
  const prevTestimonialHandler=()=>{
    setIndex(prev=>prev - 1);
    if(index <= 0)
    {
     setIndex(testimonials.length-1)
    }
  }
  return (
    <section className='testimonials'>
      <div className="container testmonials-container">
       <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonial-head"/>
       <Card className="testimonial">
          <div className="testimonial-avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial-quote'>{quote}</p>
          <h5>{name}</h5>
          <small className='testimonial-title'>{job}</small>
       </Card>
      <div className="testimonial-btn-container">
        <button className='testimonial-btn' onClick={prevTestimonialHandler}>
          <IoIosArrowDropleftCircle/>
        </button>
        <button className='testimonial-btn' onClick={nextTestimonialHandler}>
          <IoIosArrowDroprightCircle/>
        </button>
      </div>
      </div>
    </section> 
  );
}

export default Testimonials;
