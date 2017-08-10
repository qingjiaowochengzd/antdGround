import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input, Icon, Checkbox } from 'antd'
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { loginLoading } = login

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }
  // function forgetpassword () {
  //   validateFieldsAndScroll((errors, values) => {
  //     if (errors) {
  //       return
  //     }
  //     dispatch({ type: 'login/login', payload: values })
  //   })
  // }
  // function handleSubmit (e) {
  //   e.preventDefault()
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values)
  //     }
  //   })
  // }
  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form className="login-form">
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名!',
              },
            ],
          })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} size="large" onPressEnter={handleOk} placeholder="账户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入您的密码!',
              },
            ],
          })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
        </FormItem>
        <FormItem>
          <div className="forgetmargin_">
            {/*{getFieldDecorator('remember', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
            {/*})(*/}
              {/*<Checkbox>记住密码</Checkbox>*/}
            {/*)}*/}
            <a href="">马上注册!</a>
            <a className={styles.floatright}>忘记密码</a>
          </div>
        </FormItem>
        <Row>
          <FormItem>
            <Button type="primary" size="large" onClick={handleOk} loading={loginLoading}>
              登录
            </Button>
          </FormItem>
          <FormItem>
            <Button className="alipay-form-button" size="large" onClick={handleOk} loading={loginLoading}>
              支付宝授权登录
            </Button>
          </FormItem>
        </Row>
      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
