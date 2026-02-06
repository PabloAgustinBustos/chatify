import React from 'react'

const Filter = () => {
  return (
    <section className='flex flex-col gap-5 justify-evenly bg-blue-300 bg-opacity-0'>
      <input className='input input-sm bg-slate-700 text-slate-100 border' type="text" />
      <nav className='tabs tabs-bordered'>
        <input type='radio' className='tab' name='tab' aria-label='chats' defaultChecked/>
        <input type='radio' className='tab' name='tab' aria-label='users'/>
      </nav>
    </section>
  )
}

export default Filter