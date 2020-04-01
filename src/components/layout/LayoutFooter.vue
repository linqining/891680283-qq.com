<template>
    <div id="footer">
        <div class="footer-container">
            <div id="service-icon">
                <ul>
                    <li>
                        <img :src="logo">
                        <div class="icon-desc">值得信赖</div>
                    </li>
                    <li>
                        <img :src="logo">
                        <div class="icon-desc">品质保证</div>
                    </li>
                    <li>
                        <img :src="logo">
                        <div class="icon-desc">无忧退换货</div>
                    </li>
                    <li>
                        <img :src="logo">
                        <div class="icon-desc">闪电发货</div>
                    </li>
                    <li>
                        <img :src="logo">
                        <div class="icon-desc">贴心服务</div>
                    </li>
                </ul>
            </div>
            <div id="bottom-links">
                <ul class="links-cat">
                    <li>
                        <div class="links-cat-title">使用帮助</div>
                        <ul class="links-list">
                            <li>新手帮助</li>
                            <li>注册教学</li>
                        </ul>
                    </li>
                    <li>
                        <div class="links-cat-title">服务保障</div>
                        <ul class="links-list">
                            <li>品牌真品防伪码</li>
                            <li>正品保证</li>
                            <li>专属客服服务</li>
                        </ul>
                    </li>
                    <li>
                        <div class="links-cat-title">支付方式</div>
                        <ul class="links-list">
                            <li>在线支付</li>
                            <li>余额支付</li>
                            <li>现金券支付</li>
                        </ul>
                    </li>
                    <li>
                        <div class="links-cat-title">配送方式</div>
                        <ul class="links-list">
                            <li>包邮政策</li>
                            <li>配送说明</li>
                            <li>运费说明</li>
                            <li>验货签收</li>
                        </ul>
                    </li>
                    <li>
                        <div class="links-cat-title">售后服务</div>
                        <ul class="links-list">
                            <li>退换货流程</li>
                            <li>发票开具</li>
                            <li>品质保证</li>
                            <li>配送协议</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="contact-us">
                <div class="contact-wrapper">
                    <div class="contact-group">
                        <img :src="logo">
                        <div class="contact-detail">678279360</div>
                    </div>
                    <div class="contact-group">
                        <img :src="logo">
                        <div class="contact-detail">pabpkb@163.com</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="website-registration">
            <div class="registration-wrapper">
                test
            </div>
        </div>
    </div>
</template>
<script>
    import logo from '@/assets/image/layout/logo.png'
    export default {
        name: 'LayoutFooter',
        data(){
            return{
                logo: logo,
            }
        }
    }
</script>
<style scoped>
    #footer{
        position:fixed;
        bottom:0px;
        width:100%;
    }
    .footer-container{
        width:800px;
        margin:auto;
    }
    #service-icon ul{
        display: flex;
    }
    #service-icon ul li{
        list-style: none;
        flex: 1;
    }
    #service-icon::after,#bottom-links::after{
        border: 1px solid black;
        content:'';
        display:flex;
    }
    #bottom-links{
        /*height:33px;*/
    }
    .links-cat{
        display: flex;
    }
    .links-cat li{
        flex:1;
        list-style: none;
    }
    .links-list{
        text-align:left;
    }
    .links-cat::after{

    }
    .contact-group{
        display:inline-block;
    }
    #website-registration{
        background-color: black;
        margin:auto;
        width:100%;
    }
    .registration-wrapper{
        width:800px;
        padding:30px 0;
    }
    .registration-wrapper{
        margin:auto;
        color:white;
    }
</style>
