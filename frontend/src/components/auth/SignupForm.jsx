import { Eye, EyeClosed, Mail, UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import Loader from '../ui/Loader'

const SignupForm = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const { signUp, isSigningUp } = useAuthStore()

  const isFullnameValid = data.fullname.trim().length >= 3
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  const isPasswordValid = data.password.length >= 6

  const isReady = isFullnameValid && isEmailValid && isPasswordValid

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

    await signUp(data)
  }

  return (
    <form onSubmit={handleSubmit} className='w-96 flex flex-col gap-5'>
      <fieldset className="fieldset">
        <label className="label text-gray-300">Fullname</label>
        <label className='input flex items-center gap-2'>
          <UserRound />
          <input 
            id='fullname'
            type="text" 
            className="w-full" 
            placeholder="John Doe" 
            onChange={handleChange}
            value={data.fullname}
          />
        </label>

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
        <button className="w-full btn btn-info mt-4" disabled={!isReady || isSigningUp}>
          {isSigningUp ? <Loader/> : 'Sign up'}
        </button>
        <span className='text-gray-300'>Already have an account? <Link className='text-sky-300 hover:text-sky-200 transition-colors' to='/login'>Login</Link></span>
      </div>
    </form>
  )
}

export default SignupForm