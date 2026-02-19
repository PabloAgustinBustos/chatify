import { LogOut, Settings } from 'lucide-react'
import React from 'react'
import useAuthStore from '../../../store/useAuthStore'

const Header = () => {
  const logout = useAuthStore(store => store.logout)

  const toggleSettingsModal = e => {
    document.getElementById('my_modal_1').showModal()
  }

  return (
    <header className='flex items-center justify-between  bg-opacity-20'>
      <div className='flex items-center gap-5 flex-1 min-w-0'>
        <img src="profile-placeholder.png" className='size-14 rounded-full shrink-0' alt="" />
        
        <div className='overflow-hidden grow'>
          <h1 className='text-xl text-slate-100 font-bold'>Pablo</h1>
          <h2 className='w-[220px] 2xl:w-[350px] truncate text-sm italic '>Buenas a todos</h2>
        </div>
      </div>

      <div className='flex gap-5 shrink-0'>
        <button onClick={toggleSettingsModal}><Settings/></button>
        <button onClick={logout}><LogOut/></button>
      </div>
    </header>
  )
}

export default Header