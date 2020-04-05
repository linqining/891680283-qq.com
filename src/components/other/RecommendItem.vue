<template>
    <div class="cart-item">
        <img :src="'http://47.107.62.230:9081/sm/file/show?fileId='+item.abbreviationFile">
        <div class="desc-block">
            <div class="product-name">{{item.productName}}</div>
            <div class="buy-num" v-if="show_price"><strong>{{item.productPrice}}X1</strong></div>
        </div>
    </div>
</template>


<script>
    export default{
        name: 'RecommendCartItem',
        props:{
            item:{
                type:Object,
            },
            show_price:{
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .cart-item img{
        width:200px;
        height:300px;
    }
    .desc-block{
        vertical-align: top;
        /*padding: 0 15px;*/
    }
    .desc-block .product-name{
        /*width: 295px;*/
        /*display: inline-block;*/
    }
    .desc-block .buy-num{
        /*display:inline-block;*/
        /*float:right;*/
    }
    .cart-item{
        text-align: left;
        display:inline-block;
        width:200px;
        vertical-align: top;
        padding:10px;
    }
</style>
