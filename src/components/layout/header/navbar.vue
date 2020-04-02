<template>
    <div id="nav_bar">
        <el-avatar :src="avatar" size="small" class="nav_bar_el"></el-avatar>
        <el-menu :default-active="defaultActiveIndex" mode="horizontal" @select="handleSelectNavItem" class="nav_bar_el"
                 active-text-color="#5FAAFF">
            <el-menu-item v-for="(nav,index) in navList" :key="index" :index="nav.index">{{nav.label}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    const avatar = require('@/assets/lufei.jpg')
    export default {
        name: "NavBar",
        data() {
            return {
                avatar,
                defaultActiveIndex: '1',
                navList: [
                    {label: '主页', index: '1'},
                    {label: '文章', index: '2'},
                    {label: '关于', index: '3'}
                ]
            }
        },
        methods: {
            handleSelectNavItem() {

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>