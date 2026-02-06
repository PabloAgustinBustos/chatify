import React from 'react'

const SidebarChatItem = ({name, message, isOnline, time}) => {
  return (
    <article key={name + message} className="select-none h-20 p-2 flex items-center gap-3 hover:bg-slate-700/40 cursor-pointer transition rounded-2xl">
      <div className="avatar online shrink-0">
        <div className="w-12 h-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>

      
      <div className="overflow-hidden grow">
        <h2 className="text-xl font-bold text-slate-100">{name}</h2>
        <p className="truncate text-slate-300">{message}</p>
      </div>

      
      <div className="shrink-0 flex flex-col justify-evenly items-center">
        <span className="text-sm text-slate-400">Horario</span>
        <div className="badge badge-primary badge-lg">1</div>
      </div>
    </article>
  )
}

export default SidebarChatItem