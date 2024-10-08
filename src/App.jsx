import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BasicExample from './Pages/Navbar/MyNavbar'
import { Outlet, useLocation } from 'react-router'
import FooterSection from './Pages/FooterSection/FooterSection'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <BasicExample />
      <Outlet />
      <FooterSection />
    </>
  )
}

export default App
