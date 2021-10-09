import { useState } from 'react'
const useForm = (init) => {
  const [form, setForm] = useState(init)

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const resetForm = () => {
    setForm(init)
  }

  return [form, handleChange, resetForm]
}
export default useForm
