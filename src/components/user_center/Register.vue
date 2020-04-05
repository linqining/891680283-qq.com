<template>
    <el-card class="box-card">
        <div class="login-title"><span>注册</span></div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-user-solid"></span>
                    </div>
                    <input v-model="form.userName" placeholder="帐号">
                </div>
            </div>
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-message"></span>
                    </div>
                    <input v-model="form.email" placeholder="邮箱">
                </div>
            </div>
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-phone"></span>
                    </div>
                    <input v-model="form.phoneNum" placeholder="手机号">
                </div>
            </div>
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-lock"></span>
                    </div>
                    <el-form-item  prop="password">
<!--                        <input v-model="form.password" type="password" placeholder="密码">-->

                        <el-input type="password" v-model="form.password" class="pass-field">
<!--                            <template slot="prepend"><span class="el-icon-lock"></span></template>-->
                        </el-input>
                    </el-form-item>
<!--                    <input v-model="form.password" type="password" placeholder="密码">-->
                </div>
            </div>
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-lock"></span>
                    </div>
                    <el-form-item  prop="passwordConfirm">
<!--                        <input v-model="form.passwordConfirm" type="password" placeholder="确认密码">-->

                        <el-input type="password" v-model="form.passwordConfirm" class="pass-field">
<!--                            <template slot="prepend"><span class="el-icon-lock"></span></template>-->
                        </el-input>
                    </el-form-item>
<!--                    <input v-model="form.passwordConfirm" type="password" placeholder="确认密码">-->
                </div>
            </div>
        </el-form>
        <button class="submit-btn" @click="register">注册</button>
    </el-card>
</template>
<script>
    import logincss from '@/assets/components/login/form.css'
    import {userRegister} from "@/api/api";

    export default{
        name: 'Register',
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.passwordConfirm !== '') {
                        this.$refs.form.validateField('passwordConfirm');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                form:{
                    userName:'',
                    password: '',
                    passwordConfirm:'',
                    email:'',
                    phoneNum:''
                },
                rules:{
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordConfirm: [
                        { required: true, message: '请重新输入密码', trigger: 'blur' },
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                },
                logincss: logincss,
            }
        },
        methods:{
            register(){
                let data={
                    userName: this.form.userName,
                    password: this.form.password,
                    email: this.form.email,
                    phoneNum: this.form.phoneNum
                }
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        userRegister(data,(response)=>{
                            console.log(response);
                            this.$message.success('注册成功！')
                        });
                    } else {
                        return false;
                    }
                });

            },
        }
    }
</script>
<style :src="logincss" scoped>
    .box-card{
        height:440px;
    }
    .input-container {
        padding: 4px 0;
    }
    .login-title {
        padding-bottom: 15px;
    }
    .el-form-item{
        margin-bottom: 0px;
    }
    .input-container /deep/ .el-form-item__content{
        margin:0 !important;
    }
    .el-form-item{
        display:inline-block;
    }

</style>
