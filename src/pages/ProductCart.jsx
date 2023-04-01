import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCart = ({id,name,image,discription,category,price}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
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
      <Button variant='solid'  backgroundColor={"Red 800"}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCart