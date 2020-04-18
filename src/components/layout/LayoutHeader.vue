<template>
    <div id="header">
        <slot name="top-links"></slot>
        <slot></slot>
        <router-link :to="{name:'Home'}">
            <div class="header-home">
                <div class="header-bg-wrap">
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
    import logo from '@/assets/image/layout/logo.png'
    import {loginDo} from "@/api/api";


    import { mapMutations } from 'vuex'

    import {catList} from "@/api/api";

    export default {
        name: 'LayoutHeader',
        components:{
        },
        data(){
            return{
                logo: logo,
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
                    // _this.$router.push({name:'Login'})
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
<style scoped lang="scss">
    #header{
        border-bottom: 1px solid #D5D2CD;
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
        color: $theme-color
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
        height: 170px;
        background-color: #ffffff;
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
        background-image:url("~@/assets/image/layout/logo.png");
        background-repeat: no-repeat;
        min-width:1200px;
        width:1200px;
        margin:auto;
        height: 150px;
        text-align:left;
        position:relative;
        background-position: center;
        background-size: auto;
    }
    .header-bg-wrap img{
        padding-left: 29px;
        padding-top: 21px;
    }
    #cascader-menu{
        position:absolute;
        background-color: #253a43;
        border:solid 1px #5a6478;
        z-index:2;
    }
    .el-cascader-menu{
        border-right:solid 1px #5a6478;
    }
    .cart-item-list{
        max-height: 400px;
        overflow-y:scroll;
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
