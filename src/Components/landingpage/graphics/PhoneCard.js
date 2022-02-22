import React from 'react'

const PhoneCard = () => {
  return (
    <div class='phonecard'>
        <div class='phonecard_img'>
            <span>?</span>
        </div>
        <div>
            <p class='player'>Ja Morant</p>
            <p>PG - MEM</p>
        </div>
        <div>
            <p>20 Points</p>
            <p>-100</p>
        </div>
        <div>
            <button className='over_under_button'>Over</button>
            <button className='over_under_button'>Under</button>
        </div>
    </div>
  )
}

export default PhoneCard