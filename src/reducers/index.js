import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rates from './rates'

export const rootReducer = combineReducers({
  routing: routerReducer,
  rates: rates,
})
