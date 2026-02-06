import { Bell, LogOut } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between  bg-opacity-20'>
      <div className='flex-[2] flex items-center gap-5'>
        <img src="profile-placeholder.png" className='size-14 rounded-full' alt="" />
        <h1 className='text-xl text-slate-100 font-bold'>Pablo</h1>
      </div>

      <div className='flex-[1] flex justify-end gap-5'>
        <button><Bell/></button>
        <button><LogOut/></button>
      </div>
    </header>
  )
}

export default Header