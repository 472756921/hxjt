import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserIndex from '@/components/user/userIndex'
import Reservation from '@/components/user/reservation'
import UserInfo from '@/components/user/userInfo'
import ReservationStatus from '@/components/user/reservationStatus'
import Physiological from '@/components/user/physiological'
import report from '@/components/user/report'
import UserHeadUplode from '@/components/user/userHeadUplode'
import buyService from '@/components/user/buyService'
import question_u from '@/components/user/question'

import AdminIndex from '@/components/admin/adminIndex'
import AdminLogin from '@/components/admin/adminLogin'

import AdminUserList from '@/components/admin/adminUser/adminUserList'
import AddAdmin from '@/components/admin/adminUser/addAdmin'
import List from '@/components/admin/user/list'
import ItemClass from '@/components/admin/reservation/itemClass'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'adminLogin',
      component: AdminLogin,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminIndex,
      children: [
        {
          path: 'allData',
          name: 'allData',
          component: AdminLogin,
        },
        {
          path: 'adminUserList',
          name: 'adminUserList',
          component: AdminUserList,
        },
        {
          path: 'addAdmin',
          name: 'addAdmin',
          component: AddAdmin,
        },
        {
          path: 'list',
          name: 'list',
          component: List,
        },
        {
          path: 'itemClass',
          name: 'itemClass',
          component: ItemClass,
        },
      ],
    },
    {
      path: '/user',
      name: 'userIndex',
      component: UserIndex,
      children: [
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo,
        },
        {
          path: 'reservationStatus',
          name: 'reservationStatus',
          component: ReservationStatus,
        },
        {
          path: 'physiological',
          name: 'physiological',
          component: Physiological,
        },
        {
          path: 'report',
          name: 'report',
          component: report,
        },
        {
          path: 'userHeadUplode',
          name: 'userHeadUplode',
          component: UserHeadUplode,
        },
        {
          path: 'buyService',
          name: 'buyService',
          component: buyService,
        },
        {
          path: 'question_u',
          name: 'question_u',
          component: question_u,
        },
      ],
    }
  ]
})
