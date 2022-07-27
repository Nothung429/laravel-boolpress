<template>
    <div class="container my-3">
        <ul class="row">
            <li class="col-4" v-for="post in posts" :key="post.slug">
                <div class="card p-2">
                    <h3>{{post.title}}</h3>
                    <p class="text-truncate">{{post.content}}</p>
                    <router-link :to="{ name: 'post', params: {slug: post.slug} }">View More</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PostSection',
        data() {
            return {
                posts: []
            };
        },
        created() {
            axios.get('/api/posts')
            .then((response) => {
                this.posts = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
        },
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        .card {
            border: 2px solid red;
            border-radius: 20px;
            padding: 0;
        }
    }
</style>