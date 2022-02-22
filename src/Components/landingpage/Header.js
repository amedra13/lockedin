import React from 'react'
import Button from '../support/Button'
const Header = () => {
  return (
    <div class='landingpage_header'>
       <div className="landingpage_wrapper">
        <div>
            <h1>LockedIn</h1>
        </div>
        <div>
            <p>Dashboard</p>
            <p>About</p>
            <p>Contact Us</p>
        </div>
        <div>
            <Button title='Deposit'/>
            <p>Login</p>
        </div>
       </div>
    </div>
  )
}

export default Header