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
          <Container children={<Home/>}/>
        </Route>
        <Route exact path="/statistics">
          <Container children={<Statistics/>}/>
        </Route>
        <Route exact path="/account">
        <Container children={<Account/>}/>
        </Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>
    )
  }
}
