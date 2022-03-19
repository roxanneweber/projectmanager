import {useState} from 'react'
import { FaLock } from 'react-icons/fa'
import {toast} from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  
  }

  return (
    <div className='container'>
    <section className='heading'>
      <h1>
        <FaLock /> Login
      </h1>
      <p>Please log into your account.</p>
      
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

          <div className='form-group'>
          <input 
            type="email" 
            className="form-control" 
            name='email' 
            id='email' 
            value={email} 
            onChange={onChange} 
            placeholder='Enter your email' 
            required />
          </div>

          <div className='form-group'>
          <input 
            type="password" 
            className="form-control" 
            name='password' 
            id='password' 
            value={password} 
            onChange={onChange} 
            placeholder='Enter your password' 
            required />
          </div>

<div className="form-group">
  <button className='btn btn-block'>  
Submit
  </button><br /><br />
</div>
          </form>
      </section>
      </div>
  )
}

export default Login