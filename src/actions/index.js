import { ADD_GOOD, ADD_BAD } from './constants'

export const addGoodPerson = name => { return {type: ADD_GOOD, name: name}}
export const addBadPerson = name => { return {type: ADD_BAD, name: name}}

export const addFromAPI = (data) => {
  console.log("addFromAPI")
  return {type: 'addFromAPI', people: data}
}

export const fetchFromAPI = () => {
  return (dispatch) => {
    fetch(`http://swapi.co/api/people/1/`)
    .then( res => res.json())
    .then( res => {
      console.log('fetchFromAPI')
      console.log(res)
      dispatch(addFromAPI(res))
    })
  }

}
