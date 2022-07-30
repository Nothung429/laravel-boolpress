<template>
    <div v-if="post" class="container">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
        <p v-if="post.category">{{post.category.name}}</p>
        <img v-if="post.image" :src="`/storage/${post.image}`" :alt="post.title">
        <div v-if="post.tags.length > 0">
            <h4>Tag List</h4>
            <ul>
                <li v-for="tag in post.tags" :key="tag.id">{{tag.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        data() {
            return {
                post: [],
            }
        },
        created() {
            axios.get(`/api/posts/${this.$route.params.slug}`)
            .then((response) => {
                this.post = response.data;
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>