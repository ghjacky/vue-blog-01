<template>
    <div id="content_right_tags" class="content_right_item">
        <div><span class="content_right_item_title">标签</span></div>
        <div id="content_right_tags_square">
            <span class="content_right_tags_item" v-for="(tag,index) in tags" :key="index">
                <span class="content_right_tag_name">{{tag.name}}</span>
                <span class="content_right_tag_total">{{tag.total}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tags",
        data() {
            return {
                tags: [
                    { name: 'glang', total: 20 },
                    { name: 'C++', total: 6 },
                    { name: 'Mysql', total: 12 },
                    { name: 'Python', total: 2 },
                    { name: 'Linux', total: 9 },
                    { name: '人文', total: 1 },
                    { name: '美股', total: 21 },
                    { name: 'k8s', total: 13 },
                    { name: 'docker', total: 32 },
                    { name: 'Vue', total: 9 },
                    { name: 'gin', total: 19 },
                    { name: 'gorm', total: 34 },
                    { name: '人文', total: 1 },
                    { name: '美股', total: 21 },
                    { name: 'k8s', total: 13 },
                    { name: 'docker', total: 32 },
                    { name: '人工智能', total: 7 },
                    { name: 'Vue', total: 9 },
                    { name: 'gin', total: 19 },
                    { name: 'gorm', total: 34 }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/style";
</style>