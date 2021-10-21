import { useState, useEffect } from 'react'
import styled from 'styled-components'
import FormCal from './components/formCal'

const Content = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eee;
  align-items: center;
  height: 100vh;
  width: 100%;
`
const Calculator = styled.div`
  display: inline-block;
  background-color: #ddd;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.3);
  border-top: 2px solid #c88;
  border-radius: 3px;
  padding: 20px 30px;
  width: 300px;
`
const Result = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
`

const App = () => { 
  const [data, setData] = useState({})
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const d = { ei: 0, ef: 0 }
    for (const prop in data) {
      d[prop] = parseFloat(data[prop])
    }
    d.ei = d.dep
    for(let y=0; y<d.years; y++){
      d.ef = d.ei * ( 1 + d.interest )
      d.ei = d.ef + d.contri
    }
    setBalance(Math.round(d.ei*100)/100)
  }, [data, balance])

  return(
    <Content>
      <Calculator>
        <FormCal calculate={setData}/>
        {balance 
          ? <Result>
              Balance final: {'$'}{balance}
            </Result> 
          : null}
      </Calculator>
    </Content>
  )
}

export default App;
