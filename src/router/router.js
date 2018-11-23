import App from '../App'
const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const news = r => require.ensure([], () => r(require('../components/news')), 'news')
const newsDetail = r => require.ensure([], () => r(require('../components/newsDetail')), 'newsDetail')
const technical = r => require.ensure([], () => r(require('../components/technical')), 'technical')
const communication = r => require.ensure([], () => r(require('../components/communication')), 'communication')
const about = r => require.ensure([], () => r(require('../components/about')), 'about')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    meta: {title: '重庆数资区块链研究院'},
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/news',
            component: news
        },
        {
            path: '/news-detail/:type/:id',
            component: newsDetail
        },
        {
            path: '/technical',
            component: technical
        },
        {
            path: '/communication',
            component: communication
        },
        {
            path: '/about',
            component: about
        }
    ]}
]