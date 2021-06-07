import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/doc',
  },
  {
    path: '/doc',
    name: 'doc',
    redirect: '/doc/same',
    component: () =>
      import(/* webpackChunkName: "doc" */ '~/views/doc/index.vue'),
    children: [
      {
        path: 'same',
        name: 'same',
        component: () =>
          import(
            /* webpackChunkName: "same" */ '~/views/doc/children/same/index.vue'
          ),
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "test" */ '~/views/test/index.vue'),
  },
]

/**
 * @description 获取任意路由进行二次加工
 * @param {string} name
 * @return {*}  {(RouteRecordRaw | undefined)}
 */
// const getArbitraryRoute = (name: string): RouteRecordRaw | undefined =>
//   routes.find((item) => item.name === name)

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes,
})

export default router
