import Vue from "vue"
import Router from "vue-router"
import ApiService from '@/services/api.service'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
			path: '/error404',
			component: () => import('./views/pages/Error404.vue'),
			meta: {
				public: true
			}
    },
    {
			path: '/',
			component: () => import('./views/landing/Landing.vue'),
			meta: {
				public: true
			}
		},
    {
      path: "",
      meta: {
        public: true
      },
      component: () => import("./layouts/Main.vue"),
      children: [
        {
          path: "/homex",
          component: () => import("./views/Home.vue")
        },
        {
          path: "/aboutx",
          component: () => import("./views/About.vue")
        }
      ]
    },
    {
			path: '*',
			redirect: '/error404'
		}
  ]
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!ApiService.getHeader()
  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: {
        redirect: to.fullPath
      } // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/main')
  }

  next();
})

export default router
