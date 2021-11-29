import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Items from './Items'

function App() {


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Items} />
        <Route exact path="/items" component={Items} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
