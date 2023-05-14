import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

  const navigate = useNavigate()
  // const auth = useSelector(store => store.authReducer.isAuth)

  const auth = localStorage.getItem("login");

  const toast = useToast()



  console.log(auth)

  if (!auth) {
    toast({
      position: "top",
      title: 'Please login first',
      // description: "User has been registered.",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
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