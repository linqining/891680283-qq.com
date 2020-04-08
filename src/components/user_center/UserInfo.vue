<template>
    <div class="user-info">
        <div class="first-block">
            <img class="avatar" src="http://www.cqrzm.com/repo/tb/chugui/589679951859/thumb/O1CN0142MPBc2N0hyon8gKy_!!0-item_pic.jpg_60x60q90.jpg">
            <div class="name-block">
                <div class="user-name">用户名：{{this.ruleForm.userName}}</div>
                <div class="nick-name">昵称：{{this.ruleForm.nickName}}</div>
            </div>
        </div>
        <div class="user-info-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="昵称"  prop="nickName">
                    <el-input v-model="ruleForm.nickName"></el-input>
                </el-form-item>
                <el-form-item label="用户名"  prop="userName">
                    <el-input v-model="ruleForm.userName"></el-input>
                </el-form-item>

                <el-form-item label="性别"  prop="gender">
                    <el-radio v-model="ruleForm.gender" :label="0">男</el-radio>
                    <el-radio v-model="ruleForm.gender" :label="1">女</el-radio>
                </el-form-item>

                <el-form-item label="手机号" prop="phoneNum">
                    <el-input v-model="ruleForm.phoneNum"></el-input>
                </el-form-item>

                <el-form-item label="生日"  prop="bir_temp">
                    <el-date-picker
                            v-model="ruleForm.bir_temp"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>


                <!--                    <el-form-item label="所在地区" >-->
                <!--                        <el-cascader :props="props" v-model="region" @change="changeRegion"></el-cascader>-->
                <!--                    </el-form-item>-->

            </el-form>
            <custom-button class="submit-btn" @click.native="submitForm('ruleForm')">保存</custom-button>
        </div>

    </div>
</template>
<script>

    import CustomButton from "../other/CustomButton";
    let dateFormat = require('dateformat');

    import {userEdit,userInfo} from "@/api/api";

    export default{
        name: 'UserInfo',
        components: {CustomButton},
        data(){
            return{
                ruleForm:{
                    "address":'',
                    "id": "",
                    "userName": "",
                    "email": "",
                    "phoneNum": "",
                    "nickName": "",
                    "gender": 0,
                    "birthday": '',
                    'bir_temp': new Date(),
                },
                rules: {
                    nickName: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },

                    ],
                    gender:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    phoneNum:[
                        { type: 'string'},
                        { min: 11, max: 11, message: '手机号码长度不正确', trigger: 'blur' }

                    ],
                    bir_temp: [
                        { type:'date',required: true, message: '请选择生日', trigger: 'blur' }
                    ],
                    email: [
                        { type:'email',message: '请输入正确的邮箱', trigger: 'blur' },
                    ],
                },
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    this.ruleForm.birthday = dateFormat(this.ruleForm.bir_temp,'isoDate')
                    if (valid) {
                        userEdit(this.ruleForm,(res)=>{
                            if(res.errmsg==='ok'){
                                this.$message.success('更新成功')
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
        },
        created(){
            userInfo((res)=>{
                res.data.bir_temp = new Date(res.data.birthday)
                this.ruleForm=res.data

                // this.ruleForm.bir_temp = new Date()
                this.ruleForm.gender = parseInt(this.ruleForm.gender)
            })
        }
    }
</script>
<style scoped>
    .user-info{
        width:100%;
        height:100%;
        min-height: 600px;
        background-color: white;
        padding: 30px 50px;
    }
    .first-block{
        padding-bottom: 50px;
        border-bottom:1px dashed #DEDBDC;
        text-align:left;
    }
    .avatar{
        width:100px;
        height:100px;
    }
    .name-block{
        display:inline-block;
        margin-left: 30px;
        line-height:20px;
    }
    .nick-name,.user-name{
        padding: 5px 0;
    }
    .user-info-form{
        margin-top:30px;
        text-align:left;
    }
    .submit-btn{
        margin-left: 50px;
    }
</style>
