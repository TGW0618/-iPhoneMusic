import { defineStore } from "pinia";


export const useUserDataCS = defineStore('userCS', {
    state: () => {
        return {
            token : '',
        }
    },
    getters: {

    },
    actions: {
        login(){
            this.token= 'bear 567878d45fd578675f34d5e7r564465' 
            localStorage.setItem('token')
        },
        outlogin(){
            this.token = ''
            localStorage.removeItem('token')
        }
    },
    persist: {
        enabled: true,
        strategies: [
          {
            key: 'token',
            storage: localStorage,
          }
        ]
      }
})