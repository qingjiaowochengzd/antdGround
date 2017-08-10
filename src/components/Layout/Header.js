import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Button } from 'antd'
import classnames from 'classnames'
import styles from './Header.less'
import Menus from './Menu'

const SubMenu = Menu.SubMenu

const Header = ({ origin, changeclass, size, user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu }) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
    size,
  }

  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div
          className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>}
      <div className={styles.rightWarpper}>
        <div className={styles.funbutton}>

          <Menu mode="horizontal">
            <SubMenu
              style={{
                float: 'right',
              }}
              title={<Button className={origin === '1' ? 'active' : 'notactive'} onClick={changeclass} type="primary" >在线客服</Button>}
            >
            </SubMenu>
          </Menu>
          <Menu mode="horizontal">
            <SubMenu
              style={{
                float: 'right',
              }}
              title={<span>
                钉钉扫码入群
              </span>}
            >
              <Menu.Item key="logout">
                <img src="default"/>
              </Menu.Item>
            </SubMenu>
          </Menu>
          <Menu mode="horizontal">
            <SubMenu
              style={{
                float: 'right',
              }}
              title={<span>
                关注微信
              </span>}
            >
              <Menu.Item key="logout">
                <img  src="default"/>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        {/* 右边账户信息 */}
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {user.username}
            </span>}
          >
            <Menu.Item key="logout">
              Sign out
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
  size: PropTypes.array,
  changeclass: PropTypes.func,
  origin: PropTypes.bool,
}

export default Header
