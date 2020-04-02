<template>
    <div>
        <layout-header>
            <div class="search-block">
                <div class='search-container'>
                    <div>
                        <div class="search-wrapper">
                            <input class="search-input" v-model="keyword">
                            <el-button class="btn-custom" @click="search">搜索</el-button>
                        </div>
                    </div>
                    <div>
                        <ul class="fast-search">
                            <li v-for="item in searchItems" :key="item" @click="setItem(item)">{{item}}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </layout-header>
    </div>
</template>

<script>
    import LayoutHeader from "./LayoutHeader";
    export default{
        name:'LayoutHeaderWithSearch',
        data(){
            return{
                keyword:'',
                searchItems:['打印机','碎纸机','投影仪','复印机','扫描仪','U盘','移动硬盘']
            }
        },
        components:{
            LayoutHeader
        },
        methods:{
            search(){
                console.log(this.keyword);
            },
            setItem(item){
                this.keyword = item;
            }
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
