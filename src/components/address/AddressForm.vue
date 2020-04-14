<template>
    <div class="address-form">
        <purchase-title>新增地址</purchase-title>


        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收货人" required prop="linkName">
                <el-input v-model="ruleForm.linkName"></el-input>
            </el-form-item>
            <el-form-item label="手机号" required prop="phoneNum">
                <el-input v-model="ruleForm.phoneNum"></el-input>
            </el-form-item>


            <el-form-item label="所在地区" >
                <el-cascader :props="props" v-model="region" @change="changeRegion"></el-cascader>
            </el-form-item>

            <el-form-item label="详细地址" required prop="detail">
                <el-input v-model="ruleForm.detail"></el-input>
            </el-form-item>


<!--            TODO缺少地址类型字段-->
<!--            <el-form-item label="地址类型" prop="resource">-->
<!--                <el-radio-group v-model="ruleForm.resource">-->
<!--                    <el-radio label="线上品牌商赞助"></el-radio>-->
<!--                    <el-radio label="线下场地免费"></el-radio>-->
<!--                </el-radio-group>-->
<!--            </el-form-item>-->

            <el-form-item>
                <el-checkbox v-model="checked">设为默认地址</el-checkbox>
            </el-form-item>

            <el-form-item >
                <el-button class="submit" @click="submitForm('ruleForm')">保存</el-button>
                <el-button  class="cancel" v-if="show_btn" @click="$store.state.addressSuccess = true">取消</el-button>
            </el-form-item>


        </el-form>
    </div>
</template>
<script>
    import PurchaseTitle from "../other/PurchaseTitle";
    import {provinceList,cityList,areaList,createAddress} from "@/api/api";
    import {mapMutations,mapGetters} from 'vuex'

    export default{
        name: 'AddressForm',
        components: {PurchaseTitle},
        watch:{
            checked(){
                this.ruleForm.firstAddress = this.checked ? 0 : 1
            },
            getAddressSubmit(){
                if(this.getAddressSubmit){
                    this.submitForm('ruleForm')
                    this.$store.state.addressSubmit = false
                }
            }
        },
        computed: {
            ...mapGetters([
                'getAddressSubmit'
            ])
        },
        props:{
          show_btn:{
              type: Boolean,
              default: false
          }
        },
        data(){
            return{
                ruleForm:{
                    "address": "",
                    "positalCode": "",
                    "phoneNum": "",
                    "linkName": "",
                    "userId": "",
                    "firstAddress": 0,
                    "provinceId": "",
                    "cityId": "",
                    "areaId": "",
                    "detail": "",
                    "remark": ""
                },
                rules: {
                    linkName: [
                        { required: true, message: '请输入收货人', trigger: 'blur' },
                    ],
                    phoneNum: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { min: 11, max: 11, message: '手机号码长度不正确', trigger: 'blur' }
                    ],
                    region: [
                        { type: 'array', required: true, message: '请选择区域', trigger: 'blur' }
                    ],
                    detail: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ],
                },
                region:[],
                provinceId:'',
                checked: false,
                props: {
                    lazy: true,
                    lazyLoad(node, resolve) {
                        const {level} = node;
                        if(level===0){
                            provinceList((res)=>{
                                const nodes = res.data.map((item)=>({
                                    value: item.provinceId,
                                    label: item.province,
                                }))
                                resolve(nodes)
                            })
                        }else if(level===1){
                            cityList(node.value,(res)=>{
                                const nodes = res.data.map((item)=>({
                                    value: item.cityId,
                                    label: item.city,
                                }))
                                resolve(nodes)
                            })
                        }else if(level===2){
                            areaList(node.value,(res)=>{
                                const nodes = res.data.map((item)=>({
                                    value: item.areaId,
                                    label: item.area,
                                    leaf: true
                                }))
                                resolve(nodes)
                            })
                        }
                    }
                }
            }
        },
        methods:{
            submitForm(formName){
                let _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        createAddress(this.ruleForm,(res)=>{
                            if(res.errmsg==='ok'){
                                this.$message.success('新增地址成功')
                                _this.addAddressList(res.data)
                                _this.$store.state.addressSuccess = true
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(){

            },
            changeRegion(param){
                this.ruleForm.provinceId = param[0]
                this.ruleForm.cityId = param[1]
                this.ruleForm.areaId = param[2]
            },
            ...mapMutations(['addAddressList'])

        }
    }
</script>
<style scoped>
    .address-form{
        text-align:left;
    }
    .demo-ruleForm{
        margin-top:30px;
    }
    button.submit,button.cancel{
        border-radius:0px;
    }
    button.submit{
        background-color: #7C9AB4;
        color:white;
    }

    button.submit:hover,button.cancel:hover{
        background-color: transparent;
        color:black;
        border:1px solid #DCDFE6;
    }
    button.submit:hover{
        color:white;
    }
</style>
