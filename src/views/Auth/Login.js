import React, { Component } from 'react'
import styles from './Login.module.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import store from '@/redux'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  onFinish = (userInfo) => {
    store.dispatch({ type: 'login' })
    store.dispatch({ type: 'set', userInfo })
    this.props.history.push('/')
  }

  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="auth">
        <div className={styles.info}>
          <div className={styles.title}>
            登录页
          </div>
          <div className={styles.content}>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
