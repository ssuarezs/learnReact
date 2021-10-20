import React from 'react'
import { useFormik } from 'formik'

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
    return errors
}
const App = () => { 
  const formik = useFormik({
    initialValues:{
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values) 
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input type='text' {...formik.getFieldProps('name')}/>
      {formik.touched.name && formik.errors.name 
        ? <div>{formik.errors.name}</div> : null}
      <br/>
      <label>Last Name</label>
      <input type='text' {...formik.getFieldProps('lastname')}/>
      {formik.touched.lastname && formik.errors.lastname 
        ? <div>{formik.errors.lastname}</div> : null}
      <br/>
      <label>Email</label>
      <input type='text' {...formik.getFieldProps('email')}/>
      <br/>
      {formik.touched.email && formik.errors.email 
        ? <div>{formik.errors.email}</div> : null}
      <button type='submit'>Send</button>
    </form>
  )
}
export default App;

