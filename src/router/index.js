import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie/index.js'
import cinemaRouter from './cinema/index.js'
import mineRouter from './mine/index.js'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes:[
	cinemaRouter,
	movieRouter,
	mineRouter,
	{
		path:'/*',
		redirect:'/movie'/* e配置当上面路由都匹配不到就找这个路由 */
	}
	]
})
