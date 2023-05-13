import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  VStack,
  Img,
  Center,
  Input,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'


import box from "../image/craft-box.png";
import tag from "../image/craft-tag.png"
import basket from "../image/craft-basket.png"
import logo from "../image/Futuristic_Modern_Black_and_White_Logo.png"

import { useDispatch, useSelector } from "react-redux";



import styles from "../styles/Modal.css"
import { useState } from 'react';
import { getAuth } from '../Redux/authReducer/action';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [state1, setState1] = useState("none")
  const [state2, setState2] = useState("block")
  const [login, setLogin] = useState(false)

  const navigate = useNavigate()

  // const [isLogin, setLogin] = useState(false);

  const auth = localStorage.getItem("login")

  const dispatch = useDispatch()

  const toast = useToast()

  // const auth = useSelector(store => store.authReducer.isAuth)

  console.log(auth)

  const handleLogin = async () => {
    
    
    try {
     let res = await axios.get(`https://jolly-hose-hen.cyclic.app/users`)
       console.log(res.data)
       let item = res.data.filter((item)=> {
         return item.email == email
       })

       console.log("item", item)
 
       if (item.length == 0) {
         toast({
             position: "top",
             title: 'User does not exists',
             // description: "User has been registered.",
             status: 'warning',
             duration: 2000,
             isClosable: true,
           })
       } else if (item[0].password !== password) {
        toast({
          position: "top",
          title: 'Wrong credentials',
          // description: "User has been registered.",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })

       } else {
        toast({
          position: "top",
          title: 'Login Successful!!',
          // description: "User has been registered.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

        localStorage.setItem("login", "user")

       }
     
    } catch (error) {
      console.log(error)
    }
     
    onClose()
    
  }

  

  const changeStatus = () => {
    state1 === "none" ? setState1("block") : setState1("none")
    state2 === "none" ? setState2("block") : setState2("none")
  }

  const handleRegister = async() => {

    if (!email.includes("@gmail.com")) {
      toast({
        position: "top",
        title: 'Please enter proper email address.',
        // description: "User has been registered.",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })

      return 

    }


    try {
      let res = await axios.get(`https://jolly-hose-hen.cyclic.app/users`)
      console.log(res.data)
      let item = res.data.filter((item)=> {
        return item.email == email
      })

      console.log(item)

      if (item.length !== 0) {
        toast({
                position: "top",
                title: 'User already exists.',
                // description: "User has been registered.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
      } else {
        const payload = {email, password}
      try {
        let res = await axios.post(`https://jolly-hose-hen.cyclic.app/users`, payload)
        console.log(res)

        // changeStatus()
      } catch (error) {
        console.log(error)
        setEmail("")
        setPassword("")
       
        toast({
          position: "top",
          title: 'User has been registered.',
          // description: "User has been registered.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        
        changeStatus()
        
      }

      }
    } catch (error) {
      console.log(error)
    }

    // 

  }

  
  const handleLogout = () => {
    localStorage.removeItem("login")
    navigate("/")
    setLogin(!login)
  }

  return (
    <>
      <span onClick={onOpen}>{auth ? '' : "Sign In/Register"}</span>
      <span style={auth ? {display: "inline"} : {display: "none"}} onClick={handleLogout}>Logout</span>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          

          <Flex>
            <Box w="270px"  className='left-box'>
              <VStack>
                <Box className='heading1'>
                  <Center>
                    BENEFITS
                  </Center>
                </Box>
                <Box>
                  <Center>

                  <Img src={box} w="50px" h="50px"></Img>
                  </Center>
                  
                  <Center>
                    <p className='merri'>Manage Orders</p>
                  </Center>
                  <Center>
                    <p className='merri2'>Tract, Return & Cancel your orders</p>
                  </Center>
                  
                </Box>
                <Box>
                  <Center>

                  <Img src={tag} w="50px" h="50px"></Img>
                  </Center>
                  
                  <Center>
                    <p className='merri'>Access Products that you love</p>
                  </Center>
                  <Center>
                    <p className='merri2'>Seamless access to Wishlist & Cart items</p>
                  </Center>
                  
                </Box>
                <Box style={{textAlign:"center"}}>
                  <Center>

                  <Img src={basket} w="50px" h="50px"></Img>
                  </Center>
                  
                  <Center>
                    <p className='merri'>Quicker Checkout</p>
                  </Center>
                  <Center>
                    <p className='merri2'>Saved Addresses & bank details for 3 step checkout</p>
                  </Center>
                  
                </Box>
              </VStack>
            </Box>
            <Box w="360px" className="right-box">
              <Img src={logo} w="130px"></Img>
              <span className='login-span' style={{display:state2}}>Login/Sign Up</span>
              <span className='register-span' style={{display:state1}}>Register</span>
              <p>Please provide your Email</p>
              <Input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></Input>
              <p>Please provide your Password</p>
              <Input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}></Input>
              
              <button style={{display:state2}} onClick={handleLogin}>Sign In</button>
              <button style={{display:state1}} onClick={handleRegister}>Register</button>
              <br />
              <span className='signup-span' onClick={changeStatus}  style={{display:state2}}>New User? Sign Up</span>
              <span className='signin-span' onClick={changeStatus} style={{display:state1}}>Already Registered? Login </span>
              
            </Box>

            
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}