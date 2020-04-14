<template>
    <div class="cart-item">
        <router-link :to="{path:'/detail',query:{productId: item.id}}">
            <img :src="'http://www.tuxunkj.com/sm/file/show?fileId='+item.abbreviationFile">
            <div class="desc-block">
                    <div class="product-name">{{item.productName}}</div>
                <div class="buy-num" v-if="show_price"><strong>{{item.productPrice}}X1</strong></div>
            </div>
        </router-link>
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
        width:150px;
        height: 200px;
    }
    .desc-block{
        vertical-align: top;
    }
    a{
        color:black;
        text-decoration: none;
        display: block;
    }
    a:hover{
        /*box-shadow: 0px 0px 5px #888888;*/
    }
    .desc-block .product-name{
        font-size: 14px;
        /*width: 295px;*/
        /*display: inline-block;*/
    }
    .desc-block .buy-num{
        /*display:inline-block;*/
        /*float:right;*/
    }
    .cart-item{
        text-align: left;
        display: inline-block;
        width: 150px;
        vertical-align: top;
        padding: 20px;
    }
</style>
