import React from 'react'

const AuthContainer = ({ children }) => {
  return (
    <main className='w-full h-[600px] flex bg-slate-800 rounded-2xl'>
      {children}
    </main>
  )
}

export default AuthContainer