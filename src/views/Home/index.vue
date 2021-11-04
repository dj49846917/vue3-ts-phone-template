<template>
  <div>
    <div class="item">
      <van-button type="primary" @click="goToPage('/list')">下拉刷新，上拉加载</van-button>
      <van-button type="primary" @click="goToPage('/loadingmodal')">loading遮盖层</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    function goToPage(path:string):void {
      router.push(path)
    }
    return {
      goToPage
    };
  },
})
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-button {
    margin-top: 10px;
  }
}
</style>