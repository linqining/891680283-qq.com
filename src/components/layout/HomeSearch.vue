<template>
    <div class="search-block">
        <div class='search-container'>
            <div class="menu-wrapper">
                <div class="menu-list">
                    <router-link to="/">首页</router-link>
                    <router-link v-for="(item,index) in searchItems" :key="index" :to="{path:'/list',query:{categoryId: item[0]}}">{{item[1]}}</router-link>
                </div>
            </div>
            <div class="search-wrapper">
                    <input class="search-input" v-model="typeword">
                    <el-button class="btn-custom" @click="search">
                        <img :src="searchImg">
                    </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {fetchProductList} from "@/api/api";
    import { mapMutations } from 'vuex'
    import search from '@/assets/image/layout/search.png'

    export default{
        name:'HomeSearch',
        data(){
            return{
                keyword:'',
                searchItems:[[19,'墨镜'],[64,'眼镜'],[771,'雨伞'],[33,'个人护理'],[3001,'毛织品']],
                typeword:'',
                searchImg: search,
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
        padding: 14px 0;
        background-color: #ffffff;
    }
    .search-container{
        width:1200px;
        margin:auto;
        height: 30px;
    }
    .search-wrapper{
        height:30px;
    }

    .btn-custom{

    }



    .menu-wrapper,.search-wrapper{
        display: inline-block;
    }

    .menu-list{
        display: flex;
    }
    .menu-list a{
        flex:1;
        text-decoration: none;
        color:RGBA(64, 62, 63, 1);
    }
    .menu-wrapper{
        width:60%;
    }
    .search-wrapper{
        /*width:40%;*/
        border-bottom:1px solid black;
        float:right;
    }
    .search-input{
        border:none;
        text-indent: 10px;
        height:28px;
        /*border-bottom:1px solid black;*/
    }
    .btn-custom{
        padding: 2px;
        border: none;
        /*border-bottom: 1px solid black;*/
        border-radius: 0;
        vertical-align: middle;
    }

</style>
