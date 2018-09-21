import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../nav-bar/NavBar.js'
import './Footer.css'
import map from '../../assets/images/map.png'
import { Link } from 'react-router-dom'
// import { SocialIcons } from 'react-social-icons'

const socialUrls = [
  'http://twitter.com/TruFitAutoGlass',
  'https://www.facebook.com/TruFitAutoGlass/',
  'http://www.instagram.com/TruFitAutoGlass/'
]

const navItems = ['about', 'contact']

class Footer extends Component {

  render() {
    return (
      <footer className='footer-container'>
        <div className='footer-inner'>
          <div className='brand-container'>
            <div className='footer-image'>
              <img src={this.props.footerLogo} alt=""/>
            </div>
            <div className='mission-container'>
              <p>
                Burton Made is a local reclaimed wood blah blah blah.
                From this to that, we create beautiful and functional 
                custom solutions for your home or office.
              </p>
            </div>
          </div>

          <div className='nav-container'>
            <Link to='/'>
              <h3>Burton Made</h3>
            </Link>
            <NavBar menuItems={navItems}/>
          </div>

          <div className='location-container show-for-medium'>
            <div className='map-container'>
              <a href="https://goo.gl/maps/awx2uaqi8862">
                <img src={map} alt='404'/>
              </a>
            </div>
            <div className='address-container'>
              <span> Lexington, KY USA</span>
              <span>(859)667-0182</span>
            </div>
          </div>

        </div>
        <div className='footer-under'>
          <div className='social-container'>
            {/* <SocialIcons urls={socialUrls} color='white'/> */}
          </div>
          <div className='copyright'>
            2018 © Burton Made.
          </div>
        </div>
      </footer>
    )
  }
}


Footer.propTypes = {
  footerLogo: PropTypes.string.isRequired
}

Footer.defaultProps = {

}

export default Footer