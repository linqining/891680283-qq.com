<template>
    <router-link  :to="{path: '/detail',query:{productId: data.id}}" class="detail-link">
        <div class="product-card">
            <img :src="'http://www.cqrzm.com/sm/file/show?fileId='+data.abbreviationFile" class="product-cover">
            <div>
                <div class="product-info">{{data.productName}}</div>
                <!--            <img :src="rect">-->
                <div class="price-tag">
                    <span>￥</span>
                    <span>{{data.productPrice}}</span>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
    // import rect from '@/assets/components/product/rect.png'
    export default{
        name: 'ProductItem',
        data(){
            return{
                // rect: rect,
            }
        },
        props:{
            img: {

            },
            data:{
                type:Object,
                required: true
            }
        },
        mounted(){
        }
    }
</script>
<style>
    .detail-link{
        text-decoration: none;
        color:black;
    }
    .product-cover{
        width:250px;
        height: 300px;
    }
    .product-info{
        height: 45px;
        text-overflow: ellipsis;
        padding: 15px 0;
    }
    .product-card:hover{
        box-shadow: 0px 0px 5px #888888;
        border-radius: 3px;
    }
    .product-card{
        display:inline-block;
        width: 250px;
        height: 400px;
        padding: 20px 25px;
    }
    .price-tag{
        text-align: left;
        font-weight: bold;
    }
</style>
