import React from 'react'
import Message from './Message'

const ChatZone = () => {
  const messages = [
    {
      id: 1,
      author: 'juan',
      isMine: false,
      text: 'Ey, ¿estás?',
      time: '11:58',
    },
    {
      id: 2,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Sí, acá ando. ¿todo bien?',
      time: '11:59',
    },
    {
      id: 3,
      author: 'juan',
      isMine: false,
      text: 'Más o menos… estuve pensando en lo de ayer.',
      time: '12:00',
    },
    {
      id: 4,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Me imaginé. Quedó medio raro todo.',
      time: '12:01',
    },
    {
      id: 5,
      author: 'juan',
      isMine: false,
      text: 'No quise sonar mal, pero estaba bastante cansado.',
      time: '12:02',
    },
    {
      id: 6,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Tranqui, se notaba. A veces pasa.',
      time: '12:03',
    },
    {
      id: 7,
      author: 'juan',
      isMine: false,
      text: 'Igual gracias por bancar.',
      time: '12:04',
    },
    {
      id: 8,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Obvio, para eso estamos.',
      time: '12:05',
    },
    {
      id: 9,
      author: 'juan',
      isMine: false,
      text: 'Che, ¿seguimos con lo del proyecto hoy?',
      time: '12:06',
    },
    {
      id: 10,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Sí, después de comer me conecto un rato.',
      time: '12:07',
    },
    {
      id: 11,
      author: 'juan',
      isMine: false,
      text: 'Genial, así cerramos lo del layout del chat.',
      time: '12:08',
    },
    {
      id: 12,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Dale, ya tengo casi listo el diseño.',
      time: '12:09',
    },
    {
      id: 13,
      author: 'juan',
      isMine: false,
      text: 'Después vemos lo del backend con calma.',
      time: '12:10',
    },
    {
      id: 14,
      author: 'yo',
      isMine: true, 
      read: true,
      text: 'Sí, paso a paso, pero va quedando lindo.',
      time: '12:11',
    },
    {
      id: 15,
      author: 'juan',
      isMine: false,
      text: 'Tal cual. Bueno, hablamos en un rato 👍',
      time: '12:12',
    },
    {
      id: 16,
      author: 'yo',
      isMine: true,
      read: true,
      text: 'Daleeeee',
      time: '12:12',
    }
  ]

  return (
    <section className='row-span-8 overflow-y-auto p-2 space-y-4 bg-red-300 bg-opacity-0'>
      {messages.map((message, index) => (
        <Message key={message.id} {...message} index={index}/>
      ))}
    </section>
  )
}

export default ChatZone