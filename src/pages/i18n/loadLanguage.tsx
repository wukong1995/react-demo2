import React from 'react'
import en from './en'
import zhCN from './zh-CN'
import LanguageContext from './context'

const list = {
  [en.locale]: en.messages,
  [zhCN.locale]: zhCN.messages
}

const t = (title) => {
  return (
    <LanguageContext.Consumer>
      {language => (
        list[language][title]
      )}
    </LanguageContext.Consumer>
  )
}

export default t
