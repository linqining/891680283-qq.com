<template>
    <div class="home">
        <img :src="bannerImage" class="banner-image">
        <div class="ceremony">
            <img :src="ceremony" class="ceremony">
        </div>


        <div class="product-group">
            <div class="product1">
                <router-link  :to="{path:'/detail',query:{productId: 'bcb6d05ff23911e9a3827085c2a6d524'}}">
                    <img :src="wall_cloth_seamingless">
                </router-link>
            </div>
            <div class="product2">
                <router-link :to="{path:'/detail',query:{productId: 'bb032788f23911e9a3827085c2a6d524'}}">
                    <img :src="wall_cloth">
                </router-link>
            </div>
            <div class="product3">
                <router-link :to="{path:'/detail',query:{productId: 'bca24088f23911e9a3827085c2a6d524'}}">
                    <img :src="wall_cloth_naruto">
                </router-link>
            </div>
        </div>

        <router-link :to="{path:'/detail',query:{productId: 'bc6c7eb9f23911e9a3827085c2a6d524'}}">
            <img :src="most_star" class="most-star">
        </router-link>
        <router-link :to="{path:'/detail',query:{productId: 'bc01665df23911e9a3827085c2a6d524'}}">
            <img :src="modern_simple_bedroom" class="modern-simple-bedroom">
        </router-link>
        <router-link :to="{path:'/detail',query:{productId: '8fbcc4bb9f9611e994b47085c2a6d524'}}">
            <img :src="modern" class="modern">
        </router-link>
        <router-link :to="{path:'/detail',query:{productId: 'b4d659dcf23911e9a3827085c2a6d524'}}">
            <img :src="hot_sell" class="hot-sell">
        </router-link>
        <router-link :to="{path:'/detail',query:{productId: 'b5632d80f23911e9a3827085c2a6d524'}}">
            <img :src="import_wood" class="import-wood">
        </router-link>
    </div>
</template>
<script>
    import banner from '@/assets/image/home/banner.jpg'
    import ceremony from '@/assets/image/home/ceremony.png'
    import wall_cloth from '@/assets/image/home/wall_cloth.png'
    import wall_cloth_seamingless from '@/assets/image/home/wall_cloth_seamingless.png'
    import wall_cloth_naruto from '@/assets/image/home/wall_cloth_naruto.png'
    import hot_sell from '@/assets/image/home/hot_sell.jpg'
    import modern_simple_bedroom from '@/assets/image/home/modern_simple_bedroom.jpg'
    import modern from '@/assets/image/home/modern.jpg'
    import most_star from '@/assets/image/home/most_star.jpg'
    import import_wood from '@/assets/image/home/import_wood.jpg'


    export default{
        name: 'Home',
        components:{},
        data(){
            return{
                bannerImage: banner,
                ceremony:ceremony,
                wall_cloth:wall_cloth,
                wall_cloth_naruto:wall_cloth_naruto,
                wall_cloth_seamingless:wall_cloth_seamingless,
                most_star: most_star,
                modern_simple_bedroom: modern_simple_bedroom,
                modern: modern,
                hot_sell: hot_sell,
                import_wood: import_wood,
            }
        }
    }
</script>
<style scoped>
    .home{
        min-width:1200px;
        margin:auto;
    }
    .ceremony{
        background-color: #ffffff;
        margin-top:-4px;
        padding-top:100px;
    }
    .banner-image,.most-star,.modern,.hot-sell,.modern-simple-bedroom,.import-wood{
        width: 100%;
        height:auto;
    }

    .product-group{
        background-color: #ffffff;
        padding-top: 50px;
        padding-bottom:100px;
    }
    .product1,.product2,.product3{
        display:inline-block;
        padding: 0px 10px;
    }
    .product3{
        vertical-align: top;
    }
    .modern-simple-bedroom,.import-wood{
        margin-top: -4px;
    }
    .new-product-list li,.new-product-list2 li{
        list-style: none;
        flex:1;
    }
    .new-product-list li{
        margin-top: -644px;
    }
</style>
