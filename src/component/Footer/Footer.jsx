import React from 'react'
import footer from '../Footer/footer.module.css'
export default function Footer() {
  return <>
  <footer className=''>
  <div className='container-fluid'>
    <div className="row">
      <div className="col-md-4 text-white my-3">
        <h3 className={`${footer.mainText}`}>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-4 text-white my-3">
        <h3 className={`${footer.mainText}`}>AROUND THE WEB</h3>

        <i className={ `fa-brands fa-linkedin-in mx-2 ${footer.icon}`}></i>
        <i className={ `fa-brands fa-facebook-f mx-2 ${footer.icon}`}></i>
        <i className={ `fa-brands fa-twitter mx-2 ${footer.icon}`}></i>
        <i className={ `fa-solid fa-globe mx-2 ${footer.icon}`}></i>
      </div>
      <div className="col-md-4 text-white my-3">
        <h3 className={`${footer.mainText}`}>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Bahaa</p>
        
      </div>
    </div>

  </div>
  </footer>
  <div className={`${footer.lastFooter} text-center`}>
    <p className='py-4'> Copyright © Your Website 2021</p>
  </div>
  </>
}
