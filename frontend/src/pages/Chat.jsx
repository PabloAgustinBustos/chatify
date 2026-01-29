import React from 'react'
import useAuthStore from '../store/useAuthStore'

const Chat = () => {
  const {isLoggedIn, login} = useAuthStore()

  console.log(isLoggedIn)

  return (
    <div>{isLoggedIn}</div>
  )
}

export default Chat