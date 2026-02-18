import React from 'react'

const Message = ({id, isMine, text, time, index}) => {
  const alignment = isMine ? 'chat-end' : 'chat-start'

  return (
    <div className={`chat ${alignment}`}>
      <div className={`chat-bubble ${isMine ? 'chat-bubble-primary' : 'bg-slate-700 text-slate-100'} mb-1 relative px-4 py-2 pr-12`}>
        <p className="leading-snug">{text}</p>

        <span className="absolute bottom-1 right-2 text-[11px] opacity-60">
          {time}
        </span>
      </div>

      {index === 15 && isMine && (
        <div className="chat-footer opacity-50">
          Seen
        </div>
      )}
    </div>
  )
}

export default Message