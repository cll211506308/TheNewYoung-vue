import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import index from '@/components/index'
import login from '@/components/login'
import setUp from '@/components/setUp'
import search from '@/components/search'
import fit from '@/components/fit'
import foods from '@/components/foods'
import youngLife from '@/components/youngLife'
import friends from '@/components/friends'
import users from '@/components/users'
import my404 from '@/components/my404'
import card from '@/components/card'
import allcard from '@/components/friends/allcard'
import likeuser from '@/components/friends/likeusercard'
import artical from '@/components/artical'
import allFit from '@/components/fit/allFit'
import allFoods from '@/components/foods/allFoods'
import allYoungLife from '@/components/youngLife/allYoungLife'
import alldatas from '@/components/users/alldatas'
import userhome from '@/components/users/userhome'
import usersarticals from '@/components/users/usersarticals'
import userscards from '@/components/users/userscards'
import usercollections from '@/components/users/usercollections'
import userbodydata from '@/components/users/userbodydata'
import useridentity from '@/components/users/useridentity'
import someFit1 from '@/components/fit/someFit1'
import someFit2 from '@/components/fit/someFit2'
import someFit3 from '@/components/fit/someFit3'
import someFit4 from '@/components/fit/someFit4'
import someFit5 from '@/components/fit/someFit5'
import someFoods1 from '@/components/foods/someFoods1'
import someFoods2 from '@/components/foods/someFoods2'
import someFoods3 from '@/components/foods/someFoods3'
import someFoods4 from '@/components/foods/someFoods4'
import someFoods5 from '@/components/foods/someFoods5'
import someYoungLife1 from '@/components/youngLife/someYoungLife1'
import someYoungLife2 from '@/components/youngLife/someYoungLife2'
import someYoungLife3 from '@/components/youngLife/someYoungLife3'
import someYoungLife4 from '@/components/youngLife/someYoungLife4'
import someYoungLife5 from '@/components/youngLife/someYoungLife5'

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
      path: '/fit',
      component: fit,
      children: [
        {
          path: '',
          name: 'allFit',
          component: allFit
        },
        {
          path: 'someFit1',
          name: 'someFit1',
          component: someFit1
        },
        {
          path: 'someFit2',
          name: 'someFit2',
          component: someFit2
        },
        {
          path: 'someFit3',
          name: 'someFit3',
          component: someFit3
        },
        {
          path: 'someFit4',
          name: 'someFit4',
          component: someFit4
        },
        {
          path: 'someFit5',
          name: 'someFit5',
          component: someFit5
        }
      ]
    },
    {
      path: '/foods',
      component: foods,
      children: [
        {
          path: '',
          name: 'allFoods',
          component: allFoods
        },
        {
          path: 'someFoods1',
          name: 'someFoods1',
          component: someFoods1
        },
        {
          path: 'someFoods2',
          name: 'someFoods2',
          component: someFoods2
        },
        {
          path: 'someFoods3',
          name: 'someFoods3',
          component: someFoods3
        },
        {
          path: 'someFoods4',
          name: 'someFoods4',
          component: someFoods4
        },
        {
          path: 'someFoods5',
          name: 'someFoods5',
          component: someFoods5
        }
      ]
    },
    {
      path: '/youngLife',
      component: youngLife,
      children: [
        {
          path: '',
          name: 'allYoungLife',
          component: allYoungLife
        },
        {
          path: 'someYoungLife1',
          name: 'someYoungLife1',
          component: someYoungLife1
        },
        {
          path: 'someYoungLife2',
          name: 'someYoungLife2',
          component: someYoungLife2
        },
        {
          path: 'someYoungLife3',
          name: 'someYoungLife3',
          component: someYoungLife3
        },
        {
          path: 'someYoungLife4',
          name: 'someYoungLife4',
          component: someYoungLife4
        },
        {
          path: 'someYoungLife5',
          name: 'someYoungLife5',
          component: someYoungLife5
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
    },
  ]
})
