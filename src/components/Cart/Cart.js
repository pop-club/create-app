import React, { Component } from 'react'
import styles from './Cart.module.scss'

export default class Cart extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <div className={styles.title}>卡片标题</div>
        <div className={styles.content}>卡片内容</div>
      </div>
    )
  }
}
