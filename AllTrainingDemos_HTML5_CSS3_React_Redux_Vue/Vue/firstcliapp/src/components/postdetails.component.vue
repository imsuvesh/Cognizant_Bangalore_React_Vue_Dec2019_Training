<template>
    <div>
        <h1>Post Details for {{postId}}</h1>
        <strong>User Id : {{thePost.userId}}</strong><br/>

        <strong>Title : {{thePost.title}}</strong><br/>
        <strong>Body : {{thePost.body}}</strong><br/>

    </div>
</template>

<script>
    export default {
        name:'postdetails',
        data(){
            return {
                postId:this.$route.params.id,
                thePost:{}
            }        
        },
        beforeMount(){
          this.thePost =   JSON.parse(localStorage["posts"]).find(p=> p.id == this.postId)
        }
    }
</script>

<style scoped>

</style>