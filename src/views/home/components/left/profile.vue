<template>
    <div id="content_left_profile" class="content_left_item">
        <el-avatar :src="user.avatar" :size="120"></el-avatar>
        <p id="profile_name">{{user.name}}</p>
        <p id="profile_creed">{{user.creed}}</p>
        <i class="el-icon-map-location"></i>
        <p id="profile_address">{{user.address}}</p>
        <div id="profile_count_items">
            <span id="profile_count_posts" class="profile_count">
                <p class="profile_count_label">文章</p>
                <p class="profile_count_value">{{user.posts}}</p>
            </span>
            <span id="profile_count_categories" class="profile_count">
                <p class="profile_count_label">分类</p>
                <p class="profile_count_value">{{user.categories}}</p>
            </span>
            <span id="profile_count_tags" class="profile_count">
                <p class="profile_count_label">标签</p>
                <p class="profile_count_value">{{user.tags}}</p>
            </span>
        </div>
        <el-button round type="primary" size="mini" style="width: 89%">关注我</el-button>
        <div id="profile_feedback">
            <font-awesome-icon v-for="(fb,index) in user.feedbacks" :key="index" :icon="feedbackMap[fb]"
                               class="profile_font_awesome_icon" style="cursor: pointer"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
    const avatar = require('@/assets/lufei.jpg')
    export default {
        name: "profile",
        data() {
            return {
                user: {
                    avatar: avatar,
                    name: 'MyGuo',
                    address: 'Beijing',
                    creed: 'Life is fantastic',
                    posts: 40,
                    categories: 5,
                    tags: 30,
                    feedbacks: ['github', 'qq', 'twitter', 'facebook', 'weibo', 'weixin']
                },
                feedbackMap: {
                    'github': ['fab', 'github'],
                    'qq': ['fab', 'qq'],
                    'twitter': ['fab', 'twitter'],
                    'facebook': ['fab', 'facebook'],
                    'weibo': ['fab', 'weibo'],
                    'weixin': ['fab', 'weixin']
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>