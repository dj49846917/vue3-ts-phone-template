<template>
  <div class="container">
    <van-nav-bar
      title="通讯录"
      left-arrow
      @click-left="goBack()"
      class="nav"
    />
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
      goBack,
    };
  }
})
</script>

<style scoped>

</style>