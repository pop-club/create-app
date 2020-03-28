import React, { Component } from 'react'
import styles from './Input.module.scss'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  change = (e) => {
    const value = e.target.value
    const index = this.props.index
    this.setState({
      value
    })
    this.props.emit(value, index)
  }

  render() {
    return (
      <input className={styles.input} value={this.state.value} onChange={(e) => this.change(e)} />
    )
  }
}
