import Vue from "vue";
import VueRouter from "vue-router";

const Home=()=>import('@/views/Home/Home');
const ShoppingCar=()=>import('@/views/ShoppingCar/ShoppingCar');
const Classify=()=>import('@/views/Classify/Classify');
const Profile=()=>import('@/views/Profile/Profile');
const Detail=()=>import('@/views/Detail/Detail');

Vue.use(VueRouter);

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta: {
            title:'首页'
        }
    },
    {
        path: '/classify',
        component:Classify,
        meta: {
            title:'分类'
        }
    },
    {
        path:'/shoppingCar',
        component:ShoppingCar,
        meta: {
            title:'购物车'
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta: {
            title:'我的'
        }
    },
    {
        path:'/detail',
        component:Detail
    }
];

const router=new VueRouter({
    routes,
    mode:'history',
    base:'/mall/'
});
//使用导航守卫网页出现问题
// router.beforeEach((to, from, next) => {
// document.title=to.matched[0].meta.title;
// });
export  default router;