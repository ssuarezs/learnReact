import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from './components/textInput'
import CheckBox from './components/checkBox'
import Select from './components/select'
import Radio from './components/radio'

const validate = (values) => {
    const errors = {}
    if(!values.name){
      errors.name = 'Required'
    } else if(values.name.length < 5){
      errors.name = 'The name is too short'
    }
    if(!values.lastname){
      errors.lastname = 'Required'
    } else if(values.lastname.length < 5){
      errors.lastname = 'The last name is too short'
    }
  if(!values.radio){
    errors.radio='Required'
  }
  return errors
}
const App = () => { 
  return(
  <Formik
    initialValues={{ 
      name: '', lastname: '',
      email: '', tiger: '',
      accept: false, radio: '' 
    }}
    validate={validate}
    onSubmit={values => console.log(values)} 
  >
    <Form>
      <TextInput name='name' label='Name' />
      <br />
      <TextInput name='lastname' label='Last Name' />
      <br />
      <TextInput name='email' label='Email' />
      <br />
      <Select label='Type of tiger' name='tiger'>
        <option value=''>Select Tiger</option>
        <option value='crazy'>Crazy Tiger</option>
        <option value='good'>Good Tiger</option>
        <option value='bad'>Bad Tiger</option>
      </Select>
      <CheckBox name='accept'>
        Accept terms y conditions
      </CheckBox>
      <Radio name='radio' value="chancho1" label='chanch1'/>
      <Radio name='radio' value="chancho2" label='chanch2'/>
      <Radio name='radio' value="chancho3" label='chanch3'/>
      <ErrorMessage name='radio'/>
      <br />
      <button type='submit'>Send</button>
    </Form>
  </Formik>
  )
}
export default App;

