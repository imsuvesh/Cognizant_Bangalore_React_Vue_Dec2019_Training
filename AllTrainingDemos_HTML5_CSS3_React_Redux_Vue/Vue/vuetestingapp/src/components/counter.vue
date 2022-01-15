<template>
    <div>
<h3>Current Count : {{count}} </h3>
<input type="button" value="+" 
@click="IncrementCount" />
    </div>
</template>
<script>
    export default {
        name:'Counter',
        data(){
            return { 
                count:0
            }
        },methods:{
            IncrementCount(){
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>