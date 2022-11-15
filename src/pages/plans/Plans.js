import React from 'react';
import {plans} from '../../data'
import UsableHeader from '../../Components/UsableHeader';
import Card from '../../UI/Card';
import HeaderImage from '../../images/header_bg_4.jpg'
import { Link } from 'react-router-dom';
import './plans.css'
const Plans = () => {
  return (
    <>
    <UsableHeader title="Membership Plans" image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet dignissimos esse vitae, repudiandae quaerat.
    </UsableHeader>
    <section className='plans'>
      <div className="container plans-container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature,available},index)=>{
                  return(
                    <p key={index} className={!available ? 'disabled' : ''}>
                    {feature}
                  </p>
                  )
                
                })
              }
              <Link to="/workingonit"><button className='btn lg'>Choose Plan</button></Link>
            </Card>
          })
        }
      </div>
    </section>
    
    </>
  );
}

export default Plans;
