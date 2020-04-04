<template>
    <div class="head-title">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'PurchaseTitle'
    }
</script>
<style scoped>
    .head-title{
        border-left: 5px solid #f7c85c;
        background-color:  #F5F5F5;
        line-height: 50px;
        font-size: 16px;
        text-align:left;
        padding-left:30px;
    }
</style>
