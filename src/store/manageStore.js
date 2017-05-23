import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// import StarwarsReducer from '../reducers/Starwars'
import StarwarsApp from '../reducers'

let store = createStore(StarwarsApp, applyMiddleware(logger))

export default store
