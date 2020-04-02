<template>
    <div id="footer">
<!--        <img :src="footContact">-->
        <div class="footer-image"></div>
        <div class="footer-container">
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
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import logo from '@/assets/image/layout/logo.png'
    import footContact from '@/assets/image/layout/foot-contact.png'
    export default {
        name: 'LayoutFooter',
        data(){
            return{
                logo: logo,
                footContact: footContact
            }
        }
    }
</script>
<style scoped>
    #footer{
        /*position:fixed;*/
        bottom:0px;
        width:100%;
    }
    .footer-container{
        width:1200px;
        margin:auto;
    }
    .footer-image{
        height:398px;
        background-image: url("~@/assets/image/layout/foot-contact.png");
        background-position: bottom;
        min-width: 1200px;
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

    .links-cat{
        display: flex;
    }
    .links-cat li{
        flex:1;
        list-style: none;
        text-align: left;
    }
    .links-cat-title{
        margin-bottom:14px;
        font-size: 20px;
        font-weight: bold;
    }
    .links-list{
        text-align:left;
        padding: 0px;
        font-size:14px;
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
        width:1200px;
        padding:30px 0;
    }
    .registration-wrapper{
        margin:auto;
        color:white;
    }

</style>
