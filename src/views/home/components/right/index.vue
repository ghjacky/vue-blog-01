<template>
    <div id="content_right">
        <latest></latest>
        <Tags></Tags>
    </div>
</template>

<script>
    import Latest from "@/views/home/components/right/latest";
    import Tags from "@/views/home/components/right/tags";

    export default {
        name: "right",
        components: {Latest, Tags}
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>