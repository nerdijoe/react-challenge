import { ADD_GOOD, ADD_BAD, ADD_FROM_API, INCREMENT_INDEX } from './constants'

export const addGoodPerson = name => { return {type: ADD_GOOD, name: name}}
export const addBadPerson = name => { return {type: ADD_BAD, name: name}}

export const addFromAPI = (data) => {
  console.log("addFromAPI")
  return {type: ADD_FROM_API, people: data}
}

export const fetchFromAPI = (index) => {
  return (dispatch) => {
    fetch(`http://swapi.co/api/people/${index}/`)
    .then( res => res.json())
    .then( res => {
      console.log('**** fetchFromAPI')
      console.log(res)
      dispatch(addFromAPI(res))
      dispatch(incrementIndex())
    })
  }

}

export const incrementIndex = () => { return {type: INCREMENT_INDEX}}
