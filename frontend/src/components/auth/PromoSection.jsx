import React from 'react'

const PromoSection = ({img, txt, badges}) => {
  return (
    <aside className='flex flex-col justify-center items-center w-full'>
      <figure>
        <img src={img} alt="" />
      </figure>

      <section className='flex flex-col gap-2'>
        <h2 className='font-extrabold text-blue-300'>{txt}</h2>
        <div className='flex justify-center gap-3 w-full'>
          {badges.map(badge => <span key={badge} className='badge badge-outline badge-info'>{badge}</span>)}
        </div>
      </section>
    </aside>
  )
}

export default PromoSection