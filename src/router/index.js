import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes:[{
        path: '/',
        component:()=>import('@/components/layout/HomeLayout.vue'),
        children:[
            {
                path:'/',
                name: 'Home',
                component:()=>import('@/components/Home.vue')
            }
        ]
    },{
        path: '/order',
        component:()=>import('@/components/layout/Layout.vue'),
        children:[
            {
                path:'/favourite',
                name: 'Favourite',
                component:()=>import('@/components/user_center/Favourite.vue')
            },{
                path:'/orders',
                name:'Orders',
                component:()=>import('@/components/order/Orders.vue')
            },{
                path:'/shopping_cart',
                name:'ShoppingCart',
                component:()=>import('@/components/order/ShoppingCart.vue')
            },{
                path:'purchase',
                name: 'Purchase',
                component:()=>import('@/components/order/Purchase.vue')
            }
        ]
    },
    {
        path:'/user',
        component:()=>import('@/components/layout/LoginLayout.vue'),
        children:[
            {
                path:'/login',
                name: 'Login',
                component:()=>import('@/components/user_center/Login.vue')
            },{
                path:'/register',
                name: 'Register',
                component:()=>import('@/components/user_center/Register.vue')
            },
        ]
    },{
        path:'/product',
        component:()=>import('@/components/layout/Layout.vue'),
        children:[
            {
                path:'/list',
                name: 'ProductList',
                component:()=>import('@/components/product/List.vue')
            },
            {
                path:'/detail',
                name: 'ProductDetail',
                component:()=>import('@/components/product/Detail.vue')
            }
        ]
    },
    ]
})
