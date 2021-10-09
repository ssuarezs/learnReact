import React from 'react'

const App = () => { 
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    const obj = Object.fromEntries(data)
    console.log(obj)
  }
  return(
    <form onSubmit={submit}>
      <div>
        <span>
          Lala
        </span>
        <input name='Field3' />
      </div>
      <input name='Field4' />
      <input type='file' name='file2' />
      <input type='submit' value='Send' />
    </form>
  )
}
export default App;
