import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from '@/layouts/Container'
import Home from '@/views/Home'
import Statistics from '@/views/Statistics'
import Account from '@/views/Account'
import Login from '@/views/Auth/Login'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Container><Home></Home></Container>
        </Route>
        <Route path="/statistics">
          <Container><Statistics></Statistics></Container>
        </Route>
        <Route path="/account">
          <Container><Account></Account></Container>
        </Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    )
  }
}
