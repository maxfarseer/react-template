import React, { Component } from 'react'

import './reset.css'
import './styles.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
