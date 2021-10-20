import React, { useState } from 'react'
import Header from './components/header'
import Images from './components/images'

const useImages = (initial) => {
  const [images, setImages] = useState(initial)
  const handleImages = async (melo) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setImages(data)
  }
  return [images, handleImages]
}
const App = () => { 
  const [images, handleImages] = useImages([])
  return(
    <div>
      <Header handleImages={handleImages}/>
      <Images images={images}/>
    </div>
  )
}
export default App;

