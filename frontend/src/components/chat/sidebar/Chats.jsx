import React from 'react'
import Chat from './SidebarChatItem'
import Contact from './SidebarContactItem'
import useChatStore from '../../../store/useChatStore'
import { chatsMock, contactsMock } from '../../utils'

const Chats = () => {
  const activeTab = useChatStore(store => store.activeTab)

  const Item = activeTab === "chats" ? Chat : Contact
  const data = activeTab === "chats" ? chatsMock : contactsMock
  
  return (
    <section className='flex flex-col gap-2 overflow-y-scroll'>
      {data.map(props => (
        <Item key={props.id} {...props}/>
      ))}
    </section>
  )
}

export default Chats