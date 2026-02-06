import React from 'react'
import Chat from './SidebarChatItem'

const Chats = () => {
  const chatsMock = [
    { name: 'juan', message: 'Hola me llamo juan', time: '12:22', isOnline: true },
    { name: 'lucas', message: 'jejejejejeje soy un mensaje', time: '12:18', isOnline: false },
    { name: 'oscar', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '12:10', isOnline: true },
    { name: 'martina', message: 'Che, después hablamos de lo de ayer?', time: '11:55', isOnline: false },
    { name: 'sofia', message: 'Te mandé los archivos al drive', time: '11:40', isOnline: true },
    { name: 'nico', message: 'Ya quedó deployado 🚀', time: '11:32', isOnline: true },
    { name: 'valen', message: 'JAJAJA no puede ser eso', time: '11:20', isOnline: false },
    { name: 'franco', message: 'Estoy llegando un poco tarde hoy', time: '11:05', isOnline: false },
    { name: 'camila', message: 'Después vemos lo del diseño', time: '10:48', isOnline: true },
    { name: 'tomi', message: '👍', time: '10:30', isOnline: false },
    { name: 'agustin', message: 'Cuando puedas pegale una mirada al PR', time: '10:12', isOnline: true },
  ]
  
  return (
    <section className='flex flex-col gap-2 overflow-y-scroll'>
      {chatsMock.map(props => (
        <Chat {...props}/>
      ))}
    </section>
  )
}

export default Chats