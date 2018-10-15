import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import index from '@/components/index'
import login from '@/components/login'
import setUp from '@/components/setUp'
import foods from '@/components/foods'
import fit from '@/components/fit'
import friends from '@/components/friends'
import users from '@/components/users'
import youngLife from '@/components/youngLife'
import my404 from '@/components/my404'
import card from '@/components/card'
import allcard from '@/components/friends/allcard'
import likeuser from '@/components/friends/likeusercard'
import artical from '@/components/artical'
import allFit from '@/components/fit/allFit'
import someFit from '@/components/fit/someFit'
import allFoods from '@/components/foods/allFoods'
import someFoods from '@/components/foods/someFoods'
import allYoungLife from '@/components/youngLife/allYoungLife'
import someYoungLife from '@/components/youngLife/someYoungLife'
import alldatas from '@/components/users/alldatas'
import userbodydata from '@/components/users/userbodydata'
import usercollections from '@/components/users/usercollections'
import useridentity from '@/components/users/useridentity'
import userpublish from '@/components/users/userpublish'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/setUp',
      name: 'setUp',
      component: setUp
    },
    {
      path: '/fit',
      name: 'fit',
      component: fit,
      children: [
        {
          path: '',
          name: 'allFit',
          component: allFit
        },
        {
          path: 'someFit/:sort',
          name: 'someFit',
          component: someFit
        }
      ]
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends,
      children: [
        {
          path: '',
          name: 'allcard',
          component: allcard
        },
        {
          path: 'likeuser/:id',
          name: 'likeuser',
          component: likeuser
        }
      ]
    },
    {
      path: '/card/:id',
      name: 'card',
      component: card
    },
    {
      path: '/artical/:id',
      name: 'artical',
      component: artical
    },

    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/foods',
      name: 'foods',
      component: foods,
      children: [
        {
          path: '',
          name: 'allFoods',
          component: allFoods
        },
        {
          path: 'someFoods/:sort',
          name: 'someFoods',
          component: someFoods
        }
      ]
    },
    {
      path: '/youngLife',
      name: 'youngLife',
      component: youngLife,
      children: [
        {
          path: '',
          name: 'allYoungLife',
          component: allYoungLife
        },
        {
          path: 'someYoungLife/:sort',
          name: 'someYoungLife',
          component: someYoungLife
        }
      ]
    },
    // 个人中心界面
    {
      path: '/users',
      name: 'users',
      component: users,
      children: [
        {
          path: '',
          name: 'alldatas',
          component: alldatas
        },
        {
          path: 'userpublish/:id',
          name: 'userpublish',
          component:userpublish,
        },
        {
          path: 'usercollection/:id',
          name: 'usercollection',
          component:usercollections,
        },
        {
          path: 'userbodydata:',
          name: 'userbodydata',
          component:userbodydata,
        },
        {
          path: 'useridentity',
          name: 'useridentity',
          component:useridentity,
        },
      ]
    },

    {
      path: '/*',
      name: 'my404',
      component: my404
    }
  ]
})
