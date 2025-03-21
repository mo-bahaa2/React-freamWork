import React, { useEffect } from 'react'
import first from '../../assets/avataaars.svg'
import start from'../Start/start.module.css'
export default function Start() {
  useEffect(()=>{
      document.title = "Home";
    },[])
    
  return <>
    <div className={`vh-100 d-flex align-items-center justify-content-center ${start.baground}`}>
      <div className=' d-flex align-items-center justify-content-center flex-column'>
        <div>

        <img src={first} className={`${start.image}`} alt="Start Fream work" />
        </div>
        {/* make the items in center */}
          <div className="text-center pt-4 text-white">
            {/* titel */}
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>i'm moahmed bahaa</h2>
            {/* the shape */}
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className={`${start.line} me-3`}></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className={`${start.line} ms-3`}></div>
          </div>

          <div>Graphic Artist - Web Developer - ui/ux Developer</div>
          </div>
            
          
      </div>

    </div>
  
  </>
}
