
const starwarsInitialState = {
  index: 1,
  people: []
}

const Starwars = (state = starwarsInitialState, action) => {
  console.log("Reducer Starwars")
  console.log("action--->" + action.type)

  switch(action.type) {
    case 'TEST': {
      console.log('Do TEST ' + action.id)
      return state
    }
    case 'ADD_FROM_API': {
      console.log("+++++++++++")
      console.log(action)
      console.log(action.people)
      let updatePeople = [...state.people, action.people]
      return {...state, people: updatePeople }
    }
    case 'INCREMENT_INDEX': {
      return {...state, index: state.index + 1}
    }
    default: return state
  }
}

export default Starwars
