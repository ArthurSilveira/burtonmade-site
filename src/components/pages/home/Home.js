import React from 'react'
import './Home.css'
import  heroImage from '../../../assets/images/hero.jpg';

const Home = () => (
  <div className='home-page page-wrapper'>
    <div class="hero-image">
      <img src={heroImage} alt="404"/>
    </div>
    <div className="page-section center-row">
      <div className="page-title">RECLAIMED</div>
      <div>Home page stuff</div>
    </div>
  </div>
)

export default Home