import React from 'react'

export default class Filed extends React.Component {
  render() {
    return <input type={this.props.type} className="field">{this.props.data}</input>
  }
}