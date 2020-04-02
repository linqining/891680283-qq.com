<template>
    <div class="login-bg">
        <img :src="loginBg" id="loginbg"/>
        <el-card class="box-card">
            <div class="login-title"><span>密码登录</span></div>
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
                            <span class="el-icon-lock"></span>
                        </div>
                        <input v-model="form.password" placeholder="密码">
                    </div>
                </div>
                <el-button class="submit-btn" @click="login">登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    import loginBg from '@/assets/image/user/loginbg.png'
    export default{
        name: 'Login',
        data(){
            return{
                loginBg: loginBg,
                form:{
                    userName:'',
                    password: '',
                }
            }
        },
        methods:{
            login(){

            }
        }
    }
</script>
<style scoped>
    #loginbg{
        width:100%;
        height:auto;
        max-height: 100%;
    }
    .login-bg{
        height: 579px;
        width:100%;
        background-size: cover;
        position:relative;
        min-width:1200px;
    }
    .box-card{
        width: 444px;
        position: absolute;
        height: 400px;
        top: 10%;
        right: 10%;
    }
    .login-title{
        font-size:24px;
        font-weight: bold;
        padding-top:25px;
        padding-bottom: 30px;
    }
    .input-container{
        padding: 15px 0px;
    }
    .login-input-group{
        display:inline-block;
        background-color: #d3d2d2;
    }
    .login-input-group .el-icon-user-solid,.login-input-group .el-icon-lock{
        height:100%;
    }
    .login-input-group input{
        height: 36px;
        width: 272px;
        text-indent: 14px;
    }
    .icon-wrap{
        width:36px;
        display:inline-block;
        background-color: #d3d2d2;
    }
    .submit-btn{
        width:312px;
        background-color: #f7c85c;
        border:none;
        height:42px;
        color: white;
        font-size: 20px;
        font-weight:bold;
        letter-spacing: 9px;
        margin-top:20px;
    }

</style>
