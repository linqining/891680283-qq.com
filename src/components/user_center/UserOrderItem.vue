<template>
    <div class="user-order-item">
        <purchase-title>
            <slot>订单号：{{order.sn}}</slot>
            <span slot="time">{{order.created_at}}</span>
        </purchase-title>
        <table class="order-table">
            <tr>
                <td class="product-cell">
                    <shopping-cart-item class="product" v-for="(item,index) in order.orderItem" :key="index" :item="item"></shopping-cart-item>
                </td>
                <td class="second-cell">{{order.totalPrice}}</td>
                <td class="third-cell">
                    <span>{{order.state===0 ? '未完成' :'已完成'}}</span>
                </td>
<!--                <td>-->
<!--                    <button id="buyAgain" v-if="order.paymentStatus">再次购买</button>-->
<!--                </td>-->
                <td class="forth-cell">
                    <button v-if="order.state===0" id="confirmReceive">确认收货</button>
                </td>
            </tr>
        </table>
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
        props:{
            order:{
                type: Object,
                required: true
            }
        }
    }
</script>
<style scoped>
    .order-table{
        width:100%
    }
    .order-table td{
        border-right: 1px solid #DEDBDC;
    }
    .product-cell{
        width:600px;
    }
    .second-cell{
        width:200px;
    }
    .third-cell{
        width:200px;
    }
    .forth-cell{
        width: 200px;
    }
    .product{
        border-bottom: 1px solid #DEDBDC;
        text-align: left;
    }
    .product /deep/ .desc-block{
        width:128px;
    }
    .user-order-item{
        background-color:white;
    }
    #buyAgain,#confirmReceive{
        color: #f7c85c;
        background-color: transparent;
        border:1px solid #f7c85c;;
    }
</style>
