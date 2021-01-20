import React from 'react'
import InfoPanel from './InfoPanel'

export default class MainWindow extends React.Component {
  render() {
    return <div className="mainWindow">
      <InfoPanel type='mainText' data='Персональные данные'/>
      <InfoPanel type='text' data='Фамилия'/>
      <InfoPanel type='text' data='Имя'/>
      <InfoPanel type='text' data='Отчество'/>
      <InfoPanel type='text' data='Электронная почта'/>
      <InfoPanel type='text' data='Телефон'/>
      <InfoPanel type='submit'/>
    </div>
  }
}