import { Formik, Form, useField } from 'formik'
import styled from 'styled-components'

const TI = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...field}/>
      {meta.touched && meta.error 
        ? <div className="error">*{meta.error}</div> : null}
    </div>
  )
}
const TextInput = styled(TI)`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  margin: 0px 0px 8px 0px;

  label {
    margin: 5px;
    font-size: 15px;
  }
  input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 14px;
  }
  div {
    padding: 0px 12px;
    font-size: 10px;
    color: red;
  }
`
const Button = styled.button.attrs(props => ({
  type: 'submit',
}))`
    color: white;
    background-color: #c88;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid #c88;
    border-radius: 4px;
    margin: 10px 0px;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
    &:active {
      background-color: white;
      color: #c88;
    }
`

const validate = (values) => {
  const errors = {}
  const arr = ['dep','contri','years','interest']
  arr.forEach(i => {
    if(!values[i])
      errors[i] = 'Required'
    if(!(/^-?\d*\.?\d*$/.test(values[i])))
      errors[i] = 'Must be a number'
  })
  return errors
}

const FormCal = ({ calculate }) => {
  return (
    <Formik
      initialValues={{ 
        dep: '', contri: '',
        years: '', interest: ''
      }}
      validate={validate}
      onSubmit={values => calculate(values)} 
    >
      <Form>
        <TextInput name="dep" label="Initial Deposit"/>
        <TextInput name="contri" label="Annual Contribution"/>
        <TextInput name="years" label="Years"/>
        <TextInput name="interest" label="Interst"/>
        <Button>Calculate</Button>
      </Form>
    </Formik>
  )
}
export default FormCal
