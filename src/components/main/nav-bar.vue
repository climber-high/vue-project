<template>
    <div>
        导航
        <slot :data="pLanguage">
            <ul>
                <li v-for="(item,index) in pLanguage" :key="index">{{item}}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pLanguage:['java','python','javaScript']
            }
        },
    }
</script>

<style lang="scss">
    
</style>
