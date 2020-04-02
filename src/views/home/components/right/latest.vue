<template>
    <div id="content_right_latest" class="content_right_item">
        <div><span class="content_right_item_title">最新文章</span></div>
        <div class="content_right_latest_item" v-for="(lpost,index) in latestPosts" :key="index">
            <el-avatar class="content_right_latest_post_cover" :size="50" shape="square" :src="lpost.cover"></el-avatar>
            <div class="content_right_latest_post_item">
                <span class="content_right_latest_post_date">{{lpost.date}}</span>
                <span class="content_right_latest_post_title">{{lpost.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "latest",
        data() {
            return {
                latestPosts: [
                    {
                        title: 'Halo v1.0 正式发布',
                        date: '2020-04-02',
                        cover: 'http://seopic.699pic.com/photo/50109/1357.jpg_wh1200.jpg'
                    },
                    {
                        title: 'Halo v2.0 正式发布',
                        date: '2020-04-03',
                        cover: 'http://seopic.699pic.com/photo/50109/1360.jpg_wh1200.jpg'
                    },
                    {
                        title: 'Halo v1.0 正式发布',
                        date: '2020-04-02',
                        cover: 'http://seopic.699pic.com/photo/50109/1357.jpg_wh1200.jpg'
                    },
                    {
                        title: 'Halo v2.0 正式发布',
                        date: '2020-04-03',
                        cover: 'http://seopic.699pic.com/photo/50109/1360.jpg_wh1200.jpg'
                    },
                    {
                        title: 'Halo v1.0 正式发布',
                        date: '2020-04-02',
                        cover: 'http://seopic.699pic.com/photo/50109/1357.jpg_wh1200.jpg'
                    },
                    {
                        title: 'Halo v2.0 正式发布',
                        date: '2020-04-03',
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