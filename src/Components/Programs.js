import React from 'react';
import {FaCrown} from 'react-icons/fa';
import './programs.css'
import SectionHead from './SectionHead';
import {programs} from '../data'
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai'
const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs-container">
        <SectionHead icon={<FaCrown/>} title="Programs"/>
    
        <div className="programs-wrapper">
          {
            programs.map(({id,icon,title,info,path})=>{
              return(
                <Card className="prorams-program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link className='btn sm' to={path}>Read More <AiFillCaretRight/> </Link>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Programs;
