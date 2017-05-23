import React from 'react'
import { connect } from 'react-redux'

class GoodBadList extends React.Component {
  render() {
    return (
      <div>
        <h2>Good</h2>
        <ul>
          { this.props.list.good.map( g => {
            return (
              <li key={g.id}>{g.name}</li>
            )
          })}
        </ul>

        <h2>Bad</h2>
        <ul>
          { this.props.list.bad.map( g => {
            return (
              <li key={g.id}>{g.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.GoodBad
  }
}

const connectedGoodBadList = connect(mapStateToProps,null)(GoodBadList)

export default connectedGoodBadList
