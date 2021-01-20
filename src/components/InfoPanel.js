import React from 'react'
import MainText from './MainText'
import Field from './Field'
import FieldName from './FieldName'

export default class InfoPanel extends React.Component {
  render() {
    if (this.props.type === 'mainText') {
      return <div className="infoPanel">
        <MainText data={this.props.data}/>
      </div>
    } else if (this.props.type === 'text') {
      return <div className="infoPanel">
        <FieldName data={this.props.data} />
        <Field type={this.props.type} />
      </div>
    } else if (this.props.type === 'submit') {
      return <div className="infoPanel">
        <Field type={this.props.type} />
      </div>
    }
  }
}
