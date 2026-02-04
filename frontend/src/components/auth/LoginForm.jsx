import { Eye, EyeClosed, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import Loader from '../ui/Loader'

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const { login, isLogin } = useAuthStore()

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  const isPasswordValid = data.password.length >= 6

  const isReady = isEmailValid && isPasswordValid

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = e => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleChange = e => {
    const { id, value } = e.target

    setData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await login(data)
  }

  return (
    <form onSubmit={handleSubmit} className='w-96 flex flex-col gap-5'>
      <fieldset className="fieldset">
        <label className="label text-gray-300">Email</label>
        <label className='input flex items-center gap-2'>
          <Mail />
          <input 
            id='email'
            type="email" 
            className="w-full" 
            placeholder="Example@gmail.com" 
            onChange={handleChange}
            value={data.email}
          />
        </label>

        <label className="label text-gray-300">Password</label>
        <label className='input flex items-center gap-2'>
          <button type='button' onClick={togglePassword}>
            {showPassword ? <Eye /> : <EyeClosed/>}
          </button>
          <input 
            id='password'
            type={showPassword ? 'text' : 'password'} 
            className="w-full" 
            placeholder="Password" 
            onChange={handleChange}
            value={data.password}
          />
        </label>
      </fieldset>

      <div className='flex flex-col items-center gap-2'>
      <button className="w-full btn btn-info mt-4" disabled={!isReady || isLogin}>
          {isLogin ? <Loader/> : 'Sign in'}
        </button>
        <span className='text-gray-300'>Don't have an account? <Link className='text-sky-300 hover:text-sky-200 transition-colors' to='/signup'>Sign up</Link></span>
      </div>
    </form>
  )
}

export default LoginForm