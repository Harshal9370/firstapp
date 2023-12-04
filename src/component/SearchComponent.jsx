import React from 'react'
import '../Youtube.css';

function SearchComponent() {
    return (
        <div className='search-container' style={{display:"flex"}}>
            <div className="intut">
                <input type="input" placeholder='Search' className='in1' />
            </div>
            <div className="search-icon"  style={{margin:"5px",padding:"8px"}}>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="microphone-icon" style={{margin:"5px",padding:"8px"}}>
                <i class="fa-solid fa-microphone"></i>
            </div>

        </div>
    )
}

export default SearchComponent
