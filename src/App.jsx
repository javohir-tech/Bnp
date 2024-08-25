import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BasicExample from './Pages/Navbar/MyNavbar'
import { Outlet } from 'react-router'
import FooterSection from './Pages/FooterSection/FooterSection'

function App() {

  return (
    <>
      <BasicExample/>
      <Outlet/>
      <FooterSection/>
    </>
  )
}

export default App
