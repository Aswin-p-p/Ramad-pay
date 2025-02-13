import React from 'react'
import "./loader.css";

function PreLoader() {
  return (
   <>
     <div className="spinner-overlay">
    <div style={{color:'#067e6f'}} className="la-ball-clip-rotate-multiple la-3x">
        <div></div>
        <div></div>
    </div>
</div>

   </>
  )
}

export default PreLoader