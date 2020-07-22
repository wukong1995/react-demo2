import React, { useState } from 'react'
import LanguageContext from './context'
import t, { withLanguage } from './loadLanguage'

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


const Descrption2 = ({ t }) => {
  return (
    <div>hoc: {t('desc')}</div>
  )
}

const Descrption22 = withLanguage(Descrption2)

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
      <Descrption22 />
    </LanguageContext.Provider>
  )
}

export default Container
