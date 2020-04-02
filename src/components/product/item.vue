<template>
    <div>
        <img :src="img" class="product-cover">
        <div>
            <img :src="rect">
            <span>￥</span>
            <span>{{price}}</span>
        </div>
    </div>
</template>
<script>
    import rect from '@/assets/components/product/rect.png'
    export default{
        name: 'ProductItem',
        data(){
            return{
                rect: rect,
            }
        },
        props:{
            img: {

            },
            price:{
                type: Number,
                required: true,
            }
        },
        mounted(){
            console.log(this.img);
        }
    }
</script>
<style>
    .product-cover{
        width: 151px;
        height: 221px;
    }
</style>
