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
        <Route exact path="/">
          <Container><Home></Home></Container>
        </Route>
        <Route exact path="/statistics">
          <Container><Statistics></Statistics></Container>
        </Route>
        <Route exact path="/account">
          <Container><Account></Account></Container>
        </Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    )
  }
}
