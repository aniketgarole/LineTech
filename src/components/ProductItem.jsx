import React from 'react'
import ProductCart from './ProductCart'
import { SimpleGrid } from '@chakra-ui/react'
import NavBar from './NavBar'
import Footer from './Footer'

const ProductItem = ({grocerydata}) => {
    console.log(grocerydata)

  return (
    <>
    {/* <NavBar/> */}
    
      <SimpleGrid columns={{base:2,md:4}} spacing={10}>
        {
          grocerydata.map((el)=><ProductCart key={el.id} {...el}/>)
        }
      </SimpleGrid> 
      {/* <Footer/>  */}
        </>

   
  )
}

export default ProductItem