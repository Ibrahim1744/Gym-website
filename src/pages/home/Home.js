import React from 'react';
import FAQs from '../../Components/FAQs';
import Header from '../../Components/Header';
import Programs from '../../Components/Programs';
import Testimonials from '../../Components/Testimonials';
import Values from '../../Components/Values';
import './home.css'
const Home = () => {
  return (
    <>
      <Header/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </>
  );
}
export default Home;
