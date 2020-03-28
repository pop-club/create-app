import React, { Component } from 'react'
import styles from './Account.module.scss'
import Input from '@/components/Input/Input'
import { Button, Table } from 'antd'

export default class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        account: '',
        realname: ''
      },
    }
  }

  setFrom = (value, index) => {
    const form = Object.assign({}, this.state.form, { [index]: value })
    this.setState({
      form
    })
  }

  log = () => {
    console.log(this.state.form)
  }

  add = () => {
    
  }

  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]
    return (
      <div className={styles.account}>
        <div className={styles.search}>
          <div className={styles.row}>
            <label>账号：</label>
            <Input emit={this.setFrom} index="account"/>
          </div>
          <div className={styles.row}>
            <label>真实姓名：</label>
            <Input emit={this.setFrom} index="realname"/>
          </div>
          <div className={styles.row}>
            <Button onClick={this.log} type="primary" className={styles['ant-btn']}>查询</Button>
            <Button onClick={this.add} className={styles['ant-btn']}>重置</Button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.table}>
            <Table dataSource={dataSource} columns={columns} />
          </div>
          <div className={styles.page}></div>
        </div>
      </div>
    )
  }
}
