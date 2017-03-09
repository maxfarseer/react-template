import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rates from './rates'
import countries from './countries'

export const rootReducer = combineReducers({
  routing: routerReducer,
  rates,
  countries,
})
