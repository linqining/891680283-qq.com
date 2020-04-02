<template>
    <div>
        <layout-header :show-menu="false" :show-order="false"></layout-header>
        <router-view></router-view>
        <icp-info></icp-info>
    </div>
</template>
<script>
    import LayoutHeader from "./LayoutHeader";
    import IcpInfo from "./IcpInfo";
    export default {
        name: 'Layout',
        components: {
            IcpInfo,
            LayoutHeader,
        },
    }
</script>

<style>
    .icp-info{
        /*position:absolute;*/
        bottom:0px;
        /*width:100%;*/
    }
</style>
