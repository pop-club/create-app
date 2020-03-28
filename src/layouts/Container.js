import React, { Component } from 'react'
import styles from './Container.module.scss'
import Menu from '@/components/Menu/Menu'
import logo from '@/assets/logo.png'

export default class Container extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.header}>
          <div className={'flex-box ' + styles.logo}>
            <img src={logo} alt=""/>
          </div>
          <div className={styles.title}></div>
          <div className={styles.info}></div>
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <Menu/>
          </div>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
