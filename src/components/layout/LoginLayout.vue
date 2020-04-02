<template>
    <div>
        <layout-header :show-menu="false" :show-order="false"></layout-header>
        <div class="login-bg">
            <img :src="loginBg" id="loginbg"/>
            <router-view></router-view>
        </div>
        <icp-info></icp-info>
    </div>
</template>
<script>
    import LayoutHeader from "./LayoutHeader";
    import IcpInfo from "./IcpInfo";
    import loginBg from '@/assets/image/user/loginbg.png'

    export default {
        name: 'Layout',
        data(){
          return{
              loginBg: loginBg,
          }
        },
        components: {
            IcpInfo,
            LayoutHeader,
        },
    }
</script>

<style>
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
</style>
