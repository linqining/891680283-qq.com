<template>
    <div class="purchase-content">
        <purchase-title>收货信息</purchase-title>
        <address-card
                username="离线"
                :is_default="true"
                phone="15220220554"
                receive_time="anytime"
                city="北京市"
                address="朝阳区北四环定成路6号北辰高尔夫一起19好楼"
                :is_selected="true"
        ></address-card>
        <purchase-title>商品清单</purchase-title>
        <purchase-title>购买方式</purchase-title>
    </div>
</template>
<script>
    import PurchaseTitle from "../other/PurchaseTitle";
    import AddressCard from "../other/AddressCard";

    export default{
        name: 'Purchase',
        components:{
            PurchaseTitle,
            AddressCard
        }
    }
</script>
<style scoped>
    .purchase-content{
        width:1200px;
        margin:auto;
    }
</style>
