import React from 'react'
import './Youtube.css';
import NavLeft from './component/NavLeft';
import SearchComponent from './component/SearchComponent';
import NavRight from './component/NavRight';



function Youtube() {
  return (
    <div className="nav" style={{display:"flex",margin:"10px,"}}>
      <NavLeft />
      <SearchComponent />
      <NavRight />
     
      
    </div>
  )
}

export default Youtube
