<template>
    <div>
        <layout-header>
            <div slot="top-links">
                <top-links></top-links>
            </div>
        </layout-header>
        <home-search></home-search>
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
    import TopLinks from "./TopLinks"
    export default {
        name: 'HomeLayout',
        components: {
            LayoutFooter,
            LayoutHeader,
            HomeSearch,
            IcpInfo,
            TopLinks
        },
    }
</script>
