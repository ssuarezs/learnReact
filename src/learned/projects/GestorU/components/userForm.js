import Input from './input'
import Button from './button'
import useForm from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
  const [form, handleChange, resetForm] = useForm({ 
    name: '',  lastname: '', email: '' 
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form)
    resetForm()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Name"
        name="name" 
        type="text" 
        onChange={handleChange} 
        value={form.name}
        placeholder="Name"
      />
      <Input 
        label="Last Name"
        name="lastname" 
        type="text" 
        onChange={handleChange} 
        value={form.lastname}
        placeholder="Last Name"
      />
      <Input 
        label="Email"
        name="email" 
        type="text" 
        onChange={handleChange} 
        value={form.email}
        placeholder="E-mail"
      />
      <Button>Send</Button>
    </form>
  )
}
export default UserForm
