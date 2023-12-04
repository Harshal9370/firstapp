import React from 'react'
import './Youtube.css';

function ButtonSection() {
  return (
   <section className='buttons'style={{height:"40px", padding:"20px"}}>
    <button className='but'>All</button>
    <button className='but'>Computer</button>
    <button className='but'>Music</button>
    <button className='but'>Movie</button>

   </section>
  )
}

export default ButtonSection
