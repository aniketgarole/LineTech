import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Fashion from '../pages/Fashion'
import Grocery from '../pages/Grocery'
import HomeApplance from '../pages/HomeApplance'
import HomePage from '../pages/HomePage'
import PrivateRoutes from './PrivateRoutes'
import Mobile from '../pages/Mobile'
import Admin from '../pages/Admin'
import { AddNewProduct } from '../pages/AddNewProduct'
import { DeleteProduct } from '../pages/DeleteProduct'
import BasketCartRoute from '../pages/BasketCartRoute'
import Payment from '../pages/Payment'
const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    {/* <Route path='/grocery' element={<Grocery/>}/>
    <Route path='/mobile' element={<Mobile/>}/>
    <Route path='/fashion' element={<Fashion/>}/>
    <Route path='/homeappliances' element={<HomeApplance/>}/> */}
    <Route path="/fashion" element={<Fashion/>}></Route>
    <Route path="/grocery" element={<Grocery/>}></Route>
    <Route path="/homeapp" element={<HomeApplance/>}></Route>
    <Route path="/mobile" element={<Mobile/>}></Route>
    <Route path="/admin" element={<Admin />}></Route>
    <Route path="/addProduct" element={<AddNewProduct/>}></Route>
    <Route path="/deleteProduct" element={<DeleteProduct/>}></Route>
    <Route path="/cart" element={<PrivateRoutes><BasketCartRoute/></PrivateRoutes>}></Route>
    <Route path="/payment" element={<Payment/>}></Route>
    {/* <Route path="/test" element= {<PrivateRoutes><h1>hi there</h1></PrivateRoutes>}></Route> */}

    <Route path="*" element={<h1>Sorry, Page not found</h1>}></Route>
    
  </Routes>
}

export default MainRoutes