import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/Home/Home')
const Category = () =>
    import ('../views/Category/Category')
const Shopcart = () =>
    import ('../views/Shuocart/Shopcart')
const Profile = () =>
    import ('../views/Profile/profile')

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home

        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/shopcart',
            component: Shopcart
        },
        {
            path: '/profile',
            component: Profile
        },

    ],
    mode: 'history'
})
export default router