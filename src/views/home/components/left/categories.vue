<template>
    <div id="content_left_categories" class="content_left_item">
        <div><span id="categories_title">分类</span></div>
        <span v-for="(category, index) in categories" :key="index" class="categories_item"><p
                class="categories_item_name">{{category.name}}</p><p
                class="categories_item_total">{{category.total}}</p></span>
    </div>
</template>

<script>
    export default {
        name: "categories",
        data() {
            return {
                categories: [
                    {name: '日志', total: 4},
                    {name: '其他', total: 8},
                    {name: '学习笔记', total: 34},
                    {name: '未分类', total: 10},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>