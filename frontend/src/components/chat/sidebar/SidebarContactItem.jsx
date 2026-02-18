import React from 'react'

const SidebarContactItem = ({name, bio, isOnline}) => {
  return (
    <article className="select-none h-20 p-2 flex items-center gap-3 hover:bg-slate-700/40 cursor-pointer transition rounded-2xl">
      <div className={`avatar ${isOnline && 'online'}`}>
        <div className="w-12 h-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>

      
      <div className="overflow-hidden grow">
        <h2 className="text-xl font-bold text-slate-100">{name}</h2>
        <p className="truncate text-slate-300 italic">{bio}</p>
      </div>
    </article>
  )
}

export default SidebarContactItem