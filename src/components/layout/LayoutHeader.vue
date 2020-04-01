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
        <div class="header-container">
            <div class="header-left">
                <router-link to="/login">登录</router-link>
                <router-link to="/register">注册</router-link>
                <router-link to="/favourite">收藏icon</router-link>
            </div>
            <div class="header-center">
                <div class="header-logo">
                    <img :src="logo">
                </div>
            </div>
            <div class="header-right">
                <img id="shopping-bag" :src="logo">
                <router-link to="/favourite">购物袋(<span class="cart-num">{{cartGoodsNum}}</span>)</router-link>
            </div>
        </div>
        <div id="nav-menu">
            <div class="nav-container">
                <div class="links-wrapper">
                    <router-link to="/">首页</router-link>
                    <router-link to="/">首页</router-link>
                    <router-link to="/">首页</router-link>
                    <router-link to="/">首页</router-link>
                </div>
                <div class="search-box">
                    asdfasd
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
            }
        }
    }
</script>
<style scoped>
    .top-links-container{
        border-bottom: 1px solid #7e808040;
        /*box-shadow: 0px 1px 2px #7e8080;*/
    }
    .top-links{
        width: 800px;
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
        width:800px;
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
        background:black;
        /*height: 40px;*/
    }
    .nav-container{
        width:800px;
        margin:auto;
        text-align: left;
    }
    .links-wrapper{
        display: inline-block;
    }
    .links-wrapper a{
        text-decoration: none;
        color: white;
        padding: 15px 30px;
        display:inline-block;
    }
    .search-box{
        float: right;
        color: white;
        padding: 15px 0;
    }
</style>
