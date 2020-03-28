import React, { Component } from 'react'
import styles from './Title.module.scss'

export default class Title extends Component {
  render() {
    return (
      <div className={styles.title}>
        我是页面标题
      </div>
    )
  }
}
