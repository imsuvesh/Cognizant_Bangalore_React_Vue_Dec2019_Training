<template>
    <div>
        <h1>Post Deatails</h1>
    </div>
</template>

<script>
    export default {
        name:'postdetails',
        data(){
            return{
                postId:this.$route.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>