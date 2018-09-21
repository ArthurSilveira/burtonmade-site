import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Header from './components/header/Header.js'
// import PageFooter from './components/page-footer/PageFooter.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='page-container'>
          <Header headerLogo={logo} buttonCopy='Get Started'/>
          <Main/>
          {/* <div className='center-row'>
            <PageFooter footerLogo={logo}/>
          </div> */}
        </div>
      </div> // ends App
    )
  }
}

export default App

