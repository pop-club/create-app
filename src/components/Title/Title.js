import React, { Component } from 'react'
import styles from './Title.module.scss'

export default class Title extends Component {

  static defaultProps = {
      title: '标题'
  }

  render() {
    return (
      <div className={styles.title}>
        {this.props.title}
      </div>
    )
  }
}
