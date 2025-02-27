import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || null,
    UserPermission: ref(0),
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      console.log(this.user.permission);
      this.UserPermission = this.user.permission
    },
    clearAuth() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.UserPermission = 0
    },
  }
})

