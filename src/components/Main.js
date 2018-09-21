import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Contact from './pages/contact/Contact.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main