import React, { useState } from 'react'
import LanguageContext from './context'
import t from './loadLanguage'

const Title = () => {
  return (
    <div>{t('title')}</div>
  )
}

const Descrption = () => {
  return (
    <div>{t('desc')}</div>
  )
}

const Container = () => {
  const [language, setLanguage] = useState('zh-CN')
  const changeLanguage = () => {
    setLanguage(language === 'zh-CN' ? 'en' : 'zh-CN')
  }

  return (
    <LanguageContext.Provider value={language}>
      <button onClick={changeLanguage}>切换语言：当前是{language}</button>
      <Title />
      <Descrption />
    </LanguageContext.Provider>
  )
}

export default Container
