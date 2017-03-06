import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()
const rootEl = document.getElementById('root')
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root routerHistory={history} store={store} />,
  rootEl
)

