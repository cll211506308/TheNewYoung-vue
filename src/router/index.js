import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import index from '@/components/index'
import foods from '@/components/foods'
import fit from '@/components/fit'
import friends from '@/components/friends'
import users from '@/components/users'
import youngLife from '@/components/youngLife'
import my404 from '@/components/my404'
import card from '@/components/card'
import allcard from '@/components/friends/allcard'
import likeuser from '@/components/friends/likeusercard'



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },


    {
      path: '/fit',
      name: 'fit',
      component: fit
    },


    //这个是young友圈路由
    {
      path: '/friends',
      name: 'friends',
      component: friends,
      children:[
        {
          path: '',
          name: 'allcard',
          component: allcard
        },
        {
          path: 'likeuser/:id',
          name: 'likeuser',
          component: likeuser
        },
      ]
    },


    //这个是单个帖子路由
    {
      path: '/card/:id',
      name: 'card',
      component: card,
    },


    {
      path: '/users',
      name: 'users',
      component: users
    },


    {
      path: '/foods',
      name: 'foods',
      component: foods
    },


    {
      path: '/youngLife',
      name: 'youngLife',
      component: youngLife
    },


    //这个在最后
    {
      path: '/*',
      name: 'my404',
      component: my404
    }
  ]
})
