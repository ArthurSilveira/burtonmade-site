import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from "prop-types"
import './NavBar.css'
import _ from 'lodash'

class NavBar extends Component {


  renderMenuItems(menuItems) {
    return _.map(menuItems, (item, key) => {
      if (!this.props.dropdownStyle) {
        return (
          <Link to={`/${item}`} className="nav-item" key={key}>{item}</Link>
        )
      } else {
        return (
          <Link to={`/${item}`} className="dropdown-nav-item" key={key} onClick={this.props.toggleDropdown}>{item}</Link>
        )
      }

    })
  }

  render() {

    if (!this.props.dropdownStyle) {
      return (
        <nav className='nav-component'>
          {this.renderMenuItems(this.props.menuItems)}
        </nav>
      )
    } else {
      return (
        <nav className='dropdown-nav-component'>
          {this.renderMenuItems(this.props.menuItems)}
        </nav>
      )
    }

  }
}

// Navbar.propTypes = {
//   menuItems: PropTypes.array.isRequired,
//   dropdownStyle: PropTypes.bool.isRequired,
//   toggleDropdown: PropTypes.func
// }

NavBar.defaultProps = {
  menuItems: ['About', 'Contact'],
  dropdownStyle: false
}

export default NavBar