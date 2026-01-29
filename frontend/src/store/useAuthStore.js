import { create } from 'zustand'

const useAuthStore = create(set => ({
  user: {
    _id: 123,
    name: 'john',
    age: 25
  },

  isLoggedIn: 0,

  login: () => set(1)
}))

export default useAuthStore