const initialState = {
  good: [],
  bad: []
}

const GoodBad = (state = initialState, action) => {
  console.log('Reducer GoodBad')
  console.log("action-----> " + action.type)
  switch(action.type) {
    case 'ADD_GOOD': {
      let lastId
      if(state.good.length === 0) {
        lastId = 0
      }
      else {
        lastId = state.good[state.good.length - 1].id
      }

      const newData = {
        id: lastId + 1,
        name: action.name
      }
      const good_data = [...state.good, newData]
      return {...state, good: good_data}
    }
    case 'ADD_BAD': {
      let lastId
      if(state.bad.length === 0) {
        lastId = 0
      }
      else {
        lastId = state.bad[state.bad.length - 1].id
      }

      const newData = {
        id: lastId + 1,
        name: action.name
      }
      const bad_data = [...state.bad, newData]
      return {...state, bad: bad_data}
    }
    default: return state
  }
}

export default GoodBad
