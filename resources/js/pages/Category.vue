<template>
    <div v-if="category" class="container">
        <h1>{{category.name}}</h1>
        <div v-if="category.posts.length > 0">
            <ul>
                <li v-for="post in category.posts" :key="post.id">
                    <p>{{post.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        data() {
            return {
                category: null
            }
        },
        created() {
            axios.get(`/api/categories/${this.$route.params.slug}`)
            .then((response) => {
                this.category = response.data
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>