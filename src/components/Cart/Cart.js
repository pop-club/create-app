import React, { Component } from 'react'
import styles from './Cart.module.scss'

export default class Cart extends Component {
  render() {
    return (
      <div className={styles.cart}>
        {this.props.title ? <div className={styles.title}>{this.props.title}</div> : null}
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
