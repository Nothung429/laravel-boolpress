<template>
    <div>
        <BaseHeader/>
        <BaseMain/>
        <BaseFooter/>
    </div>
</template>

<script>
    import BaseHeader from '../components/blocks/BaseHeader.vue';
    import BaseMain from '../components/blocks/BaseMain.vue';
    import BaseFooter from '../components/blocks/BaseFooter.vue';

    export default {
        name: 'App',
        components: {
            BaseHeader,
            BaseMain,
            BaseFooter
        },
    }
</script>