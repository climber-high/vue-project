<template>
    <div>
        <h1>第一个组件</h1>
        <input type="text" v-model="$store.getters.show">
        <input type="button" @click="add">
    </div>
</template>

<script>
export default {
   data() {
       return {
           count:0
       }
   },
   methods: {
       add(){
           this.$store.commit('add',2)
       }
   },
}
</script>

<style scoped lang="scss">
   
</style>