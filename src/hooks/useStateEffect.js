import React, { useState, useEffect } from 'react'


const useContador = (start) => {
  const [contador, setContador] = useState(start)
  const incrementar = () => {
    setContador(contador + 1)
  }
  const reiniciar = () => {
    setContador(0)
  }
  return [contador, incrementar, reiniciar]
}
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return <p>Intervalo</p>
}

const App = () => {
  const [contador, incrementar, reiniciar] = useContador(0)
  useEffect(() => {
    document.title = contador
  }, [contador])
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>
        Incrementar
      </button>
      <button onClick={reiniciar}>
        Reiniciar
      </button>
    <Interval contador={contador}/>
    </div>
  )
}
export default App;
