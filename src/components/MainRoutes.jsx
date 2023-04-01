import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Fashion from '../pages/Fashion'
import Grocery from '../pages/Grocery'
import HomeApplance from '../pages/HomeApplance'
import HomePage from '../pages/HomePage'
import Mobile from '../pages/Mobile'
const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/grocery' element={<Grocery/>}/>
    <Route path='/mobile' element={<Mobile/>}/>
    <Route path='/fashion' element={<Fashion/>}/>
    <Route path='/homeappliances' element={<HomeApplance/>}/>
    
  </Routes>
}

export default MainRoutes