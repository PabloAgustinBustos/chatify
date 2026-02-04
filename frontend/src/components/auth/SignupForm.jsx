import React from 'react'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (
    <form className='w-96 flex flex-col gap-5'>
      <fieldset className="fieldset">
        <label className="label text-gray-300">Fullname</label>
        <input type="text" className="input" placeholder="John Doe" />

        <label className="label text-gray-300">Email</label>
        <input type="email" className="input" placeholder="example@gmail.com" />

        <label className="label text-gray-300">Password</label>
        <input type="password" className="input" placeholder="Password" />
      </fieldset>

      <div className='flex flex-col items-center gap-2'>
        <button className="w-full btn btn-info mt-4">Signup</button>
        <span className='text-gray-300'>Already have an account? <Link className='text-sky-300 hover:text-sky-200 transition-colors' to='/login'>Login</Link></span>
      </div>
    </form>
  )
}

export default SignupForm