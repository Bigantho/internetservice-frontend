import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// ================================================================
import createPayment from '@/modules/payments/createPayment.vue'
import payments from '@/modules/payments/payments.vue'
import totalPayment from '@/modules/payments/totalPayment.vue'
import pendingPayment from '@/modules/payments/pendingPayment.vue'
// ================================================================
import plans from '@/modules/plans/plans.vue'
import createPlan from '@/modules/plans/createPlan.vue'
// ================================================================
import createCompany from '@/modules/companies/createCompany.vue'
import companies from '@/modules/companies/companies.vue'
// ================================================================
import createCreate from '@/modules/users/createUser.vue'
// ================================================================
import sales from '@/modules/sales/sales.vue'
import createSale from '@/modules/sales/salesTotal.vue'
// ================================================================
import users from '@/modules/users/users.vue'
import createUser from '@/modules/users/createUser.vue'
// ================================================================







import login from '@/views/login.vue'
import test from '@/views/test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      // component: () => import(''),
      component: payments,
      children:[
        {
          path: 'create',
          name: 'paymentCreate',
          component: createPayment
        },
        {
          path: 'total',
          name: 'paymentTotal',
          component: totalPayment
        },
        {
          path: 'pending',
          name: 'paymentPending',
          component: pendingPayment
        }
      ]
    },
    {
      path: '/plan',
      name: 'plan',
      // component: () => import(''),
      component: plans,
      children:[
        {
          path: 'create',
          name: 'planCreate',
          component: createPlan
        }
      ]
    },
    {
      path: '/company',
      name: 'company',
      // component: () => import(''),
      component: companies,
      children:[
        {
          path: 'create',
          name: 'companyCreate',
          component: createCompany
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      // component: () => import(''),
      component: users,
      children:[
        {
          path: 'create',
          name: 'userCreate',
          component: createUser
        }
      ]
    },
    {
      path: '/sale',
      name: 'sale',
      // component: () => import(''),
      component: sales,
      children:[
        {
          path: 'create',
          name: 'saleCreate',
          component: createSale
        }
      ]
    }
  ]
})

export default router
