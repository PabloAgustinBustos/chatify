import React from 'react'

const FormSection = ({ children }) => {
  return (
    <section className='flex flex-col justify-evenly items-center w-full'>
      {children}
    </section>
  )
}

export default FormSection