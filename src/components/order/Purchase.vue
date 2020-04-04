<template>
    <div class="purchase-content">
        <purchase-title>收货信息</purchase-title>
        <div class="address-block">
            <address-card v-for="(item,index) in this.getAddressList" :key="index"
                    :username="item.linkName"
                    :is_default="!item.firstAddress"
                    :phone="item.phoneNum"
                    receive_time=""
                    :city="item.address"
                    :address="item.detail"
                    :is_selected="index===selectAddressIndex"
                    @click.native="selectAddressIndex=index"
            ></address-card>
            <add-address @click.native="showAddressModal"></add-address>
        </div>
        <purchase-title>商品清单</purchase-title>
        <purchase-title>购买方式</purchase-title>
<!--        <address-form></address-form>-->
        <el-dialog
                :visible.sync="dialogVisible"
                width="80%"
                :before-close="handleClose">
            <address-form  :show_btn="true"></address-form>
<!--            <span slot="footer" class="dialog-footer">-->
<!--            <el-button type="primary" @click="submitForm">确 定</el-button>-->
<!--            <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--          </span>-->
        </el-dialog>
    </div>
</template>
<script>
    import PurchaseTitle from "../other/PurchaseTitle";
    import AddressCard from "../other/AddressCard";
    import AddAddress from "../other/AddAddress";
    import AddressForm from "../address/AddressForm";
    import {addressList} from '@/api/api.js'
    import { mapGetters,mapMutations } from 'vuex'


    export default{
        name: 'Purchase',
        computed: {
            ...mapGetters([
                'getAddressList',
                'getAddressSuccess'
            ])
        },
        watch:{
            getAddressSuccess(){
                if(this.getAddressSuccess){
                    this.dialogVisible = false
                    this.$store.state.addressSuccess = false
                }
            }
        },
        data(){
            return{
                selectAddressIndex:0,
                dialogVisible: false,
            }
        },
        components:{
            AddressForm,
            AddAddress,
            PurchaseTitle,
            AddressCard
        },
        methods:{
            showAddressModal(){
                this.dialogVisible=true
            },
            handleClose(){
                this.dialogVisible=false
            },
            submitForm(){
                this.$store.state.addressSubmit = true
                // this.dialogVisible = false
            },
            ...mapMutations(['setAddressList'])
        },
        created(){
            let _this = this
            addressList({},(res)=>{
                _this.setAddressList(res.data)
            })
        }
    }
</script>
<style scoped>
    .purchase-content{
        width:1200px;
        margin:auto;
    }
    .address-block{
        text-align: left;
    }
    .address-card{
        margin:24px;
    }
    /*.dialog-footer{*/
    /*    text-align: center;*/
    /*}*/
    .el-dialog__footer{
        text-align:center;
    }
</style>
