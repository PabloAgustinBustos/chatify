import { MessageCircleIcon } from 'lucide-react'
import React from 'react'

const FormHeader = ({ title, subtitle }) => {
  return (
    <header className='flex flex-col items-center gap-2'>
      <MessageCircleIcon className='w-12 h-12 text-slate-400'/>
      <h1 className='text-2xl font-bold text-slate-200'>{title}</h1>
      <p className='text-gray-300'>{subtitle}</p>
    </header>
  )
}

export default FormHeader