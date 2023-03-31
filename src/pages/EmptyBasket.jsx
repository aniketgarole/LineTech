import React from 'react'
import "../styles/Empty.css"
const EmptyBasket = () => {
  return (
    <div className='main'>
      <div class="container-fluid  mt-100">
				 <div class="row">
				 
					<div class="col-md-12">
					
							<div class="card">
						
						<div class="card-body cart">
								<div class="col-sm-12 empty-cart-cls text-center">
									<img className='image' src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3" />
									<h2><strong>Your Cart is Empty</strong></h2>
									<h3>Add something to make me happy </h3>
								<button className='button'>continue Shopping</button>
								</div>
						</div>
				</div>
						
					
					</div>
				 
				 </div>
				
				</div>
    </div>
  )
}

export default EmptyBasket
