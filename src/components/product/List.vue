<template>
    <div class="product-list">
        <product-item v-for="(item,index) in this.getProductList" :key="index"  :data="item" @click="showDetail(item.id)"></product-item>

        <div class="pager-block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="20"
                    prev-text="上一页"
                    next-text="下一页"
                    layout="  prev, pager, next, total,jumper,slot"
                    :total="this.$store.state.productTotal">
                <slot name="-"><button id="confirmJump" @click="handleCurrentChange">确定</button></slot>
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
        data(){
            return{
                currentPage: 1,
            }
        },
        created(){

        },
        methods:{
            showDetail(productId){
                console.log(productId)
                this.$router.push({name:'ProductDetail',params:{productId: productId}})
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val
                fetchProductList({categoryId: this.$store.state.productCategoryId,pageNum:val,pageSize:20},(result)=>{
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
