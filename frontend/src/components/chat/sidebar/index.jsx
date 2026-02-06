import { Bell, LogOut } from 'lucide-react'
import React from 'react'
import Header from './Header'
import Filter from './Filter'
import Chats from './Chats'

const index = () => {
  return (
    <aside className='w-1/4 h-full grid grid-rows-[auto_auto_1fr] p-4 gap-4'>
      <Header/>

      <Filter/>

      <Chats/>
    </aside>
  )
}

export default index