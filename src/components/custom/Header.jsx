import React from 'react'
import logo from '../../assets/images/logo-nav.svg'
import { Button } from '../ui/button';
function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <img
        src={logo}
        alt="Company Logo"
        style={{ width: "80px", height: "57px", top: 0 }}
      />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header