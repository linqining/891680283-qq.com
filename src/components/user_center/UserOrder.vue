<template>
    <div class="user-order">
        <ul class="order-status">
            <li :class="{active: activeStatus===index}" v-for="(item,index) in orderStatus" :key="index" @click="changeStatus(index)">{{item}}</li>
        </ul>
        <div class="order-table-head">
            <table>
                <thead>
                    <th class="head1">商品</th>
                    <th class="head2">订单金额</th>
                    <th class="head3">订单状态</th>
                    <th class="head4">操作</th>
                </thead>
            </table>
        </div>
        <user-order-item :order="order">
        </user-order-item>
    </div>
</template>
<script>
    import UserOrderItem from "./UserOrderItem";
    export default{
        name: 'UserOrder',
        components: {UserOrderItem},
        data(){
            return{
                orderStatus: ['全部订单','待付款','待收货','已完成'],
                activeStatus: 0,
                order:{
                    sn: '20032732188382',
                    created_at: '2020-2-20/19:35',
                    totalPrice: 13000,
                    orderStatus: 'complete',
                    paymentStatus: 1,
                    id:128,
                    productList:[
                        {
                            id: "c4cf6ee4f23911e9a3827085c2a6d524",
                            createDate: "2019-10-03 13:50:08",
                            updateDate: "2020-03-06 09:35:39",
                            category: "床尾凳",
                            categoryId: "10003",
                            productName: "桦帝森宝欧式实木床尾凳",
                            productInfo: "桦帝森宝欧式实木床尾凳 美式长凳布艺实木沙发凳 床榻凳踏脚",
                            productAddress: "北京",
                            size: "标准",
                            groupId: "28",
                            productPrice: 638,
                            preProductPrice: 700,
                            productPoint: 9.45,
                            pingRate: "96%",
                            discount: 9.1,
                            pingScore: 4.8,
                            grounding: 1,
                            soldedCount: 797,
                            inventoryCount: 1094,
                            hot: 1,
                            abbreviationFile: "762ce003267d11ea90177085c2a6d524"
                        },
                        {
                            id: "c564713bf23911e9a3827085c2a6d524",
                            createDate: "2019-10-08 00:43:11",
                            updateDate: "2020-03-06 09:35:39",
                            category: "床尾凳",
                            categoryId: "10003",
                            productName: "[摆设出品]条凳实木条凳实木床尾凳新中式实木床脚凳古典床尾凳",
                            productInfo: "[摆设出品]条凳实木条凳实木床尾凳新中式实木床脚凳古典床尾凳",
                            productAddress: "北京",
                            size: "标准",
                            groupId: "28",
                            productPrice: 2749,
                            preProductPrice: 3024,
                            productPoint: 9.01,
                            pingRate: "96%",
                            discount: 9,
                            pingScore: 4.7,
                            grounding: 1,
                            soldedCount: 876,
                            inventoryCount: 1173,
                            hot: 1,
                            abbreviationFile: "7662c072267d11ea90177085c2a6d524"
                        }
                    ]
                }
            }
        },
        methods:{
            changeStatus(index){
                this.activeStatus = index
                // TODO 切换状态栏应该要查询一次，更换数据源
            }
        },
        created(){

        }
    }
</script>
<style scoped>
    .order-status{
        text-align: left;
    }
    .order-status li{
        list-style: none;
        display: inline-block;
        padding: 0px 9px;
        font-size: 20px;
    }
    .order-status li+li::before{
        content:'';
        border-left: 1px solid black;
        font-size:14px;
        margin-right:9px;
        vertical-align: middle;
    }
    li.active{
        color: #f7c85c;
    }
    .order-table-head table{
        width:100%;
        padding: 15px 0;
        margin: 15px 0;
        background-color: #d3d2d5;
    }
    .head1{
        width:400px;
    }
    .head2{
        width: 100px;
    }
    .head3{
        width: 150px;
    }
</style>
