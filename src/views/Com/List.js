import React, { Component } from 'react'
import { Table } from 'antd'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      dataSource: null,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 55,
        onChange: this.onChange,
        showTotal: total => `共${total}条`,
      }
    }
  }

  componentDidMount () {
    this.fetch()
  }

  onChange = (current, pageSize) => {
    const pagination = Object.assign({}, this.state.pagination, {
      current,
      pageSize
    })
    this.setState({ pagination })
    this.fetch()
  }

  fetch = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      const dataSource = []
      for (let i=0; i<10; i++) {
        dataSource.push({
          key: i,
          name: '胡彦斌',
          age: i * i,
          address: `西湖区湖底公园${i}号`,
        })
      }
      this.setState({
        loading: false,
        dataSource
      })
    }, 1000)
  }

  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        render: (text,record,index) => `${index + 1}`
      },
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
      <div>
        <Table loading={this.state.loading} dataSource={this.state.dataSource} columns={columns} pagination={this.state.pagination}></Table>
      </div>
    )
  }
}
