<template>
    <div class="container">
        <h1>Categories</h1>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <router-link :to="{ name: 'category', params: { slug: category.slug } }">{{category.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    data() {
        return {
            categories: []
        }
    },
    created() {
        axios.get('/api/categories')
        .then((response) => {
            this.categories = response.data;
        });
    }
}
</script>

<style lang="scss" scoped>

</style> 