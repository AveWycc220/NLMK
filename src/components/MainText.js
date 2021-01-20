import React from 'react'

export default class MainText extends React.Component {
  render() {
    return <p className="mainText">{this.props.data}</p>
  }
}