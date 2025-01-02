import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import lay from '../layOut/layStyle.module.css'
export default function LayOut() {
  return <>
    <NavBar/>

    <div className={` ${lay.lay} `}>

      <Outlet></Outlet>
      
    </div>
    
    <Footer/>
  </>
}
