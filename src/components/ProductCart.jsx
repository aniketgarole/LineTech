import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useToast } from '@chakra-ui/react'
const ProductCart = ({id,name,image,discription,category,price}) => {

  const auth = localStorage.getItem("login")
  const toast = useToast()

  

  const addtoCart = async ({id,name,image,discription,category,price, quantity=1}) => {

    if (!auth) {
      console.log("auth in if", auth)
      toast({
        position: "top",
        title: 'Please login first.',
        // description: "User has been registered.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    } else {

      let cartProduct = {id,name,image,discription,category,price, quantity};

      try {
        let res = await axios.post(`https://jolly-hose-hen.cyclic.app/cart`, cartProduct)
        toast({
          position: "top",
          title: 'Product has been added to cart.',
          // description: "User has been registered.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      } catch (error) {
        toast({
          position: "top",
          title: 'Product has been added to cart.',
          // description: "User has been registered.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }


    }

    console.log("auth in else", auth)
      
  }

  return (
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      boxSize='200px'
      />
    <Stack mt='6' spacing='3'>
      
      <Text>
        {discription}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='solid'  backgroundColor={"Red 800"} onClick={()=> addtoCart({id,name,image,discription,category,price})}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </>
  )
}

export default ProductCart