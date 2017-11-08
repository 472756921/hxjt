import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserIndex from '@/components/user/userIndex'
import Reservation from '@/components/user/reservation'
import UserInfo from '@/components/user/userInfo'
import buyHistor from '@/components/user/buyHistor'
import reservationList from '@/components/user/reservationList'
import Physiological from '@/components/user/physiological'
import report from '@/components/user/report'
import UserHeadUplode from '@/components/user/userHeadUplode'
import buyService from '@/components/user/buyService'
import question_u from '@/components/user/question'
import question_List from '@/components/user/question_List'
import questionDatile from '@/components/user/questionDatile'

import AdminIndex from '@/components/admin/adminIndex'
import AdminLogin from '@/components/admin/adminLogin'

import List from '@/components/admin/user/list'
import userDatile from '@/components/admin/user/userDatile'
import askList from '@/components/admin/user/askList'
import askDatile from '@/components/admin/user/askDatile'
import treatment from '@/components/admin/user/treatment'
import treatmentS from '@/components/admin/user/treatmentS'

import goodList from '@/components/admin/goods/goodList'
import orderList from '@/components/admin/goods/orderList'

//gl集团平台
import gl_team from '@/components/gl/user/gl_team'
import gl_reg from '@/components/gl/user/gl_reg'
import gl_userInfo from '@/components/gl/user/gl_userInfo'
import gl_recharge from '@/components/gl/user/gl_recharge'
import gl_buyHistor from '@/components/gl/user/gl_buyHistor'


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
    //团队
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
          path: 'list',
          name: 'list',
          component: List,
        },
        {
          path: 'userDatile',
          name: 'userDatile',
          component: userDatile,
        },
        {
          path: 'askList',
          name: 'askList',
          component: askList,
        },
        {
          path: 'askDatile',
          name: 'askDatile',
          component: askDatile,
        },
        {
          path: 'treatment',
          name: 'treatment',
          component: treatment,
        },
        {
          path: 'treatmentS',
          name: 'treatmentS',
          component: treatmentS,
        },
        {
          path: 'goodList',
          name: 'goodList',
          component: goodList,
        },
        {
          path: 'orderList',
          name: 'orderList',
          component: orderList,
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
          path: 'buyHistor',
          name: 'buyHistor',
          component: buyHistor,
        },
        {
          path: 'reservationList',
          name: 'reservationList',
          component: reservationList,
        },
        {
          path: 'physiological',
          name: 'physiological',
          component: Physiological,
        },
        {
          path: 'report/:id',
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
        {
          path: 'question_List',
          name: 'question_List',
          component: question_List,
        },
        {
          path: 'questionDatile/:id',
          name: 'questionDatile',
          component: questionDatile,
        },
      ],
    },
    //集团
    {
      path:'/gl_team',
      name: 'gl_team',
      component: gl_team,
    },
    {
      path:'/gl_reg',
      name: 'gl_reg',
      component: gl_reg,
    },
    {
      path:'/gl_userInfo',
      name: 'gl_userInfo',
      component: gl_userInfo,
    },
    //{
    //  path:'/gl_recharge',
    //  name: 'gl_recharge',
    //  component: gl_recharge,
    //},
  ]
})
