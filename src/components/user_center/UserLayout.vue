<template>
    <div class="user-center">
        <div class="center-container">
            <div class="nav-pane">
                <div class="nav-title">
                    <span>我的交易</span>
                </div>
                <div class="nav-list list1">
                    <ul>
                        <li @click="activeName='order'"><router-link  :class="{active: activeName==='order'}" :to="{name: 'UserOrder'}" >订单管理</router-link></li>
                        <li @click="activeName='address'"><router-link :class="{active: activeName==='address'}" :to="{name: 'UserAddress'}" >收货地址</router-link></li>
                    </ul>
                </div>
                <div class="nav-title">
                    <span>我的账户</span>
                </div>
                <div class="nav-list list2">
                    <ul>
                        <li @click="activeName='info'"><router-link :class="{active: activeName==='info'}" :to="{name: 'UserInfo'}" >个人信息</router-link></li>
                        <li @click="activeName='password'"><router-link :class="{active: activeName==='password'}" :to="{name: 'UserPassword'}" >密码修改</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="nav-content">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'UserLayout',
        data(){
            return{
                activeName:'order',
            }
        },
    }
</script>
<style>
    .user-center{
        margin:auto;
        min-height:600px;
        margin-top:50px;
        margin-bottom: 200px;
        width: 1200px;
    }
    .center-container{
        position:relative;
        min-height: 600px;
    }
    .nav-pane{
        width:200px;
        height:100%;
        left: 0px;
        top:0px;
        position:absolute;
        display:inline-block;
        background:white;
    }
    .nav-title{
        font-size: 18px;
        font-weight: bold;
        padding: 30px;
    }
    .nav-list ul{
        padding-left: 0px;
    }
    .nav-list li{
        list-style:none;
        padding:10px;
    }
    .nav-list li a.active{
        color: #f7c85c;
    }
    .nav-list li a{
        text-decoration: none;
        color: black
    }
    .nav-content{
        /*position:absolute;*/
        margin-left:250px;
        min-height:600px;
        /*background-color: white;*/
        width: 950px;
        left:250px;
    }
</style>
