<template>
    <div class="product-list">
        <product-item v-for="(item,index) in this.getProductList" :key="index"  :data="item" @click="showDetail(item.id)"></product-item>
        <div class="pager-block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="12"
                    prev-text="上一页"
                    next-text="下一页"
                    layout="  prev, pager, next, total,jumper,slot"
                    :total="this.$store.state.productTotal">
                <slot name="-"><button id="confirmJump" >确定</button></slot>
            </el-pagination>

        </div>
    </div>

</template>
<script>
    import { mapGetters} from 'vuex'
    import ProductItem from './item'
    import {fetchProductList} from "@/api/api";
    import { mapMutations } from 'vuex'

    export default{
        name: 'ProductList',
        computed: {
            ...mapGetters([
                'getProductList'
            ])
        },
        components:{
            ProductItem
        },
        watch:{
            $route:{
                handler(newVal,oldVal){
                    if(newVal.query.categoryId!==oldVal.query.categoryId){
                        this.$store.state.productCategoryId = newVal.query.categoryId
                        this.queryPage(1)
                    }
                },
                intermidate: true,
                deep:true
            }
        },
        data(){
            return{
                currentPage: 1,
            }
        },
        created(){
            this.$store.state.productCategoryId = this.$route.query.categoryId
            this.queryPage(1)
        },
        methods:{
            showDetail(productId){
                this.$router.push({name:'ProductDetail',params:{productId: productId}})
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.queryPage(val)
            },
            queryPage(pageNum){
                this.currentPage = pageNum
                let typeWord = this.$route.query.search || this.typeword
                // 这个商城的搜索很奇怪，如果关键采用categoryid搜索
                let baseParam = {pageNum:pageNum,pageSize:12,search: typeWord}
                if(typeWord){
                    baseParam.search = typeWord
                }else{
                    baseParam.categoryId = this.$store.state.productCategoryId
                }
                fetchProductList(baseParam,(result)=>{
                    this.setProductList(result.data)
                    this.$store.state.productTotal = result.total
                })
            },
            ...mapMutations(['setProductList'])
        }
    }
</script>
<style scoped>
    .product-list{
        width:1200px;
        margin:auto;
        text-align: left;
        background-color: white;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .pager-block{
        text-align: center;
    }
    #confirmJump{
        border:1px solid black;
        margin-left:15px;
    }
    .el-pagination /deep/  button.btn-next,.el-pagination /deep/  button.btn-prev{
        border:1px solid black;
    }
</style>
