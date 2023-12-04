import React from 'react'

function NavLeft() {
    return (
      
        <div className='nav-left-container' style={{display:"flex"}}>
            <div className='menu-bar' style={{marginRight:"-15px",padding:"14px"}}>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="youtube-logo" style={{margin:"6px",padding:"8px"}}>
                <span className="youtube-icon"><i class="fa-brands fa-youtube" style={{color:"red"}}></i></span>
                <span className="logo-text" style={{margin:"2px"}}>YouTube</span>
            </div>

        </div>

       
        
       

    )
}

export default NavLeft
