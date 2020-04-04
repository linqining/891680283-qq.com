<template>
    <div>
        <product-item v-for="(item,index) in this.getProductList" :key="index"  :data="item" @click="showDetail(item.id)"></product-item>
    </div>
</template>
<script>
    import { mapGetters} from 'vuex'
    import ProductItem from './item'

    export default{
        name: 'ProductList',
        computed: {
            ...mapGetters([
                'getProductList'
            ])
        },
        components:{
            ProductItem
        },
        data(){
            return{
            }
        },
        mounted(){
        },
        methods:{
            showDetail(productId){
                console.log(productId)
                this.$router.push({name:'ProductDetail',params:{productId: productId}})
            }
        }
    }
</script>
<style>

</style>
