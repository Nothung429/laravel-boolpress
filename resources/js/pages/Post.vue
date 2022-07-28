<template>
    <div v-if="post" class="container">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
        <p v-if="post.category">{{post.category.name}}</p>
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