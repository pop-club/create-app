import React, { Component } from 'react'
import styles from './Container.module.scss'
import Nav from '@/components/Menu/Menu'
import logo from '@/assets/logo.png'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import store from '@/redux'
import { withRouter } from 'react-router-dom'

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
  }

  componentDidMount () {
    console.log(this.state)
  }

  layout = () => {
    store.dispatch({ type: 'layout' })
    store.dispatch({ type: 'set', userInfo: {} })
    this.props.history.push('/login')
  }

  overlay = () => {
    return (
      <Menu>
        <Menu.Item>
          <div onClick={this.layout}>退出</div>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.header}>
          <div className={'flex-box ' + styles.logo}>
            <img src={logo} alt=""/>
          </div>
          <div className={styles.info}>
            <span>页面标题</span>
            <Dropdown overlay={this.overlay}>
              <div className={styles.link}>
                {store.getState().userInfo.username} <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <Nav/>
          </div>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Container)
