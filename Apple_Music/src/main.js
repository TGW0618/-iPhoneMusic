import { createApp } from 'vue'
import './style.css'
import router from '/src/router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import piniaPluginPersist from 'pinia-plugin-persist'
import './mock/mockData.js'


// 导入全局组件开始
import MusicCarousel from "../src/components//Home/PublicComponents/MusicCarousel.vue";
import MusicBoxListOne from "../src/components//Home/PublicComponents/MusicBoxListOne.vue";
import MusicBoxListOneLongRe from "../src/components//Home/PublicComponents/MusicBoxListOneLongRe.vue";
import MusicSongList from './components/Home/PublicComponents/MusicSongList.vue'
import MusicExplore from "../src/components//Home/PublicComponents/MusicExplore.vue";
// 导入全局组件结束


import App from './App.vue'



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersist)
app.use(router)
app.use(ElementPlus)


// 使用全局组件开始
app.component("MusicCarousel",MusicCarousel)
app.component("MusicBoxListOne",MusicBoxListOne)
app.component("MusicBoxListOneLongRe",MusicBoxListOneLongRe)
app.component("MusicSongList",MusicSongList)
app.component("MusicExplore",MusicExplore)
// 导入全局组件结束
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }