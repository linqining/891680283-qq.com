<template>
    <div class="cart-item">
        <router-link :to="{path:'/detail',query:{productId: item.product.id}}">
            <img :src="'http://www.tuxunkj.com/repo/tb/'+item.rela[0].filePath">
            <div class="desc-block">
                    <div class="product-name">{{item.product.productName}}</div>
                <div class="buy-num" v-if="show_price"><strong>{{item.product.productPrice}}X1</strong></div>
            </div>
        </router-link>
    </div>
</template>


<script>
    export default{
        name: 'HistoryItem',
        components:{
        },
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
        height:200px;
    }
    .desc-block{
        vertical-align: top;
        /*padding: 0 15px;*/
    }
    a{
        text-decoration: none;
        color:black;
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
