<template>
    <div class="user-order">
        <ul class="order-status">
            <li :class="{active: activeStatus===index}" v-for="(item,index) in orderStatus" :key="index" @click="changeStatus(index)">{{item}}</li>
        </ul>
        <div class="order-table-head">
            <el-table
                    ref="multipleTable"
                    :data="[]"
                    tooltip-effect="dark"
                    style="width: 100%"
                    :show-header="true"
                    :border="true"
                    empty-text=" "
            >
                <el-table-column
                        label="商品"
                        width="500">
                </el-table-column>
                <el-table-column
                        label="订单金额"
                        width="auto">
                </el-table-column>
                <el-table-column
                        label="订单状态"
                        width="auto"
                >

                </el-table-column>
                <el-table-column
                        label="操作"
                        width="auto"
                >
                </el-table-column>
            </el-table>
        </div>
        <user-order-item v-for="(item,index) in orders" :order="item" :key="index">
        </user-order-item>
    </div>
</template>
<script>
    import UserOrderItem from "./UserOrderItem";
    import {orderList} from "@/api/api";

    export default{
        name: 'UserOrder',
        components: {UserOrderItem},
        data(){
            return{
                orderStatus: ['全部订单','待付款','已支付','已完成'],
                activeStatus: 0,
                orders:[],
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
                orderList(index,(res)=>{
                    this.orders = res.data
                })
            }
        },
        created(){
            orderList(0,(res)=>{
                this.orders = res.data
            })
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
        color: #7C9AB4;
    }
    .order-table-head{
        margin: 30px 0;
    }

    .order-table-head /deep/ .el-table th{
        text-align: center;
        background-color: #d3d2d5;
        color:black;
    }

    .order-table-head /deep/ .el-table__body-wrapper{
        display:none;
    }
</style>
