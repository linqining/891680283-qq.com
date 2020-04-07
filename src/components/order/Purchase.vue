<template>
    <div class="purchase-content">
        <purchase-title>收货信息</purchase-title>
        <div class="address-block">
            <address-card v-for="(item,index) in this.getAddressList" :key="index"
                    :address="item"
                    :is_selected="index===selectAddressIndex"
                    @click.native="selectAddressIndex=index"
            ></address-card>
            <add-address @click.native="showAddressModal"></add-address>
        </div>
        <purchase-title>商品清单</purchase-title>
        <div class="product-table">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="商品信息"
                        width="500">
                    <template slot-scope="scope">
                        <shopping-cart-item :item="scope.row" :show_price="false"></shopping-cart-item>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="size"
                        label="尺码"
                        width="auto">
                </el-table-column>
                <el-table-column
                        prop="productPrice"
                        label="单价"
                        width="auto"
                >
                </el-table-column>
                <el-table-column
                        prop="inventoryCount"
                        label="数量"
                        width="auto"
                >
                </el-table-column>
            </el-table>
            <div class="total-price"><strong>商品金额：￥13000</strong></div>
        </div>
        <purchase-title>购买方式</purchase-title>
        <div class="purchase-way">
            <div class="delivery-way">
                <span class="purchase-title"> 配送方式：</span>
                <el-radio-group v-model="delivery">
                    <el-radio :label="3">顺丰</el-radio>
                    <el-radio :label="6">平邮</el-radio>
                    <el-radio :label="9">EMS</el-radio>
                </el-radio-group>
            </div>
            <div class = purchase-bank>
                <div class="pay-way">
                    <span class="purchase-title"> 支付方式：</span>
                    <el-radio-group v-model="purchase">
                        <el-radio :label="3">
                            <img class="pay-img" :src="unionpay">
                        </el-radio>
                        <span class="recommend">推荐方式</span>
                        <el-radio :label="6">
                            <img class="pay-img"  :src="alipay">
                        </el-radio>
                        <el-radio :label="9">
                            <img class="pay-img" :src="wechat">
                        </el-radio>
                        <el-radio :label="12">
                            <img class="pay-img" :src="bank_card">
                        </el-radio>
                    </el-radio-group>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="summary">
            <div>商品金额：￥13000</div>
            <div>运费：￥0</div>
            <div class="sum-price">待支付： ￥13000</div>
            <div>送货至：{{this.getAddressList[selectAddressIndex] ? this.getAddressList[selectAddressIndex].detail : ''}} </div>
            <div>
                <custom-button class="submit-order">提交订单</custom-button>
            </div>
        </div>

        <el-dialog
                :visible.sync="dialogVisible"
                width="80%"
                :before-close="handleClose">
            <address-form  :show_btn="true"></address-form>
        </el-dialog>
    </div>
</template>
<script>
    import PurchaseTitle from "../other/PurchaseTitle";
    import AddressCard from "../other/AddressCard";
    import AddAddress from "../other/AddAddress";
    import AddressForm from "../address/AddressForm";
    import ShoppingCartItem from "../product/ShoppingCartItem";
    import CustomButton from "../other/CustomButton";
    import {addressList} from '@/api/api.js'
    import { mapGetters,mapMutations } from 'vuex'
    import {fetchProductList} from "@/api/api";
    import alipay from '@/assets/image/payment/alipay.png'
    import bank_card from '@/assets/image/payment/bank_card.png'
    import wechat from '@/assets/image/payment/wechat.png'
    import unionpay from '@/assets/image/payment/unionpay.png'

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
                tableData: [],
                delivery: '',
                purchase:'',
                alipay: alipay,
                wechat:wechat,
                unionpay: unionpay,
                bank_card: bank_card,
            }
        },
        components:{
            CustomButton,
            AddressForm,
            AddAddress,
            PurchaseTitle,
            AddressCard,
            ShoppingCartItem,
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
            if(!this.$store.state.fetchAddress){
                addressList({},(res)=>{
                    _this.$store.state.fetchAddress = true
                    _this.setAddressList(res.data)
                })
            }

            fetchProductList({categoryId: '10002',pageNum:1,pageSize:20},(res)=>{
                this.tableData = res.data
            })
            // payType((res)=>{
            //     console.log(res)
            // })
        }
    }
</script>
<style scoped>
    .purchase-content{
        width:1200px;
        margin:auto;
        background:white;
        margin-top: 50px;
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
    .product-table{
        padding:30px;
    }
    .product-table /deep/ .product-name{
        width:auto;
    }
    /*.product-table /deep/ .el-table th{*/
    /*    text-align:center;*/
    /*}*/
    .total-price{
        text-align: right;
        padding-top: 30px;
    }
    .purchase-way{
        padding:0px 30px;
    }
    .delivery-way,.pay-way{
        text-align:left;
        font-size:16px;
        padding:30px 0;
    }
    .delivery-way{
        border-bottom: 1px dashed #DEDBDC;

    }
    .purchase-title{
        padding-right: 30px;
    }
    .delivery-way /deep/ .el-radio{
        vertical-align: middle;
    }
    .pay-img{
        vertical-align: middle;
    }
    .recommend{
        font-size: 14px;
        vertical-align: middle;
        padding-right: 15px;
    }
    .divider{
        height: 30px;
        background-color: #EFECF0;
    }
    .summary{
        padding: 30px 30px;
        text-align: right;
        /*margin-top:50px;*/
        margin-bottom:300px;
    }
    .sum-price{
        font-weight: bold;
        font-size: 20px;
    }
    .submit-order{
        margin-top:30px;
    }

</style>

