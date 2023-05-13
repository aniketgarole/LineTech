import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

  const navigate = useNavigate()
  // const auth = useSelector(store => store.authReducer.isAuth)

  const auth = localStorage.getItem("login");

  



  console.log(auth)

  if (!auth) {
     return <Navigate to="/" />
  } else {
    return (
      <div>
        {children}
      </div>
      
    )
  }

 
}

export default PrivateRoutes