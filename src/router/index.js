import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes:[{
        path: '/',
        component:()=>import('@/components/layout/HomeLayout.vue'),
        children:[

        ]
    },{
        path:'/login',
        name: 'Login',
        component:()=>import('@/components/user_center/Login.vue')
    },{
        path:'/register',
        name: 'Register',
        component:()=>import('@/components/user_center/Register.vue')
    },{
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
    }

    ]
})
