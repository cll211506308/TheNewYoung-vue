import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import index from '@/components/index'
import login from '@/components/login'
import setUp from '@/components/setUp'
import search from '@/components/search'
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
import userhome from '@/components/users/userhome'
import usersarticals from '@/components/users/usersarticals'
import userscards from '@/components/users/userscards'
import usercollections from '@/components/users/usercollections'
import userbodydata from '@/components/users/userbodydata'
import useridentity from '@/components/users/useridentity'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search/:keys',
      name: 'search',
      component: search
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
      component: fit,
      children: [
        {
          path: 'allFit',
          name: 'allFit',
          component: allFit
        },
        {
          path: 'someFit',
          name: 'someFit',
          component: someFit
        }
      ]
    },
    {
      path: '/friends',
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
      path: '/foods',
      component: foods,
      children: [
        {
          path: 'allFoods',
          name: 'allFoods',
          component: allFoods
        },
        {
          path: 'someFoods',
          name: 'someFoods',
          component: someFoods
        }
      ]
    },
    {
      path: '/youngLife',
      component: youngLife,
      children: [
        {
          path: 'allYoungLife',
          name: 'allYoungLife',
          component: allYoungLife
        },
        {
          path: 'someYoungLife',
          name: 'someYoungLife',
          component: someYoungLife
        }
      ]
    },
    // 个人中心界面
    {
      path: '/usershome',
      component: users,
      children: [
        {
          path: ':id',
          name: 'userhome',
          component: userhome,
        },
        {
          path: 'alldatas/:id',
          name: 'alldatas',
          component: alldatas,
        },

        {
          path: 'userscards/:id',
          name: 'userscards',
          component: userscards,
        },
        {
          path: 'usersarticals/:id',
          name: 'usersarticals',
          component: usersarticals,
        },
        {
          path: 'usercollection/:id',
          name: 'usercollection',
          component: usercollections,
        },
        {
          path: 'userbodydata/:id',
          name: 'userbodydata',
          component: userbodydata,
        },
        {
          path: 'useridentity/:id',
          name: 'useridentity',
          component: useridentity,
        }
      ]
    },


    {
      path: '/*',
      name: 'my404',
      component: my404
    }
  ]
})
