import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddPersonButton from './AddPersonButton.js'

import Person from './Person.js'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


const Home = (props) => { 
  return (

      <div>
        <h1>Home</h1>

        <AddPersonButton clickAddPerson={() => { props.clickAddPerson()}} />
        <ul>
          { 
            props.people.map( (p, i) => {
            return (
              <li key={p.url}>
                {p.name}, {p.gender}, {p.birth_year} ,
                <Link to={`/person/${i}`} >detail</Link>
              </li>
            )
            })
          }
        </ul>

      </div>

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

  getPeople() {
    return this.state.people
  }


  render() {
    console.log("render")
    return (
      <BrowserRouter>
      <div>
        <Home people={this.state.people} clickAddPerson={ () => this.clickAddPerson()}  />

        <Route path='/person/:index' component={(props) => <Person match={props.match} getPeople={this.getPeople() } />} />
      </div>

      </BrowserRouter>

    );
  }
}

export default App;
