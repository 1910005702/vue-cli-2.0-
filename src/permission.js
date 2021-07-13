import router from './router'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
// 可访问的白名单
// 路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})
router.afterEach(() => {
  NProgress.done()
})
