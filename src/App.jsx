import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './component/Start/Start'
import NavBar from './component/NavBar/NavBar'
import { createBrowserRouter, Routes } from "react-router"
import LayOut from './component/layOut/LayOut'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Portfolio from './component/portfolio/Portfolio'
import { RouterProvider } from 'react-router-dom'
import Error from './component/Error/Error'

let routers= createBrowserRouter([
  {path:'/',element:<LayOut/>,children:[
    {index:true,element:<Start/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:'*',element:<Error/>}
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
