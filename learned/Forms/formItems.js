import React, { useState } from 'react'

const App = () => { 
  const [value, setValue] = useState({ 
    normal: 'Defecto', 
    text: 'Texto',
    select: '', 
    check: false, 
    est: 'feliz' 
  })
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox'
        ? target.checked 
        : target.value 
    }))
  }
  console.log(value)
  return(
  <div>
    {value.length < 5 ? <span>Longitud minima de 5</span> : null}
    <input type='text' name='normal' value={value.normal} onChange={handleChange} />
    <textarea name='text' onChange={handleChange} value={value.text}/>
    <select value={value.select} name='select' onChange={handleChange}>
      <option value=''>-- Seleccione --</option>
      <option value='chanfeliz'>Chanchito Feliz</option>
      <option value='chantriste'>Chanchito Triste</option>
      <option value='chanemocionado'>Chanchito Emocionado</option>
    </select>
    <input 
      type='checkbox'
      name='check'
      onChange={handleChange}
      checked={value.check}
    />
    <div>
      <label>Chancho</label>
      <input 
        onChange={handleChange} 
        type='radio' 
        value='feliz' 
        name='est' 
        checked={value.est === 'feliz'}
      />Feliz
      <input 
        onChange={handleChange} 
        type='radio' 
        value='triste' 
        name='est' 
        checked={value.est === 'triste'}
      />Triste
      <input 
        onChange={handleChange} 
        type='radio' 
        value='enojado' 
        name='est' 
        checked={value.est === 'enojado'}
      />Enojado
    </div>
  </div>
  )
}
export default App;

