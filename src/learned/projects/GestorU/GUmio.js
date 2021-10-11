import React, { useState, useReducer } from 'react'
import './form.css'


const initialState = { list: [] }
const reducerList = (state, action) => {
  switch(action.type){
    case 'save':
      return { ...state, list: [...state.list, action.payload]}
    default:
      return state
  }
}

const useValue = (inital) => {
  const [value, setValue] = useState(inital)
  const handleChange = ({ target }) => {
    setValue(state => ({
      ...state,
      [target.name]: target.value
    }))
  }
  return [value, setValue, handleChange]
}

const App = () => { 
  const [state, dispatch] = useReducer(reducerList, initialState)
  const [value, setValue, handleChange] = useValue({ 
    name: '',  lastname: '', email: '' 
  })

  const sendForm = () => {
    dispatch({ type: 'save', payload: value })
    setValue({ name: '', lastname: '', email: '' })
  }

  return(
    <div className="container">
      <div className="block">
        <p className="subtitle">Name</p>
        <input className="input" type="text" name="name" onChange={handleChange} placeholder="Name" value={value.name} />
        <p className="subtitle">Last Name</p>
        <input className="input" type="text" name="lastname" onChange={handleChange} placeholder="Last Name" value={value.lastname} />
        <p className="subtitle">Email</p>
        <input className="input" type="text" name="email" onChange={handleChange} placeholder="Email" value={value.email} />
        <button className="btn" onClick={sendForm}>Send</button>
      </div>
      <div className="block" >
        <ul>
          { state.list.map(i => 
            <li key={i.name}>{`Name: ${i.name} ${i.lastname}, Email: ${i.email}`}</li>
          ) }
        </ul>
      </div>
    </div>
  )
}
export default App;

