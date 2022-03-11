import React from 'react'
import PhoneCard from './PhoneCard'

const TitlePhone = () => {
  return (
    <div class='phone'>
        <div class='phone_title'>
          <span className='mdi mdi-format-align-justify'></span>
          <p>LockedIn</p>
        </div>
        <div>
          <PhoneCard/>  
          <PhoneCard/>  
          <PhoneCard/>  
        </div>
        <div className="phone_footer">
          <div>
            <p>Bet: <span class='highlight'>$100</span></p>
            <p>Winnings: <span class='highlight'>$345</span></p>
          </div>
          <div>
            <button class='confirm_button'>CONFIRM</button>
          </div>
        </div>
    </div>
  )
}

export default TitlePhone