import { Image, Send, Smile } from 'lucide-react'
import React from 'react'
import Header from './Header'
import ChatZone from './ChatZone'
import Footer from './Footer'

const index = () => {
  return (
    <main className='w-3/4 h-full grid grid-rows-10'>
      <Header/>

      <ChatZone/>

      <Footer/>
    </main>
  )
}

export default index