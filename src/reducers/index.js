import { combineReducers } from 'redux'

import Starwars from './Starwars'
import GoodBad from './GoodBad'

const StarwarsApp = combineReducers({
  Starwars,
  GoodBad
})

export default StarwarsApp
