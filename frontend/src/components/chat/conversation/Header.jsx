import React from 'react'

const Header = () => {
  return (
    <header className='p-2 row-span-1 bg-sky-300 bg-opacity-0'>
      <div className='h-full flex items-center gap-5'>
        <img className="block h-full rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        <div>
          <h2 className='text-xl text-slate-100 font-bold'>Juan</h2>
          <span className='text-sm'>Online</span>
        </div>
      </div>
    </header>
  )
}

export default Header