<template>
    <div id="content_center">
        <div class="content_center_item" v-for="(post,index) in posts" :key="index">
            <el-image :src="post.cover"></el-image>
            <div class="content_center_item_content">
                <div class="content_center_item_stuff">
                    <span style="margin-right: 15px">{{post.date}}</span><span v-for="(cate,index) in post.categories" :key="index">{{cate}}</span>
                </div>
                <p class="content_center_item_title">{{post.title}}</p>
                <p class="content_center_item_summary">{{post.summary}}</p>
                <el-button size="mini">阅读更多</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "center",
        data() {
            return {
                posts: [
                    {
                        title: 'SYao v1.0 正式发布',
                        summary: 'Morioh is the place to create a Great Personal Brand, connect with Developers around the World and grow your Career! Let\'s write, share knowledge and earn GeekCash.',
                        date: '2020-04-02',
                        categories: ['学习笔记'],
                        cover: 'http://seopic.699pic.com/photo/50109/1357.jpg_wh1200.jpg'
                    },
                    {
                        title: 'SYao v2.0 正式发布',
                        summary: 'Are they the same? Not really! Unlike SASS variables, custom properties 1) are scoped to the element they are declared on, 2) cascade and 3) can be manipulated in JavaScript. These three features open a whole new world of possibilities. Let me show you some practical examples!',
                        date: '2020-04-03',
                        categories: ['学习笔记'],
                        cover: 'http://seopic.699pic.com/photo/50109/1360.jpg_wh1200.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>