<template>
    <div class="shopping-cart">
        <div class="table-wrapper">
            <el-table
                    ref="multipleTable"
                    :data="tableData"
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
                        prop="productPrice"
                        label="单价"
                        width="auto"
                >
                </el-table-column>
                <el-table-column
                        prop="inventoryCount"
                        label="数量"
                        width="auto"
                >
                </el-table-column>
            </el-table>
        </div>

        <div class="action-list">
            <el-checkbox class="select-all" v-model="checked" @change="selectAll">全选</el-checkbox>
            <div class="actions">
                <span>删除选中商品</span>
                <span>移入收藏夹</span>
                <span>清空失效商品</span>
            </div>
            <div class="summary">
                <div>商品<span class="num">3</span>件，商品金额： ￥3693</div>
                <custom-button>去结算</custom-button>
            </div>
        </div>

        <div class="recommend-good">
            <el-card >
                <el-tabs  class="recommend-tab" v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="为你优选" name="first">
                        <div>
                            <recommend-item v-for="(item,index) in this.tableData.slice(0,5)" :key="index" :item="item"></recommend-item>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="最近浏览" name="second">
                        <div>
                            <recommend-item v-for="(item,index) in this.tableData.slice(0,5)" :key="index" :item="item"></recommend-item>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
    </div>
</template>
<script>
    import {fetchProductList} from "../../api/api";
    import ShoppingCartItem from "../product/ShoppingCartItem";
    import RecommendItem from "../other/RecommendItem";
    import CustomButton from "../other/CustomButton";

    export default{
        name: 'ShoppingCart',
        data(){
            return{
                tableData:[],
                multipleSelection:[],
                checked:false,
                activeName:'first',
            }
        },
        components:{
            CustomButton,
          ShoppingCartItem,
            RecommendItem
        },
        created(){
            fetchProductList({categoryId: '10002',pageNum:1,pageSize:20},(res)=>{
                this.tableData = res.data
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
            selectAll(){
                this.$refs.multipleTable.clearSelection();
                if(this.checked){
                    this.$refs.multipleTable.toggleAllSelection();

                }
            },
            handleClick(){

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
    }
    .recommend-good{
        margin-top:50px;
        margin-bottom:200px;
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
</style>
