import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'

const ProductCart = ({id,name,image,discription,category,price}) => {


  const addtoCart = async ({id,name,image,discription,category,price, quantity=1}) => {
      let cartProduct = {id,name,image,discription,category,price, quantity};

      try {
        let res = await axios.post(`https://jolly-hose-hen.cyclic.app/cart`, cartProduct)
      alert("Product has been added to cart")
      } catch (error) {
        alert("Could not add product in the cart")
      }

      
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