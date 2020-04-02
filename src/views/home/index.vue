<template>
    <div id="home">
        <leftside></leftside>
        <rightside></rightside>
        <ccenter></ccenter>
    </div>
</template>

<script>
    import leftside from "@/views/home/components/left/index";
    import rightside from "@/views/home/components/right/index";
    import ccenter from "@/views/home/components/center/index";

    export default {
        name: "index",
        components: {
            leftside,
            rightside,
            ccenter
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>