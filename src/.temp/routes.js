export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "D:\\pro\\gridsome-site\\src\\pages\\Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "D:\\pro\\gridsome-site\\src\\pages\\About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "D:\\pro\\gridsome-site\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "blogPost",
    path: "/:slug",
    component: () => import(/* webpackChunkName: "component--blog-post" */ "D:\\pro\\gridsome-site\\src\\templates\\BlogPost.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "D:\\pro\\gridsome-site\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

