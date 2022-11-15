import React from 'react';
import './trainers.css'
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import UsableHeader from '../../Components/UsableHeader';
import { trainers } from '../../data';
import HeaderImage from '../../images/header_bg_5.jpg'
import Trainer from '../../Components/Trainer';

const Trainers = () => {
  return (
    <>
      <UsableHeader title="Our Trainers" image={HeaderImage}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic esse nobis maiores! Temporibus perspiciatis sed distinctio ullam recusandae?
      </UsableHeader>
      <section className='trainers'>
          <div className="container trainers-container">
            {
              trainers.map(({id,image,job,name,socials})=>{
                return <Trainer key={id} image={image} name={name} job={job} socials={[
                    {icon:<BsInstagram/> , link:socials[0]},
                    {icon:<BsTwitter/> , link:socials[1]},
                    {icon:<AiFillFacebook/> , link:socials[2]},
                    {icon:<BsLinkedin/> , link:socials[3]}
                ]
              } />

                     
              })
            }
          </div>
      </section>
    </>
  );
}

export default Trainers;
