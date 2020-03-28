import React, { Component } from 'react'
import styles from './Menu.module.scss'

export default class Nav extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <ul>
          <li className={styles.on}>首页</li>
          <li>数据统计</li>
          <li>账号管理</li>
        </ul>
      </div>
    )
  }
}
