import Movie from '../../views/Movie/index.vue'
export default {
    path : '/movie',
    component : Movie,
	children:[
		{
			path:'city',
			component:()=>import('@/components/City')
		},
		{
			path:'comingsoon',
			component:()=>import('@/components/ComingSoon')
		},
		{
			path:'newpalying',
			component:()=>import('@/components/NewPlaying')
		},
		{
			path:'search',
			component:()=>import('@/components/Search')
		},
		{
			path:'/movie',
			redirect:'/movie/newpalying'
		}
	]
}