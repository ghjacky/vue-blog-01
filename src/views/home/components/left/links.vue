<template>
    <div id="content_left_links" class="content_left_item">
        <div><span id="links_title">链接</span></div>
        <span v-for="(link, index) in links" :key="index" class="links_item"><p
                class="links_item_name">{{link.name}}</p><p
                class="links_item_total">{{link.link}}</p></span>
    </div>
</template>

<script>
    export default {
        name: "links",
        data() {
            return {
                links: [
                    {name: '大尧的微博', link: 'http://dayao.org'},
                    {name: '大超的博客', link: 'http://dachao.com'},
                    {name: '波波的Vlog', link: 'http://bobo.net'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>