<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: 'BaseMain',
    }
</script>

<style lang="scss" scoped>
    main {
        height: calc(100vh - 116px);
    }
</style>