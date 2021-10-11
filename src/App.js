import React from 'react'
import { useFormik } from 'formik'

const App = () => { 
  const validate = (values) => {
    const errors = {}
    if(!values.name){
      errors.name = 'Requerido'
    }else if(values.name.length < 5){
      errors.name = 'The name is too short'
    }
    if(!values.lastname){
      errors.lastname = 'Requerido'
    }else if(values.lastname.length < 5){
      errors.lastname = 'The last name is too short'
    }
    return errors
  }
  const formik = useFormik({
    initialValues: {
      name: '', lastname: '', email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input 
        name='name'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? 
        <div>{formik.errors.name}</div> : null}
      <br />
      <label>Last Name</label>
      <input 
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? 
        <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Email</label>
      <input 
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? 
        <div>{formik.errors.email}</div> : null}
      <br />
      <button type='submit'>Send</button>
    </form>
  )
}
export default App;

