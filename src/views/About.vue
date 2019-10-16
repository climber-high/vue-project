<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import url,{title} from '@/common/config' 

export default {
  data(){
    return{
      msg:url.baseUrl+""+title
    };
  }
};
</script>

<style lang="scss">
  
</style>