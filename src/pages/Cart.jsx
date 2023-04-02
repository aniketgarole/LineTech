import { Box, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import "../styles/Cart.css";

import {
  Button,
  Flex,
  Image,
  Heading,

  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'





const getData = async () => {
  const res = await axios.get("http://localhost:8080/products")
  return res.data
}

const Cart = ({updateData}) => {
  const [data, setData] = useState([])
const [update, setUpdate] = useState(false)

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res);
        setData(res)
        updateData();
      })
      .catch((err) => {
        console.log(err);
      })
  }, [update])

  const handleIncrement = (itemId) => {
    const updatedItems = data.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };

  const handleDecrement = (itemId) => {
    const updatedItems = data.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };

  

  const handleDelete = (id) => {
   console.log(id);
    axios.delete(`http://localhost:8080/products/${id}`)
   setUpdate((prev)=> !prev)
  }



  const OrderSummaryItem = (props) => {
    const { label, value, children } = props





    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  const totalPrice = data.reduce((acc, item) => acc + item.price * item.quantity, 0);


  localStorage.setItem("totalPrice", totalPrice)

  return (

<div>
  <Box>
  <Heading mt={5} className='heading' fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({data.length} items)
            </Heading>
            <Text className='home' ml={3} mt={2}>Home/Bag</Text>
            
  </Box>
    <Flex className="contrainer">
      <Box className='product_box'>
         
        <Box>
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
          </Stack>
        </Box>
        <Flex>
          <Box className='prodContainer'>
            {
              data.map((el) => <div key={el.id}>
                <Stack className='individualCart' direction='row'   >
                  <Box display={"flex"} alignItems="center" gap={"10px"}>
                    <Image className='image'
                      src={el.image}
                      alt='Dan Abramov'
                      ml={"5px"}
                      h={"100px"}
                    />
                    <Text as="b">{el.name}</Text>
                  </Box>
                  <Box className='buttonBox'>

                    <Button className='handlebutton' m={"10px"} size='xs' colorScheme='#d34545' variant='outline' onClick={() => handleDecrement(el.id)}>
                      -
                    </Button>
                    <span className="mx-2">{el.quantity}</span>
                    <Button className='handlebutton'  m={"10px"} size='xs' colorScheme='#d34545' variant='outline' onClick={() => handleIncrement(el.id)}>
                      +
                    </Button>
                  </Box>
                  <Text>${el.price * el.quantity}</Text>
               <Box className='deleteBox'>

                  <SmallCloseIcon className='Delete' onClick={()=>handleDelete(el.id)}/>
               </Box>
                
                </Stack>
              </div>)
            }
          </Box>
        </Flex>

      </Box>
      <Spacer />

      <Box className='checkout_box'>
        <Stack className='stack'>
          <Heading className='OrderSummary' size="md">Order Summary</Heading>

          <Stack spacing="6">
            <OrderSummaryItem label="Subtotal" value={`₹${totalPrice}`} />
            <OrderSummaryItem label="Shipping + Tax">
              <Link href="#" textDecor="underline">
                Calculate shipping
              </Link>
            </OrderSummaryItem>
            <OrderSummaryItem label="Coupon Code">
              <Text href="#" textDecor="underline">
                Add coupon code
              </Text>
            </OrderSummaryItem>
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                Total
              </Text>
              <Text fontSize="xl" fontWeight="extrabold">
                ₹{totalPrice}
              </Text>
            </Flex>
          </Stack>
          <Button className='checkout' colorScheme="red" size="lg" fontSize="md" 
        
          >
            CHECKOUT
          </Button> 
        </Stack>
        <Box>
            OR
          </Box>
          <Link to="/#">
         <Text className='continue' as="b" color="blue">
         Conitunue Shopping

          </Text> 
          </Link>
      </Box>

    </Flex>
    </div>
   
  )

};

export default Cart;

