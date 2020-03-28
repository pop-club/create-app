import React, { Component } from 'react'
import styles from './Home.module.scss'
import { Row, Col } from 'antd'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      register: 0,
      total: 0,
      income: 0
    }
  }

  componentDidMount () {
    this.setState({
      count: Math.floor(Math.random() * 10000),
      register: Math.floor(Math.random() * 100),
      total: Math.floor(Math.random() * 1000000),
      income: Math.floor(Math.random() * 10000)
    })
  }

  render() {
    return (
      <div className={styles.home}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <div className={styles.card + ' ' + styles.primary}>
              <h2>总人数</h2>
              <p>{this.state.count}</p>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.card + ' ' + styles.success}>
              <h2>今日注册人数</h2>
              <p>{this.state.register}</p>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.card + ' ' + styles.warning}>
              <h2>总收入</h2>
              <p>{this.state.total}</p>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.card + ' ' + styles.error}>
              <h2>今日收入</h2>
              <p>{this.state.income}</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
