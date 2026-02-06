import { Image, Send, Smile } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer