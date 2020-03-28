import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '@/views/Home'
import Login from '@/views/Auth/Login'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    )
  }
}
