<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Post Incorporated</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link :to="{ name: 'home' }" class="px-3">Home</router-link>
                        <router-link :to="{ name: 'about' }" class="px-3">About</router-link>
                        <router-link :to="{ name: 'categories' }">Categories</router-link>
                        <a href="/admin/home" class="px-3">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'BaseHeader',
    }
</script>

<style lang="scss" scoped>

</style>