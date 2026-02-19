import React from 'react'

const index = () => {
  return (
    <main className='w-3/4 min-w-0 h-full flex'>
      <div>
        <h1 className='text-2xl font-bold'>Configuration</h1>
        
        <form action="">
          <fieldset className='fieldset'>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            
            <input type="file" className="file-input file-input-primary" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Visualized name</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
        </form>
      </div>
    </main>
  )
}

export default index