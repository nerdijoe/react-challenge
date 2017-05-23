
const starwarsInitialState = []

const Starwars = (state = starwarsInitialState, action) => {
  console.log("Reducer Starwars")
  console.log("action--->" + action.type)

  switch(action.type) {
    case 'TEST': {
      console.log('Do TEST ' + action.id)
      return state
    }
    case 'ADD_FROM_API': {
      console.log(action.people)
      return [...state, action.people]
    }
    default: return state
  }
}

export default Starwars
