import React from 'react'
import { connect } from 'react-redux'

import StarwarsButton from './addStarwarsButton'

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
                <li key={p.url}> {p.name} </li>
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
  return { people: state }
}

const connectedStarwars = connect(mapStateToProps,null)(StarwarsPeople)
export default connectedStarwars
