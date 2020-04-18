<template>
    <div class="home">
        <img :src="bannerImage" class="banner-image">
        <img :src="classification" class="classification-img">
        <div class="product-group">
            <div class="product1">
                <img :src="umbrealla">
            </div>
            <div class="product2">
                <img :src="hat">
                <img :src="scarlet">
            </div>
            <div class="product3">
                <img :src="sun_glasses">
            </div>
        </div>
        <img :src="hotSell" class="hot-sell">
        <img :src="miniUnbrealla" class="mini-umbrealla">
        <img :src="angelbaby" class="angelbaby">
        <img :src="bolon" class="bolon">
        <img :src="children_umbrealla" class="children-umbrealla">
        <img :src="fold_umbrealla" class="fold-umbrealla">
        <img :src="helen" class="helen">
        <div>
            <img :src="backtotop" class="back-to-top">
        </div>




    </div>
</template>
<script>
    import banner from '@/assets/image/home/banner.jpg'
    import classification from '@/assets/image/home/classification.png'
    import hat from '@/assets/image/home/hat.png'
    import scarlet from '@/assets/image/home/scarlet.png'
    import sun_glasses from '@/assets/image/home/sun_glasses.png'
    import umbrealla from '@/assets/image/home/umbrealla.png'
    import hotSell from '@/assets/image/home/hot_sell.jpg'
    import miniUnbrealla from '@/assets/image/home/mini_umbrealla.jpg'
    import angelbaby from '@/assets/image/home/angelbaby.jpg'
    import bolon from '@/assets/image/home/bolon.jpg'
    import children_umbrealla from '@/assets/image/home/children_umbrealla.png'
    import fold_umbrealla from '@/assets/image/home/fold_umbrealla.jpg'
    import helen from '@/assets/image/home/helen.jpg'
    import backtotop from '@/assets/image/home/backtotop.png'






    export default{
        name: 'Home',
        components:{},
        data(){
            return{
                bannerImage: banner,
                classification: classification,
                hat: hat,
                scarlet: scarlet,
                sun_glasses: sun_glasses,
                umbrealla: umbrealla,
                hotSell: hotSell,
                miniUnbrealla: miniUnbrealla,
                angelbaby: angelbaby,
                bolon: bolon,
                children_umbrealla: children_umbrealla,
                fold_umbrealla: fold_umbrealla,
                helen: helen,
                backtotop: backtotop
            }
        }
    }
</script>
<style scoped>
    .home{
        min-width: 1200px;
        margin:auto;
    }
    .banner-image,.hot-sell,.mini-umbrealla,.angelbaby,.bolon,.children-umbrealla{
        width: 100%;
        height:auto;
    }

    .new-product-list li,.new-product-list2 li{
        list-style: none;
        flex:1;
    }
    .new-product-list li{
        margin-top: -644px;
    }
    .classification-img{
        padding: 100px 0 40px 0;
    }
    .product-group{
        height: 500px;
        /*padding: 200px 400px;*/
    }
    .product1,.product2,.product3{
        display: inline-block;
        padding: 20px 10px;

    }
    .product2{
        width: 382px;
        height: 415px;
    }
    .product2 img+img{
        padding-top: 3px;
    }
    .home>img+img{
        margin-top: -4px;
    }
    .children-umbrealla{
        padding-top: 75px;
    }
    .fold-umbrealla,.helen,.back-to-top{
        padding-top: 120px;
    }
    .back-to-top{
        padding-bottom: 120px;
    }
</style>
