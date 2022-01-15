<template>
    <div>
        <header>
            <!-- Named Slots -->
            <slot name="header"></slot>
        </header>
        <article>
            <!-- Default Slot -->
            <slot>
                <span>Content not available !</span><!--  Slot Defaults -->
            </slot>
        </article>
        <footer>    
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'blog'
    }
</script>

<style scoped>

</style>