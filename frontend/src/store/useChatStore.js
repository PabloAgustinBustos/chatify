import toast from "react-hot-toast";
import { create } from "zustand";
import { BASE_URL } from "../config";

const useChatStore = create((set, get) => ({
  contacts: [],
  chats: [],
  messages: [],
  activeTab: "chats",
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isSoundEnabled: localStorage.getItem("isSoundEnabled") === true,

  toggleSound: () => set(store => {
    localStorage.setItem("isSoundEnabled", !store.isSoundEnabled)

    return {
      isSoundEnabled: !store.isSoundEnabled
    }
  }),

  setActiveTab: newTab => set({ activeTab: newTab }),
  setSelectedUser: selectedUser => set({ selectedUser }),

  getAllContacts: async () => {
    set({ isUsersLoading: true })

    try {
      const res = await fetch(`${BASE_URL}/messages/contacts`)
      const data = await res.json()

      set({ allContacts: data })
    } catch(e) {
      console.log(e)
      toast.error("Error getting users")
    } finally {
      set({ isUsersLoading: false })
    }
  },

  getChats: async () => {
    set({ isUsersLoading: true })

    try {
      const res = await fetch(`${BASE_URL}/messages/chats`)
      const data = await res.json()

      set({ chats: data })
    } catch(e) {
      console.log(e)
      toast.error("Error getting chats")
    } finally {
      set({ isUsersLoading: false })
    }
  },
}))

export default useChatStore