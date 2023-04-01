import React from 'react'
import ProductCart from './ProductCart'
import { SimpleGrid } from '@chakra-ui/react'

const ProductItem = ({grocerydata}) => {
    console.log(grocerydata)

  return (
    
      <SimpleGrid columns={{base:2,md:4}} spacing={10}>
        {
        grocerydata.map((el)=><ProductCart key={el.id} {...el}/>)
        }
      </SimpleGrid>  

   
  )
}

export default ProductItem