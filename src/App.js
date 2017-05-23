import React, { Component } from 'react';
import axios from 'axios'
import { Provider } from 'react-redux'

import './App.css';
import AddPersonButton from './components/AddPersonButton.js'
import Person from './components/Person.js'
import Starwars from './components/StarwarsPeople'
import GoodBadList from './components/GoodBadList'

import store from './store/manageStore'
import { fetchFromAPI } from './actions'

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
                <Link to={`/person/${i}`} >{p.name}</Link>, {p.gender}, {p.birth_year}
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


      let people = self.state.people
      people.push(response.data)
      console.log(people)

      let index = self.state.index + 1
      console.log(index)
      self.setState({
        people: people,
        index: index
      })

      store.dispatch({type: 'ADD_FROM_API', people: response.data})

      store.dispatch(fetchFromAPI())

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

      store.dispatch({type: 'ADD_FROM_API', people: response.data})


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
    console.log(store.getState())
    // store.dispatch({type: 'TEST'});
    return (
      <BrowserRouter>
        <div>
          <Home people={this.state.people} clickAddPerson={ () => this.clickAddPerson()}  />
          <Route path='/person/:index' component={(props) => <Person match={props.match} getPeople={this.getPeople() } />} />

          <Provider store={store}>
            <div>
              <Starwars />
              <GoodBadList />
            </div>
          </Provider>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
