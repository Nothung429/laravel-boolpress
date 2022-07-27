<template>
    <div class="container">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        data() {
            return {
                post: null
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

<style>

</style> 