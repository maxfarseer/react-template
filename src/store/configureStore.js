import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { rootReducer } from '../reducers'

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware), // ajax
    applyMiddleware(createLogger({collapsed: true})), // debug
    applyMiddleware(routerMiddleware(browserHistory)), // router
  )(createStore)(rootReducer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
