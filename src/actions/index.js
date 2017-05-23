import { ADD_GOOD, ADD_BAD } from './constants'

export const addGoodPerson = name => { return {type: ADD_GOOD, name: name}}
export const addBadPerson = name => { return {type: ADD_BAD, name: name}}
