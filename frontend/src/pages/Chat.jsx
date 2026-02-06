import React from 'react'
import useAuthStore from '../store/useAuthStore'
import { Bell, Image, LogOut, Send, Smile } from 'lucide-react'
import Sidebar from "../components/chat/sidebar"
import Conversation from "../components/chat/conversation"

const Chat = () => {
  return (
    <div className='z-10 w-[1400px] h-[650px] 2xl:w-[1850px] 2xl:h-[950px] flex items-center justify-center bg-slate-800 rounded-2xl'>
      <Sidebar/>
      <Conversation />
    </div>
  )
}

export default Chat