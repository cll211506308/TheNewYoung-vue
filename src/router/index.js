import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import foods from '@/components/foods'
import fit from '@/components/fit'
import friends from '@/components/friends'
import users from '@/components/users'
import youngLife from '@/components/youngLife'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/foods',
      name: 'foods',
      component: foods
    }
    ,
    {
      path: '/fit',
      name: 'fit',
      component: fit
    }
    ,
    {
      path: '/friends',
      name: 'friends',
      component: friends
    }
    ,
    {
      path: '/users',
      name: 'users',
      component: users
    }
    ,
    {
      path: '/youngLife',
      name: 'youngLife',
      component: youngLife
    }
  ]
})
