<template>
    <div>
        <layout-header-with-search></layout-header-with-search>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import LayoutFooter from "./LayoutFooter";
    import LayoutHeaderWithSearch from "./LayoutHeaderWithSearch";
    export default {
        name: 'HomeLayout',
        components: {
            LayoutFooter,
            LayoutHeaderWithSearch
        },
    }
</script>
