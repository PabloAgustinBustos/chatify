import React from 'react'
import Message from './Message'
import { messages } from '../../utils'

const ChatZone = () => {
  return (
    <section className='row-span-8 overflow-y-auto p-2 space-y-4 bg-red-300 bg-opacity-0'>
      {messages.map((message, index) => (
        <Message key={message.id} {...message} index={index}/>
      ))}
    </section>
  )
}

export default ChatZone