import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
//import MainPage from '../containers/MainPage'

//import AddRate from '../containers/AddRate'
//import EditRate from '../containers/EditRate'
//import ListOfRates from '../containers/ListOfRates'
//import SearchRates from '../containers/SearchRates'

function def(promise) {
  return promise.then(cmp => cmp.default)
}

export default function configRoutes(store) { // eslint-disable-line no-unused-vars

  return (
    <Route path='/' component={App}>
      <IndexRoute getComponent={() => def(import('../containers/MainPage'))} />
      <Route path='/add' getComponent={() => def(import('../containers/AddRate'))} />
      <Route path='/edit/:id' getComponent={() => def(import('../containers/EditRate'))} />
      <Route path='/list' getComponent={() => def(import('../containers/ListOfRates'))} />
      <Route path='/search' getComponent={() => def(import('../containers/SearchRates'))} />
    </Route>
  )
}
