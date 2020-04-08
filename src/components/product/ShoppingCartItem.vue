<template>
    <div class="cart-item">
        <img :src="'http://www.cqrzm.com/sm/file/show?fileId='+item.fileId">
        <div class="desc-block">
            <router-link :to="{path:'/detail',query:{productId: item.productId}}">
                <div class="product-name">{{item.productName}}</div>
            </router-link>
            <div class="buy-num" v-if="show_price"><strong>{{item.unitPrice}}X{{item.count}}</strong></div>
        </div>
    </div>
</template>


<script>
    export default{
        name: 'ShoppingCartItem',
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
        width:80px;
        height:80px;
    }
    .desc-block{
        display:inline-block;
        vertical-align: top;
        padding: 0 15px;
        width: calc(100% - 110px);
    }
    .desc-block .product-name{
        width: 295px;
        display: inline-block;
    }
    .desc-block .buy-num{
        display:inline-block;
        float:right;
    }
    .desc-block a{
        color: black;
    }
    .cart-item{
        vertical-align: top;
    }
</style>
