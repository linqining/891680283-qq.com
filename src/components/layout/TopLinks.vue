<template>
    <div class="top-links-container">
        <div class="top-links">
            <div class="login-block" v-if="showLogin()">
                    <span class="">
                        欢迎来到美客达商贸
                    </span>
                <span class="login-left">
                        <router-link to="/login">亲，请登录</router-link>
                    </span>
                /
                <span class="login-right">
                        <router-link to="/register">免费注册</router-link>
                    </span>
            </div>
            <div  v-else class="login-block">
                    <span class="login-left">
                        欢迎来到美客达商贸
                    </span>
                <span class="login-right">
                        <router-link :to="{name: 'UserOrder'}">我的订单</router-link>
                    </span >
            </div>
            <div class="order-block">
                <span class="shopping-cart"  slot="reference" >
                        <img :src="favourite">
                        <span>收藏</span>
                </span>
                <el-popover
                        placement="bottom-end"
                        width="500"
                        trigger="click"
                >
                    <div >
                        <div class="cart-item-list">
                            <shopping-cart-item v-for="(item,index) in this.$store.state.cartItems" :key="index" :item="item"></shopping-cart-item>
                        </div>
                        <button class="shopping-link" @click="goToCart">去购物袋结算</button>
                        <!--                            <router-link class="shopping-link" to="/shopping-cart">去购物袋结算</router-link>-->
                    </div>
                    <span class="shopping-cart"  slot="reference" >
                            <img :src="cart">
                            <span>购物袋(<span class="cart-num">{{$store.state.cartItems.length}}</span>)</span>
                    </span>
                </el-popover>
            </div>
        </div>
    </div>
</template>
<script>
    import ShoppingCartItem from "../product/ShoppingCartItem"
    import cart from '@/assets/image/layout/cart.png'
    import favourite from '@/assets/image/layout/favourite.png'

    export default{
        name: 'TopLinks',
        data(){
            return{
                cart: cart,
                favourite: favourite
            }
        },
        props:{
            showMenu:{
                type:Boolean,
                default:true
            }
        },
        components:{
            ShoppingCartItem
        },
        methods:{
            showProductCat(){
                this.showCat = !this.showCat
            },
            goToCart(){
                this.visible = !this.visible
                if(this.$route.path!=='/shopping_cart'){
                    this.$router.push({path:'/shopping_cart',target:'_blank'})
                }
            },
            showLogin(){
                return  !this.$store.state.isLogin
            },
            hideCascader(){
                if(!this.mouseInCat){
                    this.showCat=false
                }
            },
        }

    }
</script>
<style lang="scss">
    .top-links-container{
        border-bottom: 1px solid #7e808040;
        background-color: #000000;
        /*height:30px;*/
    }
    .top-links{
        width: 1200px;
        padding: 5px 0px;
        text-align:left;
        margin:auto;
        position:relative;
        color: #ffffff;
        /*height:20px;*/
    }
    .login-block,.order-block{
        display:inline-block;
        font-size:14px;
        color: #ffffff;
        line-height: 30px;
    }
    .order-block{
        position:absolute;
        right: 50px;
    }
    .login-block a{
        color: #ffffff;
        text-decoration: none;
    }
    .login-left,.login-right{
        padding: 0px 10px;
    }
    .login-left{
    }

    .my-order,.shopping-cart{
        padding: 5px 20px;
    }
    .my-order a,.shopping-cart a{
        text-decoration: none;
        color: #ffffff;
    }
    .shopping-cart img{
        padding-right:5px;
        vertical-align: middle;
    }
    .shopping-link{
        text-decoration:none;
        width:100%;
        background-color: $theme-color;
        font-size:20px;
        color:white;
        border:none;
        margin-top:20px;
        height:40px;
    }
</style>
