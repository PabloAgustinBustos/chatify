import { create } from 'zustand'
import { BASE_URL } from '../config'
import toast from 'react-hot-toast'

const useAuthStore = create(set => ({
  authUser: null,

  isCheckingAuth: true,
  isSigningUp: false,
  isLogin: false,

  checkAuth: async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/check`, {
        credentials: 'include',
      })
      const authUser = await res.json()

      if (res.status !== 401 && res.status !== 400) set({ authUser })
    } catch (e) {
      console.log('Error checking user auth', e)
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signUp: async data => {
    set({ isSigningUp: true })

    console.log(data)

    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      const authUser = await res.json()

      if (res.status !== 400) {
        toast.success('Account created successfully')
        set({ authUser })
      } else {
        toast.error(authUser.message)
      }
    } catch (e) {
      toast.error('error signing up')
      console.log('Error signing up', e)
    } finally {
      set({ isSigningUp: false })
    }
  },

  login: async data => {
    set({ isLogin: true })

    console.log(data)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      const authUser = await res.json()

      if (res.status !== 400) {
        //toast.success('Account created successfully')
        set({ authUser })
      } else {
        toast.error(authUser.message)
      }
    } catch (e) {
      toast.error('error signing up')
      console.log('Error signing up', e)
    } finally {
      set({ isLogin: false })
    }
  }
}))

export default useAuthStore