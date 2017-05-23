import React from 'react'
import { connect } from 'react-redux'

class addStarwarsButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => {this.props.test(3)}}>add</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: (id) => {
      dispatch({type: 'TEST', id: id})
    }
  }
}

const connectedButton = connect(null,mapDispatchToProps)(addStarwarsButton)
export default connectedButton
