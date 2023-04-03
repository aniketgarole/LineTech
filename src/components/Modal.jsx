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




import box from "../image/craft-box.png";
import tag from "../image/craft-tag.png"
import basket from "../image/craft-basket.png"
import logo from "../image/Futuristic_Modern_Black_and_White_Logo.png"

import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/Modal.css"
import { useState } from 'react';
import { getAuth } from '../Redux/authReducer/action';

export function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [state1, setState1] = useState("none")
  const [state2, setState2] = useState("block")

  // const [isLogin, setLogin] = useState(false);

  const dispatch = useDispatch()

  const auth = useSelector(store => store.authReducer.isAuth)

  console.log(auth)

  const handleLogin = () => {
    dispatch(getAuth)
    // setLogin(true);
    onClose()
    
  }

  const changeStatus = () => {
    state1 === "none" ? setState1("block") : setState1("none")
    state2 === "none" ? setState2("block") : setState2("none")
  }

  return (
    <>
      <span onClick={onOpen}>Sign In/Register</span>

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
              <Input placeholder='Enter Email'></Input>
              <p>Please provide your Password</p>
              <Input placeholder='Enter Password'></Input>
              
              <button style={{display:state2}} onClick={handleLogin}>Sign In</button>
              <button style={{display:state1}}>Register</button>
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