<template>
    <div>
        <div v-for="item in this.getProductList" :key="item.id">{{item.id}}</div>
    </div>
</template>
<script>
    import { mapGetters} from 'vuex'

    export default{
        name: 'ProductList',
        computed: {
            ...mapGetters([
                'getProductList'
            ])
        },
        data(){
            return{
            }
        },
        mounted(){
        }
    }
</script>
<style>

</style>
