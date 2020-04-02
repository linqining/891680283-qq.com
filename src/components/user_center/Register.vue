<template>
    <el-card class="box-card">
        <div class="login-title"><span>注册</span></div>
        <el-form ref="form" :model="form" label-width="80px">
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
                    <input v-model="form.password" type="password" placeholder="密码">
                </div>
            </div>
            <div class="input-container">
                <div class="login-input-group">
                    <div class="icon-wrap">
                        <span class="el-icon-lock"></span>
                    </div>
                    <input v-model="form.passwordConfirm" type="password" placeholder="确认密码">
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
            return{
                form:{
                    userName:'',
                    password: '',
                    passwordConfirm:'',
                    email:'',
                    phoneNum:''
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
                userRegister(data,(response)=>{
                    console.log(response);
                });
            }
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

</style>
