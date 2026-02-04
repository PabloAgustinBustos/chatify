import { Eye, EyeClosed, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = e => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <form className='w-96 flex flex-col gap-5'>
      <fieldset className="fieldset">
        <label className="label text-gray-300">Email</label>
        <label className='input flex items-center gap-2'>
          <Mail />
          <input type="email" className="w-full" placeholder="Example@gmail.com" />
        </label>

        <label className="label text-gray-300">Password</label>
        <label className='input flex items-center gap-2'>
          <button onClick={togglePassword}>
            {showPassword ? <Eye /> : <EyeClosed/>}
          </button>
          <input type={showPassword ? 'text' : 'password'} className="w-full" placeholder="Password" />
        </label>
      </fieldset>

      <div className='flex flex-col items-center gap-2'>
        <button className="w-full btn btn-info mt-4">Sign in</button>
        <span className='text-gray-300'>Don't have an account? <Link className='text-sky-300 hover:text-sky-200 transition-colors' to='/signup'>Sign up</Link></span>
      </div>
    </form>
  )
}

export default LoginForm