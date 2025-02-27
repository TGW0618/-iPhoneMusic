import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/auth.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/Homepage',
      component: () => import('../components/Home.vue'),
      children: [
        {
          path: '/Homepage',
          name: 'Homepage',
          component: () => import('../components/Home/View/HomepageView.vue'),
          
        },
        {
          path: '/NewFind',
          name: 'NewFind',
          component: () => import('../components/Home/View/NewFindView.vue'),
          
        },
        {
          path: '/Radio',
          name: 'Radio',
          component: () => import('../components/Home/View/RadioView.vue'),
          
        },
        {
          path: '/RecentlyAddedView',
          name: 'RecentlyAddedView',
          component: () => import('../components/Home/View/RecentlyAddedView.vue'),
         meta: {
          requiresAuth: true,}
        },


        {
          path: '/AlbumView',
          name: 'AlbumView',
          component: () => import('../components/Home/View/AlbumView.vue'),
          meta: {
            requiresAuth: true,}
        },
        {
          path: '/SongView',
          name: 'SongView',
          component: () => import('../components/Home/View/SongView.vue'),
          meta: {
            requiresAuth: true,}
        },
        {
          path: '/AllLikeList',
          name: 'AllLikeList',
          component: () => import('../components/Home/View/AllLikeList.vue'),
          meta: {
            requiresAuth: true,}
        },
        {
          path: '/FavoriteSong',
          name: 'FavoriteSong',
          component: () => import('../components/Home/View/FavoriteSong.vue'),
          meta: {
            requiresAuth: true,}
        },
        {
          path: '/ManagementView',
          name: 'ManagementView',
          component: () => import('../components/Home/View/ManagementView.vue'),
          meta: {
            requiresAuth: true,}
        },
        {
          path: '/MusicBoxListSonView:id',
          name: 'MusicBoxListSonView',
          component: () => import('../components/Home/PublicComponentsSon/MusicBoxListSonView.vue'),
          props: true,

        },
        {
          path: '/SelectView',
          name: 'SelectView',
          component: () => import('../components/Home/View/SelectView.vue'),
          props: true,

        },
        {
          path: '/TypeView',
          name: 'TypeView',
          component: () => import('../components/Home/View/TypeView.vue'),
          props: true,

        },

                // ……其他页面路由……
      ],
    },
    {
      path: '/ZhuceView',
      name: 'ZhuceView',
      component: () => import('../components/Home/View/ZhuceView.vue'),

    },
  ],
});


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {

    next('/Homepage')
    alert('请先登录')
  }else {
    next()
  }
   
})

export default router;
