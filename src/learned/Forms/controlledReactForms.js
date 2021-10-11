import React, { useRef } from 'react'

const App = () => { 
  const input = useRef()
  const file = useRef()
  const submit = () => {
    console.log(input.current.value)
    console.log(file.current.files[0])
    const form = new FormData()
    form.append('file', file.current.files[0])
    form.append('field', input.current.value)
    fetch('/lala', { method: 'POST', body: form })
  }
  return(
    <div>
        <div>
          <span>Lala</span>
          <input type='text' name='Field1' ref={input} />
          <input type='file' ref={file} />
        </div>
        <input type='submit' value='Send' onClick={submit} />
    </div>
  )
}
export default App;
