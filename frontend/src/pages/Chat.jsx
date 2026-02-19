import React from 'react'
import Sidebar from "../components/chat/sidebar"
import Conversation from "../components/chat/conversation"
import Settings from "../components/settings"

const Chat = () => {


  return (
    <div className='z-10 w-[1400px] h-[650px] 2xl:w-[1850px] 2xl:h-[950px] flex items-center justify-center bg-slate-800 rounded-2xl'>
      <Sidebar/>
      {true ? <Conversation /> : <Settings/>}
    </div>
  )
}

export default Chat