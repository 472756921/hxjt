import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Reg from '@/components/public/reg'
import AG from '@/components/public/ag'
import fuxie from '@/components/public/fuxie'
import UserIndex from '@/components/user/userIndex'
import UpdataLive from '@/components/user/updataLive'
import Reservation from '@/components/user/reservation'
import ASK from '@/components/user/ask'
import DocInfo from '@/components/doc/docInfo'
import Question from '@/components/question/question'
import UserQuestionList from '@/components/question/userQuestionList'
import UserInfo from '@/components/user/userInfo'
import ReservationStatus from '@/components/user/reservationStatus'
import Contact from '@/components/user/contact'
import NewContact from '@/components/user/newContact'
import Physiological from '@/components/user/physiological'
import Pneumonia from '@/components/user/pneumonia'
import PneumoniaStatus from '@/components/user/pneumoniaStatus'
import UserHeadUplode from '@/components/user/userHeadUplode'
import FamousDoctorStudio from '@/components/user/famousDoctorStudio'
import buyService from '@/components/user/buyService'
import question_u from '@/components/user/question'

import AdminIndex from '@/components/admin/adminIndex'
import AdminLogin from '@/components/admin/adminLogin'
import DocIndex from '@/components/doc/docIndex'
import Chart from '@/components/doc/chart'

import Treatment from '@/components/admin/reservation/treatment'
import TreatmentS from '@/components/admin/reservation/treatmentS'
import TreatmentF from '@/components/admin/reservation/treatmentF'
import AskF from '@/components/admin/ask/askF'
import AskS from '@/components/admin/ask/askS'
import Injection from '@/components/admin/pneumonia/injection'
import InjectionD from '@/components/admin/pneumonia/injectionD'
import InjectionC from '@/components/admin/pneumonia/injectionC'
import InjectionB from '@/components/admin/pneumonia/injectionB'
import InjectionO from '@/components/admin/pneumonia/injectionO'
import AdminUserList from '@/components/admin/adminUser/adminUserList'
import AddAdmin from '@/components/admin/adminUser/addAdmin'
import List from '@/components/admin/user/list'
import ItemClass from '@/components/admin/reservation/itemClass'
import DocClass from '@/components/admin/ask/docClass'

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
      path: '/public/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/public/ag',
      name: 'ag',
      component: AG,
    },
    {
      path: '/public/fuxie',
      name: 'fuxie',
      component: fuxie,
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
          path: 'docIndex',
          name: 'docIndex',
          component: DocIndex,
        },
        {
          path: 'chart',
          name: 'chart',
          component: Chart,
        },
        {
          path: 'treatment',
          name: 'treatment',
          component: Treatment,
        },
        {
          path: 'treatmentS',
          name: 'treatmentS',
          component: TreatmentS,
        },
        {
          path: 'treatmentF',
          name: 'treatmentF',
          component: TreatmentF,
        },
        {
          path: 'askF',
          name: 'askF',
          component: AskF,
        },
        {
          path: 'askS',
          name: 'askS',
          component: AskS,
        },
        {
          path: 'injection',
          name: 'injection',
          component: Injection,
        },
        {
          path: 'injectionB',
          name: 'injectionB',
          component: InjectionB,
        },
        {
          path: 'injectionC',
          name: 'injectionC',
          component: InjectionC,
        },
        {
          path: 'injectionD',
          name: 'injectionD',
          component: InjectionD,
        },
        {
          path: 'injectionO',
          name: 'injectionO',
          component: InjectionO,
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
        {
          path: 'docClass',
          name: 'docClass',
          component: DocClass,
        },
      ],
    },
    {
      path: '/user',
      name: 'userIndex',
      component: UserIndex,
      children: [
        {
          path: 'updataLive',
          name: 'updataLive',
          component: UpdataLive,
        },
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
        },
        {
          path: 'ask',
          name: 'ask',
          component: ASK,
        },
        {
          path: 'question',
          name: 'question',
          component: Question,
        },
        {
          path: 'docInfo',
          name: 'docInfo',
          component: DocInfo,
        },
        {
          path: 'userQuestionList',
          name: 'userQuestionList',
          component: UserQuestionList,
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
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
        {
          path: 'newContact',
          name: 'newContact',
          component: NewContact,
        },
        {
          path: 'physiological',
          name: 'physiological',
          component: Physiological,
        },
        {
          path: 'pneumonia',
          name: 'pneumonia',
          component: Pneumonia,
        },
        {
          path: 'pneumoniaStatus',
          name: 'pneumoniaStatus',
          component: PneumoniaStatus,
        },
        {
          path: 'userHeadUplode',
          name: 'userHeadUplode',
          component: UserHeadUplode,
        },
        {
          path: 'famousDoctorStudio',
          name: 'famousDoctorStudio',
          component: FamousDoctorStudio,
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
