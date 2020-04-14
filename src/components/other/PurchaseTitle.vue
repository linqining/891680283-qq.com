<template>
    <div class="head-title">
        <slot></slot>
        <span class="time">
            <slot name="time"></slot>
        </span>
    </div>
</template>
<script>
    export default{
        name:'PurchaseTitle',

    }
</script>
<style scoped>
    .head-title{
        border-left: 5px solid #7C9AB4;
        background-color:  #F5F5F5;
        line-height: 50px;
        font-size: 16px;
        text-align:left;
        padding-left:30px;
        position: relative;
    }
    .time{
        float:right;
        position: absolute;
        padding-right:30px;
        right:0px;
    }
</style>
