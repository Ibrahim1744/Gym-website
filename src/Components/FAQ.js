import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({question ,answer}) => {
  const [isAnswerShowing,setAnswerShowing]= useState(false)
  return (
    <article className='faq' onClick={()=>setAnswerShowing(!isAnswerShowing)}>
      <div>
        <h4>{question}</h4>
        <button className='faq-icon'>
          {
            isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
          </button>
      </div>
       { isAnswerShowing && <p>{answer}</p>} 
    </article>
  );
}

export default FAQ;
