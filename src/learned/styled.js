import styled, { keyframes } from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: red;
`
const Content = styled.div`
  padding: 20px 25px;
`
const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  font-weight: 600;
  font-size: 14px;
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: #fff;
  }

  .info {
    font-size: 28px;
  }
`
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`
const Link = ({ className, ...props }) => 
  <a className={className} {...props}><div/></a>

const StyledLink = styled(Link)`
  color: blue;
`
const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color}
`
const Password = styled(Input).attrs({
  type: 'password'
})``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 5s linear infinite;
`

const App = () => { 
  return(
    <Content>
      <P>Hi, I'm San Suarez!</P>
      <Button>Send<p className="info">Info</p></Button>
      <Button primary>Send</Button>
      <Button className="secondary">Send</Button>
      <BlockButton primary as="a" href="#">Send Block</BlockButton>
      <BlockButton>Send Block</BlockButton>
      <Link>link sin estilo</Link>
      <StyledLink>link con estilo</StyledLink>
      <Input />
      <Password />
      <Rotar><Button primary>Send</Button></Rotar>
    </Content>
  )
}

export default App;
