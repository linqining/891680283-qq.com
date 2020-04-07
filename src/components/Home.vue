<template>
    <div>
        <img :src="bannerImage" class="banner-image">
        <img :src="serviceInsure" class="service-insure">
        <img :src="newProduct" class="new-product">
        <ul class="new-product-list">
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'b1a81dc9af9311e99fe37085c2a6d524'}}">
                    <img :src="product1">
                </router-link>
            </li>
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'b1cbd931af9311e99fe37085c2a6d524'}}">
                    <img :src="product2">
                </router-link>
            </li>
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'b2042b84af9311e99fe37085c2a6d524'}}">
                    <img :src="product3">
                </router-link>
            </li>
        </ul>

        <router-link :to="{path:'/detail',query:{productId: 'b350d63faf9311e99fe37085c2a6d524'}}">
            <img :src="sellingPoint" class="selling-point">
        </router-link>
        <router-link :to="{path:'/detail',query:{productId: 'b27f9b9faf9311e99fe37085c2a6d524'}}">
            <img :src="productHall" class="product-hall">
        </router-link>

        <router-link :to="{path:'/detail',query:{productId: 'd4e5c6c9af9311e99fe37085c2a6d524'}}">
            <img :src="product4" class="product4">
        </router-link>
        <ul class="new-product-list2">
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'd47e825eaf9311e99fe37085c2a6d524'}}">
                    <img :src="product5">
                </router-link>
            </li>
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'd39f41a1af9311e99fe37085c2a6d524'}}">
                    <img :src="product6">
                </router-link>
            </li>
            <li>
                <router-link :to="{path:'/detail',query:{productId: 'd43eb304af9311e99fe37085c2a6d524'}}">
                    <img :src="product7">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import banner from '@/assets/image/home/banner.png'
    import serviceInsure from '@/assets/image/home/service-insure.png'
    import newProduct from '@/assets/image/home/new-product.png'
    import product1 from '@/assets/image/home/product1.png'
    import product2 from '@/assets/image/home/product2.png'
    import product3 from '@/assets/image/home/product3.png'
    import sellingPoint from '@/assets/image/home/selling-point.png'
    import productHall from '@/assets/image/home/product-hall.png'
    import product4 from '@/assets/image/home/product4.png'
    import product5 from '@/assets/image/home/product5.png'
    import product6 from '@/assets/image/home/product6.png'
    import product7 from '@/assets/image/home/product7.png'


    export default{
        name: 'Home',
        components:{},
        data(){
            return{
                bannerImage: banner,
                serviceInsure: serviceInsure,
                newProduct: newProduct,
                product1: product1,
                product2:product2,
                product3:product3,
                sellingPoint: sellingPoint,
                productHall: productHall,
                product4: product4,
                product5: product5,
                product6: product6,
                product7: product7
            }
        }
    }
</script>
<style scoped>
    .banner-image,.service-insure,.new-product,.selling-point,.product-hall,.product4{
        width: 100%;
        height:auto;
    }
    .service-insure,.selling-point,.product-hall,.product4,.new-product-list2,.new-product-list{
        margin-top: -3px;
    }
    .new-product{
        margin-top: -4px;
    }
    .new-product-list,.new-product-list2{
        display: flex;
        padding: 0 15%;
        margin-bottom: 0px;

    }
    .new-product-list2{
        background-image: url("~@/assets/image/home/567bg.png");
        background-position:bottom;
        padding: 60px 15%;
    }
    .new-product-list li,.new-product-list2 li{
        list-style: none;
        flex:1;
    }
    .new-product-list li{
        margin-top: -644px;
    }
</style>
