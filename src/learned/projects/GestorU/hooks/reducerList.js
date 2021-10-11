const reducerList = (state, action) => {
  switch(action.type){
    case 'save':
      return { ...state, list: [...state.list, action.payload]}
    default:
      return state
  }
}
export default reducerList
