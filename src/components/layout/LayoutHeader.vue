<template>
    <div id="header">
        <div class="top-links-container">
            <div class="top-links">
                <div class="login-block">
                <span class="login-left">
                    <router-link to="/login">亲，请登录</router-link>
                </span>
                    <span class="login-right">
                    <router-link to="/register">免费注册</router-link>
                </span>
                </div>
                <div class="order-block">
                <span class="my-order">
                    <router-link to="/orders">我的订单</router-link>
                </span>
                    <span class="shopping-cart">
                    <img :src="cart">
                    <router-link to="/shopping_cart">购物车(<span class="cart-num">0</span>)</router-link>
                </span>
                </div>
            </div>
        </div>
        <slot></slot>


<!--        <div class="header-container">-->
<!--            <div class="header-left">-->
<!--                <router-link to="/login">登录</router-link>-->
<!--                <router-link to="/register">注册</router-link>-->
<!--                <router-link to="/favourite">收藏icon</router-link>-->
<!--            </div>-->
<!--            <div class="header-center">-->
<!--                <div class="header-logo">-->
<!--                    <img :src="logo">-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="header-right">-->
<!--                <img id="shopping-bag" :src="logo">-->
<!--                <router-link to="/favourite">购物袋(<span class="cart-num">{{cartGoodsNum}}</span>)</router-link>-->
<!--            </div>-->
<!--        </div>-->
        <div class="header-home">
            <div class="bg-left">
            </div>
            <div class="bg-right">
            </div>
            <div class="header-bg-wrap">
                <img :src="logo">
                    <div id="nav-menu">
                        <div class="nav-container">
                            <div class="links-wrapper">
                                <router-link to="/"><span class="el-icon-s-fold"></span>所有产品</router-link>
                                <router-link to="/">首页</router-link>
                                <router-link to="/">音箱</router-link>
                                <router-link to="/">游戏机</router-link>
                                <router-link to="/">平板电脑</router-link>
                                <router-link to="/">电子手表</router-link>
                                <router-link to="/">更多</router-link>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

    </div>
</template>
<script>
    import logo from '@/assets/image/layout/logo.png'
    import cart from '@/assets/image/layout/cart.png'
    export default {
        name: 'LayoutHeader',
        data(){
            return{
                logo: logo,
                cart: cart,
                cartGoodsNum: 3,
                activeIndex2:'',
            }
        },
        methods:{
            handleSelect(){

            }
        }
    }
</script>
<style scoped>
    .top-links-container{
        border-bottom: 1px solid #7e808040;
    }
    .top-links{
        width: 1200px;
        padding: 5px 0px;
        text-align:left;
        margin:auto;
        position:relative;
        color: #7e8080;
    }
    .login-block,.order-block{
        display:inline-block;
        font-size:12px;
    }
    .order-block{
        position:absolute;
        right: 50px;
    }
    .login-block a{
        color: #7e8080;
        text-decoration: none;
    }
    .login-left,.login-right{
        padding: 0px 10px;
    }
    .login-left{
        border-right: 1px solid #7e8080;
    }

    .my-order,.shopping-cart{
        padding: 5px 20px;
    }
    .my-order a,.shopping-cart a{
        text-decoration: none;
        color: #7e8080;
    }
    .shopping-cart img{
        padding-right:5px;
    }

    .header-container{
        width:1200px;
        margin:auto;
        padding: 30px 0;
        height: 60px;
    }
    .header-left,.header-center,.header-right{
        display:inline-block;
    }
    .header-left{
        float:left;
    }
    .header-right{
        float: right;
    }
    .header-right a{
        text-decoration: none;
        color: black;
    }
    .header-left a{
        padding: 0 10px;
        text-decoration: none;
        color:black;
    }
    .header-left a+a{
        border-left: 1px solid black;
    }
    .cart-num{
        /*color: deeppink;*/
        color: #f7c85c
    }

    #nav-menu{
        position:absolute;
        bottom: 0px;
        display:flex;
    }
    .nav-container{
        width:1200px;
        margin:auto;
        text-align: left;
    }
    .links-wrapper{
        /*display: inline-block;*/
        display:flex;
    }
    .links-wrapper a{
        text-decoration: none;
        color: white;
        padding: 15px 30px;
        display:inline-block;
        flex:1;
    }
    .search-box{
        float: right;
        color: white;
        padding: 15px 0;
    }
    .header-home{
        height: 150px;
        /*background-image: linear-gradient(#1d303a,#294048);*/
    }
    .bg-left,.bg-right{
        height:150px;
        width:calc(50% - 600px);
    }
    .bg-left{
        float:left;
        background-image: linear-gradient(#1d303a,#294048);
    }
    .bg-right{
        float:right;
        background-image: linear-gradient(#1f333c,#2d464c);
    }
    .header-bg-wrap{
        background-image:url("~@/assets/image/layout/headbg.png");
        background-position: 48% 0%;
        width:1200px;
        margin:auto;
        height: 150px;
        text-align:left;
        position:relative;
    }
    .header-bg-wrap img{
        padding-left: 29px;
        padding-top: 21px;
    }
</style>
