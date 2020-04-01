<template>
    <div>
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import LayoutHeader from "./LayoutHeader";
    import LayoutFooter from "./LayoutFooter";
    export default {
        name: 'Layout',
        components: {
            LayoutHeader,
            LayoutFooter,
        },


    }
</script>
