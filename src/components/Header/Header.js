import React from 'react'
import Logo from '../../assets/Logo.svg'
import Button from '../Button/Button'
import Flex from '../Flex'
import './Header.css'
const Header = () => {
  return (
    <div className='header_root'>
      <Flex autoWidth flex alignCenter>
        <>
          <img src={Logo} alt="" />
          <span className='header_logo_text'>NinjaMail</span>
        </>
      </Flex>
      <Flex flex justifyBetween autoWidth alignCenter>
        <>
          <span className='header_menu_item'>FEATURES</span>
          <span className='header_menu_item'>PRICING</span>
          <span className='header_menu_item'>SERVICES</span>
          <span className='header_menu_item'>PARTNERS</span>
          <Button 
            primary
            text='SIGN UP FREE'
          />
        </>
      </Flex>
    </div>
  )
}

export default Header