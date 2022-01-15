<template>
    <div>
        <div class="jumbotron">
            <h1>All Posts</h1>
        </div>
        <ul>
            <li v-for="p in allposts" :key="p.id">
                <router-link :to="{name:'postdetails'{{p.title}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'posts',
        data(){
            return {
                allposts:[]
            }
        },
        mounted(){
            //ajax request
            axios.get('https://jsonplaceholder.typicode.com/posts').then(
                response => this.allposts =response.data
            )
        }
        
    }
</script>

<style lang="scss" scoped>

</style>