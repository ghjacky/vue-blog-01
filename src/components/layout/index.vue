<template>
    <div id="layout">
        <l-header></l-header>
        <l-content></l-content>
        <l-footer></l-footer>
    </div>
</template>

<script>
    import LHeader from "@/components/layout/header/index";
    import LContent from "@/components/layout/content/index";
    import LFooter from "@/components/layout/footer/index";

    export default {
        name: "index",
        components: {LFooter, LContent, LHeader}
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>