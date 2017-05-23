import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// import StarwarsReducer from '../reducers/Starwars'
import StarwarsApp from '../reducers'

let middlewares = applyMiddleware(logger, thunk)
let store = createStore(StarwarsApp, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
