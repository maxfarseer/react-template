import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import MainPage from '../containers/MainPage'

import AddRate from '../containers/AddRate'
import EditRate from '../containers/EditRate'
import ListOfRates from '../containers/ListOfRates'
import SearchRates from '../containers/SearchRates'

export default function configRoutes(store) { // eslint-disable-line no-unused-vars

  return (
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
      <Route path='/add' component={AddRate} />
      <Route path='/edit/:id' component={EditRate} />
      <Route path='/list' component={ListOfRates} />
      <Route path='/search' component={SearchRates} />
    </Route>
  )
}
