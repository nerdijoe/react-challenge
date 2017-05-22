import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddPersonButton from './AddPersonButton.js'

import {
  BrowserRouter,
  Route
} from 'react-router-dom'


const Home = () => { 
  return (
    <h1>Home</h1>   
  )
  
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [11,22,33],
      index: 1,
      people: []
    }

  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")

    let self = this
    axios.get(`http://swapi.co/api/people/${this.state.index}/`)
    .then(response => {
      console.log(response.data)

      let people = self.state.people
      people.push(response.data)

      let index = self.state.index + 1
      console.log(index)
      self.setState({
        people: people,
        index: index
      })


    })
    .catch( err => {
      console.log(err)
    })

  }

  clickAddPerson() {
    console.log('clickAddPerson')

    let self = this
    axios.get(`http://swapi.co/api/people/${this.state.index}/`)
    .then(response => {
      console.log(response.data)

      let people = self.state.people
      people.push(response.data)

      let index = self.state.index + 1

      console.log(index)
      self.setState({
        people: people,
        index: index
      })


    })
    .catch( err => {
      console.log(err)
    })


  }


  render() {
    console.log("render")
    return (


      <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>

        <AddPersonButton clickAddPerson={() => { this.clickAddPerson()}} />
        <ul>
          { this.state.people.map( p => {
            return (
              <li key={p.url}>{p.name}, {p.gender}, {p.birth_year}</li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
