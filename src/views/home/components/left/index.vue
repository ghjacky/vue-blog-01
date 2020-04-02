<template>
    <div id="content_left">
        <profile></profile>
        <categories></categories>
        <links></links>
    </div>
</template>

<script>
    import Links from "@/views/home/components/left/links";
    import Profile from "@/views/home/components/left/profile";
    import Categories from "@/views/home/components/left/categories";

    export default {
        name: "left",
        components: {Links, Profile, Categories}
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>