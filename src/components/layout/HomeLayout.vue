<template>
    <div>
        <layout-header>
            <home-search></home-search>
        </layout-header>
        <router-view></router-view>
        <layout-footer>
            <icp-info></icp-info>
        </layout-footer>
    </div>
</template>
<script>
    import LayoutFooter from "./LayoutFooter";
    import LayoutHeader from "./LayoutHeader";
    import HomeSearch from "./HomeSearch";
    import IcpInfo from "./IcpInfo";
    export default {
        name: 'HomeLayout',
        components: {
            LayoutFooter,
            LayoutHeader,
            HomeSearch,
            IcpInfo
        },
    }
</script>
