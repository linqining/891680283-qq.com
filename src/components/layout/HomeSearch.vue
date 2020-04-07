<template>
    <div class="search-block">
        <div class='search-container'>
            <div>
                <div class="search-wrapper">
                    <input class="search-input" v-model="typeword">
                    <el-button class="btn-custom" @click="search">搜索</el-button>
                </div>
            </div>
            <div>
                <ul class="fast-search">
                    <li v-for="(value,key) in searchItems" :key="key" @click="setItem(key)">{{value}}</li>
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
                searchItems:{97: '吊灯',10012: '白鸭绒被被芯',10004:'穿衣镜',10013: '枕头枕芯',26: '洗衣机'},
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
            setItem(categoryId){
                this.typeword=''
                this.keyword = this.searchItems[categoryId];
                this.$router.push({path:'/list',query:{categoryId: categoryId,search: this.keyword}})
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
        right:0px;
        display:inline-block;
        border: 3px solid #f7c85c;
        position: relative;
        width:600px
    }
    .search-input,.btn-custom{
        border-radius:0px;
        height: 44px;
        display:inline-block;
    }
    .search-input{
        border-radius: 0px;
        border: 0px;
        padding: 0px;
        width: 500px;
    }

    .btn-custom{
        background-color: #f7c85c;
        color:white;
        width:100px;
        height:45px;
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
