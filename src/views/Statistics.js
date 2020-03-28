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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Cart title="气温统计">
              <Line></Line>
            </Cart>
          </Col>
          <Col span={12}>
            <Cart title="年利润">
              <Bar></Bar>
            </Cart>
          </Col>
        </Row>
      </div>
    )
  }
}
