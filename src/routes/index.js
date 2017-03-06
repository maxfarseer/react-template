import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import MainPage from '../containers/MainPage'

export default function configRoutes(store) { // eslint-disable-line no-unused-vars

  return (
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
    </Route>
  )
}
