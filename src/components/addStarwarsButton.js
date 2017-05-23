import React from 'react'
import { connect } from 'react-redux'

import { fetchFromAPI } from '../actions'

class addStarwarsButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => {this.props.fetch_from_api(this.props.index)}}>add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("addStarwarsButton mapStateToProps",state)
  return {
    index: state.Starwars.index
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    test: (id) => {
      dispatch({type: 'TEST', id: id})
    },
    fetch_from_api: (index) => {
      dispatch(fetchFromAPI(index))
    }
  }
}

const connectedButton = connect(mapStateToProps,mapDispatchToProps)(addStarwarsButton)
export default connectedButton
