import React, { useState } from 'react'
import Container from './components/container'
import Card from './components/card'
import UserForm from './components/userForm'


const App = () => { 
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([
      ...users,
      user
    ])
  }

  return(
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            { users.map(x => 
              <li key={x.email}>
                {`${x.name} ${x.lastname}: ${x.email}`}
              </li>)}
          </ul>
        </Card>
      </Container>
    </div>
  )
}
export default App;

