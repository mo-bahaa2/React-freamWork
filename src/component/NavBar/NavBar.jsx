import React from 'react'
import hamada from '../NavBar/style.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return <>
  <nav className={`${hamada['bg-body-tertiary']} navbar navbar-expand-lg py-4 fixed-top `}>
  <div className="container ">
    <NavLink className={` ${hamada.logo} ${hamada['navbar-brand']} `} to={'/'}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className='nav-link text-white fw-bolder text-uppercase' to={'about'}>about</NavLink>
        </li>
        <li className="nav-item mx-lg-2">
          <NavLink className='nav-link text-white fw-bolder text-uppercase' to={'portfolio'}>portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link text-white fw-bolder text-uppercase' to={'contact'}>contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

  
  </>
}
