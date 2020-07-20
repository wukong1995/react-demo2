import React from 'react'

const Header = () => {
  return (
    <div className="flex-wrapper header">
      <div className="flex-wrapper__left">
        <h2 className="header__title">Project</h2>
      </div>
      <div className="flex-wrapper__right">
        <a className="header__item" href="javascript: ;">登录</a>
        <a className="header__item" href="javascript: ;">注册</a>
      </div>
    </div>
  )
}

export default Header
