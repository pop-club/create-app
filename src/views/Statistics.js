import React, { Component } from 'react'
import Cart from '@/components/Cart/Cart'
import Line from './Com/Line'
import Bar from './Com/Bar'
import { Row, Col } from 'antd'

export default class Statistics extends Component {
  render() {
    const style = { marginBottom: '40px' }
    return (
      <div>
        <div style={style}></div>
        <Row>
          <Col span={10} offset={1}>
            <Cart title="气温统计">
              <Line></Line>
            </Cart>
          </Col>
          <Col span={10} offset={2}>
            <Cart title="年利润">
              <Bar></Bar>
            </Cart>
          </Col>
        </Row>
      </div>
    )
  }
}
