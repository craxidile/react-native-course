import React from 'react'

export default class StatefulComponent extends React.Component {
  render () {
      return (
        <div>
          <span id='fulCmp'>StatefulComponent = {this.props.count}</span>
        </div>
      )
  }
}