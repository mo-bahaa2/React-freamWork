import React, { useEffect } from 'react'
import contact from '../contact/contact.module.css'
export default function Contact() {
  useEffect(()=>{
      document.title = "Contact";
    },[])
  return <>
  <div className='min-vh-100'>
        <div className=' pt-3 d-flex  justify-content-center flex-column align-items-center'>
          {/* make the items in center */}
            <div className="text-center pt-4 text-black">
              {/* titel */}
              <h2 className={`text-uppercase mb-3 fs-1 fw-bolder ${contact.myColor}`}>conatct section</h2>
            </div>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                          <div className={`${contact.line} me-3`}></div>
                          <i className={`fa-solid fa-star ${contact.myColor}`}></i>
                          <div className={`${contact.line} ms-3`}></div>
              </div>

              <div className='w-50 p-3  mt-5 '>
                <input type="text" className={` pb-3 mb-5 ${contact.width} ${contact[`form-control`]} form-control  border-top-0 border-start-0 border-end-0`} placeholder="userName"/>
                <input type="text" className={` pb-3 mb-5 ${contact.width} ${contact[`form-control`]} form-control  border-top-0 border-start-0 border-end-0`} placeholder="userAge"/>
                <input type="text" className={` pb-3 mb-5 ${contact.width} ${contact[`form-control`]} form-control  border-top-0 border-start-0 border-end-0`} placeholder="userEmail"/>
                <input type="text" className={` pb-3 mb-5 ${contact.width} ${contact[`form-control`]} form-control  border-top-0 border-start-0 border-end-0`} placeholder="userPassword"/>
                <button
                type="button" className={` ${contact["btn"]} btn py-2 px-3 rounded rounded-3 text-white me-auto`}>Send Message</button>
              </div>

        </div>
  
      </div>

  </>
}
