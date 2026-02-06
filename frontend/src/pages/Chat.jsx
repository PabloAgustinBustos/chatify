import React from 'react'
import useAuthStore from '../store/useAuthStore'
import { Bell, Image, LogOut, Send, Smile } from 'lucide-react'

const Chat = () => {
  const { logout } = useAuthStore()

  return (
    <div className='z-10 w-[1400px] h-[650px] 2xl:w-[1850px] 2xl:h-[950px] flex items-center justify-center bg-slate-800 rounded-2xl'>
      <aside className='w-1/4 h-full p-4 gap-5 flex flex-col'>
        <header className='flex items-center justify-between  bg-opacity-20'>
          <div className='flex-[2] flex items-center gap-5'>
            <img src="profile-placeholder.png" className='size-14 rounded-full' alt="" />
            <h1 className='text-xl text-slate-100 font-bold'>Pablo</h1>
          </div>

          <div className='flex-[1] flex justify-end gap-5'>
            <button><Bell/></button>
            <button><LogOut/></button>
          </div>
        </header>

        <section className='flex flex-col gap-5 justify-evenly bg-blue-300 bg-opacity-0'>
          <input className='input input-sm bg-slate-700 text-slate-100 border' type="text" />
          <nav className='tabs tabs-bordered'>
            <input type='radio' className='tab' name='tab' aria-label='chats' defaultChecked/>
            <input type='radio' className='tab' name='tab' aria-label='users'/>
          </nav>
        </section>

        <section className='flex flex-col gap-2 overflow-y-scroll'>
          {[{name: 'juan', message: 'Hola me llamo juan'}, {name: 'lucas', message: 'jejejejejejej soy un mensaje'}, {name: 'oscar', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'juan', message: 'Hola me llamo juan'}, {name: 'lucas', message: 'jejejejejejej soy un mensaje'}, {name: 'oscar', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'juan', message: 'Hola me llamo juan'}, {name: 'lucas', message: 'jejejejejejej soy un mensaje'}, {name: 'oscar', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}].map(({name, message}) => (
            <article className='h-20 p-2 flex flex-shrink-0 gap-2 hover:bg-slate-700/40 hover:cursor-pointer transition-colors duration-75 rounded-2xl overflow-hidden'>
              <div className='flex-1 avatar avatar-online'>
                <div className="size-auto rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>

              <div className='overflow-hidden grow'>
                <h2 className='text-xl font-bold text-slate-100'>{name}</h2>
                <h3 className='truncate'>{message} aaaaaaaaaaaa</h3>
              </div>

              <div className='flex-1 flex flex-col justify-evenly items-center'>
                <h3>Horario</h3>
                <div className="badge badge-primary badge-lg">1</div>
              </div>
            </article>
          ))}
        </section>
      </aside>

      <main className='w-3/4 h-full grid grid-rows-10'>
        <header className='p-2 row-span-1 bg-sky-300 bg-opacity-0'>
          <div className='h-full flex items-center gap-5'>
            <img className="block h-full rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            <div>
              <h2 className='text-xl text-slate-100 font-bold'>Juan</h2>
              <span className='text-sm'>Online</span>
            </div>
          </div>
        </header>

        <section className='row-span-8 overflow-y-auto p-2 space-y-4 bg-red-300 bg-opacity-0'>
          {[
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
          ].map((message, index) => (
            <div key={message.id} className={`chat ${message.isMine ? 'chat-end' : 'chat-start'}`}>
              <div className={`chat-bubble ${message.isMine ? 'chat-bubble-primary' : 'bg-slate-700 text-slate-100'} mb-1 relative px-4 py-2 pr-12`}>
                <p className="leading-snug">{message.text}</p>

                <span className="absolute bottom-1 right-2 text-[11px] opacity-60">
                  {message.time}
                </span>
              </div>

              {index === 15 && message.isMine && (
                <div className="chat-footer opacity-50">
                  Seen
                </div>
              )}
            </div>
          ))}
        </section>

        <footer className="w-full row-span-1 flex items-center bg-green-300 bg-opacity-0">
          <div className="w-full h-12 flex items-center rounded-full bg-slate-700/60">
            <section className='flex grow p-2 gap-2'>
              <button className="text-slate-300 hover:text-slate-100">
                <Smile size={20} />
              </button>

              <button className="text-slate-300 hover:text-slate-100">
                <Image size={20} />
              </button>

              <input
                type="text"
                placeholder="Escribí un mensaje…"
                className="w-full bg-transparent outline-none text-slate-100 placeholder:text-slate-400"
              />
            </section>

            <button className="mx-5 text-primary hover:text-primary/80">
              <Send size={20} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Chat