<template>
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
                    <input type="password" v-model="form.password" placeholder="密码">
                </div>
            </div>
        </el-form>
        <button class="submit-btn" @click="login">登录</button>
        <div class="forget-password"><span><router-link to="/">忘记密码</router-link></span></div>
    </el-card>
</template>
<script>
    import logincss from '@/assets/components/login/form.css'
    import {userLogin} from "@/api/api";

    export default{
        name: 'Login',
        data(){
            return{
                form:{
                    userName:'',
                    password: '',
                },
                logincss: logincss,
            }
        },
        methods:{
            login(){
                userLogin(this.form,(res)=>{
                    if(res.errcode==='000001'){
                        this.$message.error(res.errmsg)
                    }else{
                        this.$store.state.isLogin = true
                        localStorage['cartItems'] =[]
                        this.$store.state.cartItems=[]
                        this.$message.success('登录成功！')
                        this.$router.push({name:'Home'})
                    }
                })
            }
        }
    }
</script>
<style :src="logincss" scoped>
</style>
