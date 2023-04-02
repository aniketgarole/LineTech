import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-inner'>
            <div className='div1'>
                <h4 className='footer-heading'>About Us</h4>
                <p>India's most convenient online grocery channel Buyerapp Fresh and Smart makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your home; office, or on the move. We offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store.</p>
                <h4 className='div1-footer'>PAYMENT OPTIONS</h4>
            </div>
            <div className='div2'>
            <h4 className='footer-heading'>OUR COMPANY</h4>
            <p className='mont'>About Us</p>
            <p className='mont'>Contact Us</p>
            </div>
            <div className='div3'>
            <h4 className='footer-heading'>TOP CATEGORIES</h4>
            <p className='mont'>Grocery</p>
            </div>
            <div className='div4'>
            <h4 className='footer-heading'>POLICIES & INFO</h4>
            <p className='mont'>Privacy Policy</p>
            
            
            <h4 className='footer-heading'>SUPPORT</h4>
            <p className='email'>For Help, send an email to care@craftsvilla.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer