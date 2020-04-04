<template>
    <div class="address-card">
        <div class="el-icon-plus"></div>
        <div class="add-new">添加新地址</div>
    </div>
</template>
<script>
    export default{
        name:'AddAddress',
    }
</script>
<style scoped>
    .address-card {
        position: relative;
        width: 300px;
        height: 160px;
        border-left: 1px solid #DEDBDC;
        border-right: 1px solid #DEDBDC;
        padding: 21px 24px;
        display: inline-block;
        background-color: #FCFAFA;
        vertical-align:top;
    }
    .el-icon-plus{
        font-size: 28px;
        text-align: center;
        display: block;
        color: gray;
        padding: 50px 0 20px 0;
    }
    .add-new{
        font-size:14px;
        text-align: center;
    }
</style>
