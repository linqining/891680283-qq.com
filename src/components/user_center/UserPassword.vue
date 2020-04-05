<template>
    <div class="user-password">
        <div class="form-wrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="当前密码"  prop="password">
                    <el-input type="password" v-model="ruleForm.password" class="pass-field"></el-input>
                </el-form-item>
                <el-form-item label="新密码"  prop="newPassword">
                    <el-input type="password" v-model="ruleForm.newPassword" class="pass-field"></el-input>
                    <span class="hint-text">密码长度6-14位，字母区分大小写</span>
                </el-form-item>

                <el-form-item label="确认密码"  prop="passConfirm">
                    <el-input type="password" v-model="ruleForm.passConfirm" class="pass-field"></el-input>
                </el-form-item>
            </el-form>
            <custom-button class="submit-btn" @click.native="submitForm('ruleForm')">保存</custom-button>
        </div>
    </div>
</template>
<script>
    import {changePassword} from "@/api/api";
    import CustomButton from "../other/CustomButton";

    export default{
        name: 'UserPassword',
        components:{
            CustomButton
        },
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.passConfirm !== '') {
                        this.$refs.ruleForm.validateField('passConfirm');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
          return{
              ruleForm:{
                  userName:'',
                  password:'',
                  newPassword:'',
                  passConfirm:''
              },
              rules: {
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                  ],

                  newPassword: [
                      { required: true, message: '请输入新密码', trigger: 'blur' },
                      { validator: validatePass, trigger: 'blur' }
                  ],
                  passConfirm: [
                      { required: true, message: '请重新输入密码', trigger: 'blur' },
                      { validator: validatePass2, trigger: 'blur' }
                  ],
              },
          }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        changePassword(this.ruleForm,(res)=>{
                            if(res.errmsg==='ok'){
                                this.$message.success('修改成功')
                            }
                        })
                    } else {
                        return false;
                    }
                });

            }
        }
    }
</script>
<style scoped>
    .user-password{
        background:white;
        min-height: 600px;
    }
    .form-wrap{
        text-align:left;
        padding: 50px;
    }
    .pass-field{
        width:50%;
    }
    .hint-text{
        margin-left:25px;
    }
    .submit-btn{
        margin-left:100px;
    }
</style>
