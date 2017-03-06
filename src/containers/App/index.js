import React, { Component } from 'react'
import { Link } from 'react-router'

import './reset.css'
import './styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Link className='btn btn-default' to='add'>Add</Link>
        <Link className='btn btn-default' to='list'>List</Link>
        <Link className='btn btn-default' to='search'>Search</Link>

        <div className='app'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
