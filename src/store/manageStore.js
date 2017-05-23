import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import StarwarsReducer from '../reducers/Starwars'


let store = createStore(StarwarsReducer, applyMiddleware(logger))

export default store
