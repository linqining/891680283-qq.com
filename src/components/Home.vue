<template>
    <div class="home-container">
        <img :src="bannerImage" class="banner-image">
        <router-link :to="{path:'/detail',query:{productId: 'b8471a19f23911e9a3827085c2a6d524'}}">
            <img :src="newProduct" class="new-product">
        </router-link>
        <div class="recommend-wrap">
            <div class="product-wrapper">
                <router-link :to="{path:'/detail',query:{productId: 'b7ee3688f23911e9a3827085c2a6d524'}}">
                    <img :src="product1" class="product1">
                </router-link>
                <router-link :to="{path:'/detail',query:{productId: 'b806f16bf23911e9a3827085c2a6d524'}}">
                    <img :src="product2" class="product2">
                </router-link>
                <router-link :to="{path:'/detail',query:{productId: 'b87cee5af23911e9a3827085c2a6d524'}}">
                    <img :src="product3" class="product3">
                </router-link>

            </div>
        </div>
        <div class="mirror-container">
            <img :src="mirror" class="mirror">
            <router-link class="mirror-link link1" :to="{path:'/detail',query:{productId: 'c368d0edf23911e9a3827085c2a6d524'}}">
                <img :src="product4" class="product4">
            </router-link>
            <router-link class="mirror-link link2" :to="{path:'/detail',query:{productId: 'c2c799a3f23911e9a3827085c2a6d524'}}">
                <img :src="product5" class="product5">
            </router-link>
        </div>
    </div>
</template>
<script>
    import banner from '@/assets/image/home/banner.jpg'
    import newProduct from '@/assets/image/home/new-product.jpg'
    // import productBg from '@/assets/image/home/product-bg.jpg'
    import product1 from '@/assets/image/home/product1.png'
    import product2 from '@/assets/image/home/product2.png'
    import product3 from '@/assets/image/home/product3.png'
    import product4 from '@/assets/image/home/product4.png'
    import product5 from '@/assets/image/home/product5.png'
    import mirror from '@/assets/image/home/mirror.png'


    export default{
        name: 'Home',
        components:{},
        data(){
            return{
                bannerImage: banner,
                newProduct: newProduct,
                product1: product1,
                product2: product2,
                product3: product3,
                product4: product4,
                product5: product5,
                mirror: mirror
            }
        }
    }
</script>
<style scoped>
    .home-container{
        min-width:1200px;
    }
    .banner-image,.new-product,.mirror{
        width: 100%;
        height:auto;
    }

    .new-product{
        margin-top: -4px;
    }
    .product-wrapper{
        margin-top:-4px;
    }
    .recommend-wrap{
        position:relative;
    }
    .product-wrapper{
        background-image: url("~@/assets/image/home/product-bg.jpg");
        background-size: 100% auto;

    }
    .product1,.product2,.product3{
        width: 66.4%;
        margin: auto;
        margin: 9% 0;
    }
    .product1{
        margin-top:25.7%;
    }
    .product2,.product3{
        margin-top:-3px;
    }
    .product3{
        margin-bottom: 18.7%;
    }

    .new-product-list li,.new-product-list2 li{
        list-style: none;
        flex:1;
    }
    .new-product-list li{
        margin-top: -644px;
    }
    .mirror{
        margin-bottom: -76px;
    }
    .mirror-container{
        position:relative;
    }
    .mirror-link{
        position:absolute;
    }
    .mirror-link img{
        width:100%;
    }
    .link1{
        position: absolute;
        top: 29.3%;
        left: 18.8%;
        width: 42%;
    }
    .link2{
        position: absolute;
        top: 29.3%;
        left: 60.8%;
        width: 20.7%;
    }

</style>
