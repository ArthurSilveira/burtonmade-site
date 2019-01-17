import React from 'react'
import './Home.css'
import  heroImage from '../../../assets/images/hero.jpg';

const Home = () => (
  <div className='home-page page-wrapper'>
    <div class="hero-image">
      <img src={heroImage} alt="404"/>
    </div>
    <div className="page-section">
      <div className="page-title">MAIN TITLE</div>
      <div>Some more home page content goes in here</div>
    </div>
  </div>
)

export default Home