<template>
    <div id="header">
        <div class="top-links-container">
            <div class="top-links">
                <div class="login-block" v-if="showLogin()">
                    <span class="">
                        欢迎来到瑞之铭商贸
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
                        欢迎来到瑞之铭商贸
                    </span>
                    <span class="login-right">
                        <router-link :to="{name: 'UserOrder'}">我的订单</router-link>
                    </span >
                </div>
                <div class="order-block" v-if="showOrder">


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
                            <span>购物车(<span class="cart-num">{{$store.state.cartItems.length}}</span>)</span>
                        </span>
                    </el-popover>
                </div>
            </div>
        </div>
        <slot></slot>

        <div class="header-home">
            <div class="bg-left">
            </div>
            <div class="bg-right">
            </div>
            <div class="header-bg-wrap">
                <img :src="logo">
                <div id="nav-menu" v-if="showMenu" >
                    <div class="nav-container">
                        <div class="links-wrapper">
                            <!--                            <a href="javascript:void(0)" @click="showProductCat"><span class="el-icon-s-fold"></span>所有产品-->
                            <!--                            </a>-->


                            <el-popover
                                    placement="bottom-start"
                                    :width="180"
                                    trigger="click"
                                    :visible-arrow="false"
                                    class="all-product"
                                    popper-class="popper-product"
                                    :offset="12"
                            >
                                <span>
                                        <el-cascader-panel v-show="true" :options="options" id="cascader-menu" :props="menuProps"
                                                           @change="handleChange" ></el-cascader-panel>
                                </span>
                                <span class="shopping-cart"  slot="reference" >
                                    <span class="el-icon-s-fold"></span>所有产品
                                </span>
                            </el-popover>

                            <router-link to="/">首页</router-link>
                            <router-link :to="{path:'/list',query:{categoryId: 95}}">灯具</router-link>
                            <router-link :to="{path:'/list',query:{categoryId: 10002}}">橱柜</router-link>
                            <router-link :to="{path:'/list',query:{categoryId: 10011}}">床上用品</router-link>
                            <router-link :to="{path:'/list',query:{categoryId: 23}}">家用电器</router-link>
                            <!--                            <el-cascader-panel v-show="showCat" :options="options" id="cascader-menu" :props="menuProps"-->
                            <!--                                               @change="handleChange" ></el-cascader-panel>-->

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
    import ShoppingCartItem from "../product/ShoppingCartItem"
    import {loginDo} from "@/api/api";


    import { mapMutations } from 'vuex'

    import {catList} from "@/api/api";

    export default {
        name: 'LayoutHeader',
        components:{
            ShoppingCartItem
        },
        data(){
            return{
                logo: logo,
                cart: cart,
                cartGoodsNum: 3,
                showCat: false,
                menuProps:{
                    lazy: true,
                    lazyLoad(node,resolve){
                        catList(node.level,parseInt(node.value),(result)=>{
                            if(result  && result.data.child){
                                const nodes = result.data.child.map(item=>(
                                    {value: item.id,label: item.categoryName,leaf: true}
                                ))
                                resolve(nodes)
                            }else{
                                const nodes = []
                                resolve(nodes)
                            }
                        })
                    }
                },
                options:[],
            }
        },
        methods:{
            handleChange(value){
                this.$store.state.productCategoryId = value[1]
                this.showCat = false
                if(this.$route.name==='ProductList' && this.$route.query.categoryId===value[1]){
                    console.log(value)
                }else{
                    this.$router.push({path:'/list',query:{categoryId: value[1]}})
                }
            },
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
            ...mapMutations(['setProductList'])
        },
        mounted(){
            catList(0,'',(result)=>{
                if(result){
                    this.options = result.data.map(item=>(
                        {value: item.id,label: item.categoryName}
                    ))
                }
            })
        },
        props:{
            showOrder:{
                type: Boolean,
                default: true,
            },
            showMenu:{
                type:Boolean,
                default:true
            }
        },
        created(){
            let _this = this;
            loginDo((res)=>{
                if(JSON.parse(res.target.response).errcode==='000003'){
                    _this.$router.push({name:'Login'})
                    _this.$store.state.isLogin = false
                }else{
                    _this.$store.state.isLogin = true
                }
            })
            if(localStorage['cartItems']){
                this.$store.state.cartItems = JSON.parse(localStorage['cartItems'])
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
        height:20px;
    }
    .login-block,.order-block{
        display:inline-block;
        font-size:12px;
        color: #7e8080;
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
        /*border-right: 1px solid #7e8080;*/
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
    .all-product{
        width:200px;
        color:white;
        padding: 15px 30px;
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
        background-size: cover;
        background-image:url("~@/assets/image/layout/headbg.png");
        background-repeat: no-repeat;
        background-position: 48% 0%;
        min-width:1200px;
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
    #cascader-menu{
        position:absolute;
        background-color: #253a43;
        border:solid 1px #5a6478;
        /*margin-top:55px;*/
        z-index:2;
    }
    .el-cascader-menu{
        /*border:none;*/
        /*color: #ffffff;*/
        border-right:solid 1px #5a6478;
    }
    .cart-item-list{
        /*height:auto;*/
        max-height: 400px;
        overflow-y:scroll;
    }

    .shopping-link{
        text-decoration:none;
        width:100%;
        background-color: #f7c85c;
        font-size:20px;
        color:white;
        border:none;
        margin-top:20px;
        height:40px;
    }
    .el-popover{
        padding: 0px;
    }


</style>
<style>
    .popper-product{
        padding: 0px;
        background: transparent;

    }
</style>
