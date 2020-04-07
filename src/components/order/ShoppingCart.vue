<template>
    <div class="shopping-cart">
        <div class="table-wrapper">
            <el-table
                    ref="multipleTable"
                    :data="$store.state.cartItems"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="商品信息"
                        width="500">
                    <template slot-scope="scope">
                        <shopping-cart-item :item="scope.row" :show_price="false"></shopping-cart-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="size"
                        label="尺码"
                        width="auto">
                </el-table-column>
                <el-table-column
                        prop="unitPrice"
                        label="单价"
                        width="auto"
                >
                </el-table-column>
                <el-table-column
                        label="数量"
                        width="auto"
                >
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.count" @change="handleChange(scope.$index)" :min="1" label="描述文字"></el-input-number>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="action-list">
            <el-checkbox class="select-all" v-model="checked" @change="selectAll">全选</el-checkbox>
            <div class="actions">
                <span @click="deleteProducts">删除选中商品</span>
<!--                <span>移入收藏夹</span>-->
<!--                <span>清空失效商品</span>-->
            </div>
            <div class="summary">
                <div>商品<span class="num">{{totalCount}}</span>件，商品金额： ￥{{totalPrice}}</div>
                <custom-button @click.native="submitOrder">去结算</custom-button>
            </div>
        </div>

        <div class="recommend-good">
            <el-card >
                <span class="refresh-products" v-if="activeName==='first'" @click="changeSlice"><span class="el-icon-refresh-right"></span>换一批</span>
                <el-tabs  class="recommend-tab" v-model="activeName" type="card" @tab-click="handleClick">

                    <el-tab-pane label="为你优选" name="first">

                        <div>
                            <recommend-item v-for="(item,index) in this.hotSellSlice" :key="index" :item="item"></recommend-item>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="最近浏览" name="second">
                        <div>
                            <history-item v-for="(item,index) in this.historyProduct" :key="index" :item="item"></history-item>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
    </div>
</template>
<script>
    import {fetchProductList,fetchHotSell} from "../../api/api";
    import ShoppingCartItem from "../product/ShoppingCartItem";
    import RecommendItem from "../other/RecommendItem";
    import HistoryItem from "../other/HistoryItem";
    import CustomButton from "../other/CustomButton";

    export default{
        name: 'ShoppingCart',
        data(){
            return{
                tableData:[],
                multipleSelection:[],
                checked:false,
                activeName:'first',
                historyProduct:[],
                hotSellList:[],
                sliceAlter:0,
                hotSellSlice:[],
            }
        },
        computed:{
            totalPrice(){
                let total = 0
                this.multipleSelection.forEach((item)=>{
                    total+= item.unitPrice*item.count
                })
                return total
            },
            totalCount(){
                let total = 0
                this.multipleSelection.forEach((item)=>{
                    total+= item.count
                })
                return total
            }
        },
        components:{
            HistoryItem,
            CustomButton,
          ShoppingCartItem,
            RecommendItem
        },
        created(){
            if(localStorage['productHistory']){
                this.historyProduct = JSON.parse(localStorage['productHistory'])
            }
            fetchProductList({categoryId: '10002',pageNum:1,pageSize:20},(res)=>{
                this.tableData = res.data
            })
            fetchHotSell((res)=>{
                this.hotSellList = res.data
                this.hotSellSlice = this.hotSellList.slice(0,5)
            })
        },
        methods:{
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            deleteProducts(){
                let selectProductIds = this.multipleSelection.map(item=>{return item.productId})
                this.$store.state.cartItems = this.$store.state.cartItems.filter((value)=>{ return selectProductIds.indexOf(value.productId)<0})
            },
            selectAll(){
                this.$refs.multipleTable.clearSelection();
                if(this.checked){
                    this.$refs.multipleTable.toggleAllSelection();

                }
            },
            handleClick(){

            },
            handleChange(index){
                this.multipleSelection[index].totalPrice = this.multipleSelection[index].unitPrice*this.multipleSelection[index].count
            },
            changeSlice(){
                if(this.sliceAlter===0){
                    this.hotSellSlice = this.hotSellList.slice(5,10)
                    this.sliceAlter=1
                }else{
                    this.hotSellSlice = this.hotSellList.slice(0,5)
                    this.sliceAlter=0
                }
            },
            submitOrder(){
                this.$router.push({name:'Purchase', params:{orderItems: this.multipleSelection}})
            }

        }
    }
</script>

<style scoped>
    .shopping-cart{
        width:1200px;
        margin:auto;
        margin-top:50px;
    }
    .table-wrapper{
        padding: 30px;
        background-color: white;
    }
    .action-list{
        margin-top:30px;
        text-align:left;
        padding: 50px;
        height: 65px;
        background-color: white;
    }
    .select-all{
        padding-right:20px;
    }
    .actions{
        display:inline-block;
    }
    .actions span{
        padding: 0 15px;
        color: #5096ff;
    }
    .num{
        color:#f7c85c;
    }
    .summary{
        display: inline-block;
        float:right;
        text-align:right;
        /*position:absolute;*/
        right:0px;
    }
    .recommend-good{
        margin-top:50px;
        margin-bottom:200px;
        text-align: left;
        position: relative;
    }
    .is_active_thumb{
        background-color: #f7c85c;
    }
    .recommend-tab /deep/ .el-tabs__item.is-active{
        background-color: #ffc541cf;
        color: white;
        border: 1px solid #ffc541cf;
    }
    .recommend-tab /deep/ .el-tabs__item:hover{
        color:black;
    }
    .recommend-tab /deep/ .el-tabs__item{
        border-bottom: 2px solid #f7c85c;
    }
    .custom-button{
        margin-top: 20px;
    }
    .refresh-products{
        z-index:10;
        position:absolute;
        right:0;
        margin-right:20px;
    }

</style>
