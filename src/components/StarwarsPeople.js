import React from 'react'
import { connect } from 'react-redux'

import StarwarsButton from './addStarwarsButton'
import { addGoodPerson, addBadPerson } from '../actions'

class StarwarsPeople extends React.Component {

  render() {
    console.log("here", this.props.people)
    if(this.props.people.length > 0) {
      return (
        <div>
          <h2>Star Wars People</h2>
          <StarwarsButton />

          <ul>
            { this.props.people.map( p =>{
              return (
                <li key={p.url}>
                  {p.name} <button onClick={() => {this.props.add_good_person(p.name)}}>good</button>
                  <button onClick={() => {this.props.add_bad_person(p.name)}}>bad</button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
    else {
      return (
        <div>Starwars People - Loading Data from galaxy far away...</div>
      )
    }


  }
}

const mapStateToProps = (state) => {
  console.log("StarwarsPeople mapStateToProps",state)
  return { people: state.Starwars }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_good_person: (name) => {
      // dispatch({type: 'ADD_GOOD', name: name})
      dispatch(addGoodPerson(name))
    },
    add_bad_person: (name) => {
      // dispatch({type: 'ADD_BAD', name: name})
      dispatch(addBadPerson(name))
    }
  }
}

const connectedStarwars = connect(mapStateToProps,mapDispatchToProps)(StarwarsPeople)
export default connectedStarwars
