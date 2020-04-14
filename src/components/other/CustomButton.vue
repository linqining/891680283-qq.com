<template>
    <button class="custom-button">
        <slot>
        </slot>
    </button>
</template>
<script>
    export default{
        name:'CustomButton'
    }
</script>
<style scoped>
    .custom-button{
        background-color: #7C9AB4;
        color:white;
        width:150px;
        height:42px;
        border:none;
        font-size:20px;
    }
</style>
