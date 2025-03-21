import React, { useEffect } from 'react'
import about from '../about/about.module.css'
export default function About() {
useEffect(()=>{
    document.title = "About";
  },[])

  return <>
  <div className={` d-flex align-items-center justify-content-center ${about.baground}`}>
        <div className=' d-flex align-items-center justify-content-center flex-column'>
          
          <div className="text-center pt-4 text-white">
                      {/* main titel */}
                      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>about me </h2>
                      
                      <div className='d-flex align-items-center justify-content-center mb-3'>
                        <div className={`${about.line} me-3`}></div>
                        <i className="fa-solid fa-star text-white"></i>
                        <div className={`${about.line} ms-3`}></div>
                      </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ps-md-5 text-white">
                  <div>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>

                <div className="col-md-6 ps-md-5 text-white">
                  <div>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </>
}
