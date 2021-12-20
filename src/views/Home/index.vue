<template>
  <div>
    <h2>vant-ui部分</h2>
    <div class="item">
      <van-button type="primary" @click="goToPage('/list')">下拉刷新，上拉加载</van-button>
      <van-button type="primary" @click="goToPage('/loadingmodal')">loading遮盖层</van-button>
      <van-button type="primary" @click="goToPage('/select')">下拉封装</van-button>
    </div>
    <h2>常用组件</h2>
    <div class="item">
      <van-button type="primary" @click="goToPage('/echarts')">echarts图表</van-button>
      <van-button type="primary" @click="goToPage('/addresslist')">通讯录</van-button>
      <van-button type="primary" @click="goToPage('/chat')">微信聊天</van-button>
      <van-button type="primary" @click="goToPage('/amap')">高德地图</van-button>
      <van-button type="primary" @click="goToPage('/bmap')">百度地图</van-button>
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
  align-items: center;
  flex-wrap: wrap;
  .van-button {
    margin: 10px;
  }
}
</style>