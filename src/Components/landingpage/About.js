import React from 'react'
import AboutCards from './AboutCards/AboutCards'

const About = () => {
  return (
    <div className="landingpage_about_container">
      <div className='landingpage_about'>
        <div className="about_title">
            <h1>Why Should you <span class='highlight'>Join</span>?</h1>
        </div>
        <div className="about_description">
           <p>Considering our experience and a strong team, we offer you a full-cycle service. In-depth analysis, industry-specific design and high-quality development let us create unique products which help you to grow and make users’ interaction easier.</p>
           <p>Even after the launch to keep the projects up-to-date and regularly boosted, we’ll provide you with constant support.</p>
        </div>
        <AboutCards benefit='All Major Leagues'/>
        <AboutCards benefit='Cross Sport Betting'/>
        <AboutCards benefit='Parlay Party'/>
        <AboutCards benefit='Lockin-Cashout'/>
     </div>
    </div>
  )
}

export default About