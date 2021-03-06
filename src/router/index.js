import Vue from 'vue'
import VueRouter from 'vue-router'
// import LatestMovie from '@/components/LatestMovie'
// import Movie from '@/components/Movie'
// import SearchMovie from '@/components/SearchMovie'
import home from '@/components/home'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/movie/:id',
    //   name: 'Movie',
    //   props: true,
    //   component: Movie
    // },
    // {
    //   path: '/search/:name',
    //   name: 'SearchMovie',
    //   props: true,
    //   component: SearchMovie
    // }
  ],
  mode: 'history'
})
