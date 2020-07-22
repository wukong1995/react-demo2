import React from 'react'
import en from './en'
import zhCN from './zh-CN'
import LanguageContext from './context'

const list = {
  [en.locale]: en.messages,
  [zhCN.locale]: zhCN.messages
}

export const withLanguage = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {
        language => (
          <Component {...props} t={(title) => list[language][title] } />
        )
      }
    </LanguageContext.Consumer>
  )
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
