<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="百度地图" left-arrow @click-left="goBack()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  setup () {
    const router = useRouter();
    function goBack() {
      router.back();
    }
    return {
      goBack
    }
  }
})
</script>

<style scoped>

</style>