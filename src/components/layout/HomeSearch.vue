<template>
    <div class="search-block">
        <div class='search-container'>
            <div>
                <div class="search-wrapper">
                    <input class="search-input" v-model="typeword">
                    <el-button class="btn-custom" @click="search"><span class="el-icon-search"> </span></el-button>
                    <el-button class="btn-custom" >
                        <router-link class="shopping-cart" :to="{path:'/shopping_cart',target:'_blank'}">
                            <span class="el-icon-shopping-cart-2"></span>购物车(<span class="cart-num">{{$store.state.cartItems.length}}</span>)
                        </router-link>
                    </el-button>
                </div>
            </div>
            <div class="fast-search-wrapper">
                <span> 热门搜索：</span>
                <ul class="fast-search">
                    <li v-for="(value,index) in searchItems" :key="index" @click="setItem(index)">{{value[1]}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {fetchProductList} from "@/api/api";
    import { mapMutations } from 'vuex'

    export default{
        name:'HomeSearch',
        data(){
            return{
                keyword:'',
                searchItems:[ [96, '吸顶灯'],[10002, '橱柜定制'],[96,'现代简约'],[10011, '罗莱家纺']],
                typeword:'',
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
            setItem(index){
                this.typeword=''
                this.keyword = this.searchItems[index][1];
                this.$router.push({path:'/list',query:{categoryId: this.searchItems[index][0],search: this.keyword}})
            },
            ...mapMutations(['setProductList'])

        }
    }
</script>

<style scoped>
    .search-block{
        padding: 30px 0;
    }
    .search-container{
        width:1200px;
        margin:auto;
        text-align:right;
    }
    .search-wrapper{
        /*right:0px;*/
        display:inline-block;
        /*border: 3px solid #7C9AB4;*/
        position: relative;
        width:600px;
        text-align: left;
    }
    .el-icon-search{
        font-size: 20px;
    }
    .search-input,.btn-custom{
        border-radius:0px;
        height: 30px;
        display:inline-block;
        vertical-align:top;
    }
    .search-input{
        border-radius: 0px;
        border: 0px;
        padding: 0px;
        width: 300px;
        border: 3px solid #333333;
    }

    .btn-custom{
        background-color: #333333;
        color:white;
        /*width:100px;*/
        height: 36px;
        margin-right:50px;
        padding: 2px 8px;
    }
    .el-button,.el-input__inner{
        border: 0px solid #DCDFE6;
    }
    .el-input__inner{
        height:44px;
        border-radius: 0px;
    }
    .fast-search{
        display: inline-flex;
        width:500px;
    }
    .fast-search li{
        list-style:  none;
        padding: 0 6px;
        font-size: 12px;
    }
    /*.fast-search li+li{*/
    /*    border-left: 1px solid #7e8080;*/

    /*}*/
    .fast-search-wrapper{
        color: #7e8080;
        font-size:12px;
    }
    .shopping-cart{
        text-decoration: none;
        color: #7e8080;
        width:100px;
        height: 45px;
        background-color: #333333;
        font-size: 20px;
        color:white;
    }
    .el-button .cart-num{
        margin: 0;
    }

</style>
