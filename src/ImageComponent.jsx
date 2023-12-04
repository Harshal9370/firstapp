import React from 'react'
import './Youtube.css';

function ImageComponent(props) {
  return (
   <section >
     <div className='Videos'>
        <div className="imgage">
            <img className='im1' src={props.Link} alt="" />
        </div>
        <div className="name">
            <h3 style={{margin:"0px"}}>{props.Name}</h3>
            <p style={{margin:"0px"}}s>{props.Group}</p>
            <p style={{margin:"0px"}}s>{props.Live}</p>
        </div>
      
    </div>
   </section>
   
  )
}

export default ImageComponent
