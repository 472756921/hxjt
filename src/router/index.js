import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserIndex from '@/components/user/userIndex'
import checkUser from '@/components/user/checkUser'
import xieyi from '@/components/user/xieyi'
import join from '@/components/user/join'
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
import reservationByPhone from '@/components/user/reservationByPhone'
import dataImg from '@/components/user/dataImg'

import AdminIndex from '@/components/admin/adminIndex'
import AdminLogin from '@/components/admin/adminLogin'

import List from '@/components/admin/user/list'
import userDatile from '@/components/admin/user/userDatile'
import askList from '@/components/admin/user/askList'
import askDatile from '@/components/admin/user/askDatile'
import treatment from '@/components/admin/user/treatment'
import treatmentS from '@/components/admin/user/treatmentS'
import treatmentPhone from '@/components/admin/user/treatmentPhone'
import xiaofei from '@/components/admin/user/xiaofei'
import treatmentSet from '@/components/admin/user/treatmentSet'

import goodList from '@/components/admin/goods/goodList'
import orderList from '@/components/admin/goods/orderList'

//gl集团平台
import gl_team from '@/components/gl/user/gl_team'
import gl_reg from '@/components/gl/user/gl_reg'
import gl_ag from '@/components/gl/user/gl_ag'
import gl_userInfo from '@/components/gl/user/gl_userInfo'
import gl_recharge from '@/components/gl/user/gl_recharge'
import gl_rechargeList from '@/components/gl/user/gl_rechargeList'
import gl_buyHistor from '@/components/gl/user/gl_buyHistor'
import gl_buy from '@/components/gl/user/gl_buy'

import gl_userList from '@/components/gl/admin/gl_userList'
import gl_goodList from '@/components/gl/admin/gl_goodList'
import gl_serviceList from '@/components/gl/admin/gl_serviceList'
import gl_goodsAdd from '@/components/gl/admin/gl_goodsAdd'
import gl_teamList from '@/components/gl/admin/gl_teamList'
import gl_teamDatile from '@/components/gl/admin/gl_teamDatile'
import gl_teamAdd from '@/components/gl/admin/gl_teamAdd'
import gl_orderList from '@/components/gl/admin/gl_orderList'
import gl_adminLogin from '@/components/gl/admin/gl_adminLogin'
import gl_rechargeAdmin from '@/components/gl/admin/gl_recharge'
import gl_xiaofei from '@/components/gl/admin/gl_xiaofei'

import noPage from '@/components/noPage'
import welcome from '@/components/welcome'
import AD from '@/components/AD'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/AD',
      name: 'AD',
      component: AD,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
    },
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
          path: 'treatmentPhone',
          name: 'treatmentPhone',
          component: treatmentPhone,
        },
        {
          path: 'xiaofei',
          name: 'xiaofei',
          component: xiaofei,
        },
        {
          path: 'treatmentSet',
          name: 'treatmentSet',
          component: treatmentSet,
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
        //集团后台
        {
          path: 'gl_userList',
          name: 'gl_userList',
          component: gl_userList,
        },
        {
          path: 'gl_goodList',
          name: 'gl_goodList',
          component: gl_goodList,
        },
        {
          path: 'gl_serviceList',
          name: 'gl_serviceList',
          component: gl_serviceList,
        },
        {
          path: 'gl_goodsAdd',
          name: 'gl_goodsAdd',
          component: gl_goodsAdd,
        },
        {
          path: 'gl_teamList',
          name: 'gl_teamList',
          component: gl_teamList,
        },
        {
          path: 'gl_teamDatile',
          name: 'gl_teamDatile',
          component: gl_teamDatile,
        },
        {
          path: 'gl_teamAdd',
          name: 'gl_teamAdd',
          component: gl_teamAdd,
        },
        {
          path: 'gl_orderList',
          name: 'gl_orderList',
          component: gl_orderList,
        },
        {
          path: '/gl_rechargeAdmin',
          name: 'gl_rechargeAdmin',
          component: gl_rechargeAdmin,
        },
        {
          path: '/gl_xiaofei',
          name: 'gl_xiaofei',
          component: gl_xiaofei,
        },
      ],
    },
    {
      path: '/user',
      name: 'userIndex',
      component: UserIndex,
      children: [
        {
          path: 'checkUser',
          name: 'checkUser',
          component: checkUser,
        },
        {
          path: '/xieyi',
          name: 'xieyi',
          component: xieyi,
        },
        {
          path: 'gl_ag',
          name: 'gl_ag',
          component: gl_ag,
        },
        {
          path: 'join',
          name: 'join',
          component: join,
        },
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
        },
        {
          path: 'userInfo/:flat',
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
        {
          path: 'reservationByPhone',
          name: 'reservationByPhone',
          component: reservationByPhone,
        },
        {
          path: 'dataImg',
          name: 'dataImg',
          component: dataImg,
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
    {
      path:'/gl_recharge',
      name: 'gl_recharge',
      component: gl_recharge,
    },
    {
      path:'/gl_rechargeList',
      name: 'gl_rechargeList',
      component: gl_rechargeList,
    },
    {
      path:'/gl_buyHistor',
      name: 'gl_buyHistor',
      component: gl_buyHistor,
    },
    {
      path:'/gl_buy',
      name: 'gl_buy',
      component: gl_buy,
    },
    {
      path: '/adminLogin',
      name: 'gl_adminLogin',
      component: gl_adminLogin,
    },
    {
      path: '/404',
      name: '404',
      component: noPage,
    },
  ]
})
