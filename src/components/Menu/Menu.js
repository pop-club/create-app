import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Menu.module.scss'
import { routes } from '@/router'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      path: window.location.pathname
    }
  }

  link = (item) => {
    this.props.history.push(item.path)
  }

  render() {
    return (
      <div className={styles.menu}>
        <ul>
          {
            routes.map(item => {
              return <li key={item.name} onClick={() => this.link(item)} className={item.path === this.state.path ? styles.on : ''}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(Menu)
