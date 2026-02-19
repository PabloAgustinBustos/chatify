import { Image, Send, Smile } from 'lucide-react'
import React from 'react'
import Header from './Header'
import ChatZone from './ChatZone'
import Footer from './Footer'
import useChatStore from '../../../store/useChatStore'
import NoUserSelected from './NoUserSelected'

const index = () => {
  const selectedUser = useChatStore(store => store.selectedUser)

  return (
    <main className='w-full h-full'>
      { true ? (<div className='h-full grid grid-rows-10'>
        <Header/>
  
        <ChatZone/>
  
        <Footer/>
      </div>) : <NoUserSelected/> }
    </main>
  )
}

export default index