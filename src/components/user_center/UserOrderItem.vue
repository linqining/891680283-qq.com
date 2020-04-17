<template>
    <div class="user-order-item">
        <purchase-title>
            <slot>订单号：{{order.sn}}</slot>
            <span slot="time">{{order.created_at}}</span>
        </purchase-title>
        <el-table
                ref="multipleTable"
                :data="[order]"
                tooltip-effect="dark"
                style="width: 100%"
                :show-header="false"
                :border="true"
                @selection-change="handleSelectionChange">
            <el-table-column
                    width="500">
                <template slot-scope="scope">
                    <shopping-cart-item class="product" v-for="(item,index) in scope.row.orderItem" :key="index" :item="item"></shopping-cart-item>
                </template>
            </el-table-column>
            <el-table-column
                    prop="totalPrice"
                    width="auto">
            </el-table-column>
            <el-table-column
                    width="auto"
            >
                <template slot-scope="scope">
                    <span class="num">{{orderStatus[scope.row.state]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    width="auto"
            >
                <template slot-scope="scope">
                    <button v-if="scope.row.state===3" id="confirmReceive">查看详情</button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import PurchaseTitle from "../other/PurchaseTitle";
    import ShoppingCartItem from "../product/ShoppingCartItem";
    export default{
        name: 'UserOrderItem',
        components:{
            ShoppingCartItem,
            PurchaseTitle
        },
        data(){
            return{
                orderStatus: ['未付款','已支付','确认中','订单完成'],
            }
        },
        props:{
            order:{
                type: Object,
                required: true
            }
        },
        methods:{
            handleSelectionChange(){

            }
        }
    }
</script>
<style scoped lang="scss">
    .order-table{
        width:100%
    }
    .order-table td{
        border-right: 1px solid #DEDBDC;
    }
    .product{
        text-align: left;
        padding:12px;
    }
    .product+.product{
        border-top: 1px solid #DEDBDC;
    }

    .user-order-item{
        background-color:white;
    }
    #buyAgain,#confirmReceive{
        color: $theme-color;
        background-color: transparent;
        border:1px solid $theme-color;;
    }
    .num{
        color: $theme-color;
    }
    .user-order-item /deep/ .el-table td{
        padding: 0px;
        text-align:center;
    }
    .user-order-item /deep/ td .cell{
        padding: 0px;
    }
</style>
