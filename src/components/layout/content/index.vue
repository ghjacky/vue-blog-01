<template>
    <div id="content">
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
    export default {
        name: "LContent",
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

</style>