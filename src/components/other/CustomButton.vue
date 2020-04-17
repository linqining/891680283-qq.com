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
<style scoped lang="scss">
    .custom-button{
        background-color: $theme-color;
        color:white;
        width:150px;
        height:42px;
        border:none;
        font-size:20px;
    }
</style>
