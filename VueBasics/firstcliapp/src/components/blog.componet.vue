<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <article> <slot name="mainarticle"></slot></article>
        <footer><slot name="footer>"></slot></footer>
    </div>
</template>

<script>
    export default {
        name:'blog'
    }
</script>

<style lang="scss" scoped>

</style>