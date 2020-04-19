<template>
    <div class="search-block">
        <div class='search-container'>
            <div class="search-left">
                <router-link :to="{name: 'Home'}">
                    <img :src="logo">
                </router-link>
            </div>
            <div class="search-right" v-if="showSearch">
                <div>
                    <div class="search-wrapper">
                        <span class="search-before">
                            <span class="el-icon-search"></span>
                        </span>
                        <input class="search-input" v-model="typeword">
                        <el-button class="btn-custom" @click="search">
                            <span class="el-icon-search"></span>
                        </el-button>
                    </div>
                    <router-link :to="{path:'/shopping_cart',target:'_blank'}">
                        <el-button class="btn-custom cart-btn" @click="search">
                            <span class="cart-icon"><img :src="cart"></span>
                            购物车
                            <el-badge class="mark" :value="$store.state.cartItems.length" />
                        </el-button>
                    </router-link>
                </div>
                <div class="search-slogan">
                    <span>在这里找到你所有喜欢的好物</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {fetchProductList} from "@/api/api";
    import { mapMutations } from 'vuex'
    import logo from '@/assets/image/layout/logo.png'
    import cart from '@/assets/image/layout/cart.png'


    export default{
        name:'HomeSearch',
        data(){
            return{
                keyword:'',
                typeword:'',
                logo: logo,
                cart: cart,
            }
        },
        props:{
            showSearch:{
                type: Boolean,
                default: true
            }
        },
        components:{
        },
        methods:{
            search(){

                if(this.$route.name==='ProductList'){
                    fetchProductList({pageNum:1,pageSize:12,search: this.typeword},(result)=>{
                        this.setProductList(result.data)
                        this.$store.state.productTotal = result.total
                    })
                }else{
                    this.$router.push({path:'/list',query:{search: this.typeword}})
                }

            },
            ...mapMutations(['setProductList'])
        }
    }
</script>

<style scoped lang="scss">
    .search-block{
        padding: 30px 0;
        text-align:left;
        background-color: #ffffff;
    }
    .search-container{
        width:1200px;
        margin:auto;
        text-align:left;
    }
    .search-left,.search-right{
        display:inline-block;
        vertical-align: middle;
        text-align: left;
    }
    .search-left{
        margin-left: 29px;
        height: 72px;
    }
    .search-right{
        padding-left: 200px;
    }
    .search-slogan{
        color: $theme-color;
        padding: 5px 0 0 15px;
        font-size:14px;
    }
    .search-wrapper{
        right:0px;
        display:inline-block;
        border: 1px solid $theme-color;
        position: relative;
        width:347px;
        border-radius: 25px;
        text-align: right;
    }
    .search-before{
        width: 30px;
        height: 30px;
        font-size:18px;
        line-height: 30px;
        vertical-align:middle;
    }
    .search-before span{
        vertical-align: middle;
        color: gray;
        margin-top:13px;
    }
    .search-input,.btn-custom{
        height: 44px;
        display:inline-block;
        border-radius: 22px;
        font-size: 20px;
        padding: 0;
        vertical-align: top;
    }
    .search-input{
        border-radius: 0px;
        border: 0px;
        padding: 0px;
        width: 240px;
        outline: none;
    }

    .btn-custom{
        background-color: $theme-color;
        color:white;
        width:74px;
        /*height:30px;*/
    }
    .cart-btn{
        font-size:14px;
        background-color: transparent;
        border:1px solid $theme-color;
        color: $theme-color;
        margin-left: 50px;
        width: auto;
        padding: 0 15px;
    }
    .cart-icon{
        vertical-align: middle;
    }
    .el-button,.el-input__inner{
        border: 0px solid #DCDFE6;
    }
    .el-button.cart-btn{
        border:1px solid $theme-color;
    }

    .el-input__inner{
        height:44px;
        border-radius: 0px;
    }
    .fast-search{
        display: inline-flex;
        width:600px;
        color: #7e8080;
    }
    .fast-search li{
        list-style:  none;
        padding: 0 6px;
        font-size: 12px;
    }
    .fast-search li+li{
        border-left: 1px solid #7e8080;

    }

</style>
