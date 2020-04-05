<template>
    <div class="user-address">
        <div class="address-title">已保存的收货地址</div>
        <div class="address-wrapper">
            <address-card v-for="(item,index) in this.getAddressList" :key="index"
                          :address="item"
                          :is_selected="index===selectAddressIndex"
                          @click.native="selectAddressIndex=index"
            ></address-card>
        </div>
<!--        <div class="address-title add-new">新增收货地址</div>-->
        <div class="add-new-form">
            <address-form></address-form>
        </div>
    </div>
</template>
<script>
    import AddressCard from "../other/AddressCard";
    import AddressForm from "../address/AddressForm";
    import { mapGetters,mapMutations } from 'vuex'
    import {addressList} from '@/api/api.js'


    export default{
        name: 'UserAddress',
        computed: {
            ...mapGetters([
                'getAddressList',
            ])
        },
        components: {AddressForm, AddressCard},
        data(){
            return{
                addressList:[],
                selectAddressIndex: 0
            }
        },
        created(){
            let _this = this
            if(!this.$store.state.fetchAddress){
                addressList({},(res)=>{
                    _this.$store.state.fetchAddress = true
                    _this.setAddressList(res.data)
                })
            }
        },
        methods:{
            ...mapMutations(['setAddressList'])
        }
    }
</script>
<style scoped>
    .address-title{
        text-align: left;
        font-size: 18px;
        background-color: white;
        line-height: 52px;
        font-weight: bold;
        padding-left: 30px;
        border-bottom: 1px solid #DEDBDC;
    }
    .address-wrapper{
        background:white;
        text-align:left;
    }
    .address-card{
        margin: 30px ;
    }
    .add-new{
        border-top: 2px solid #f7c85c;
    }
    .add-new-form{
        background: white;
    }
</style>
