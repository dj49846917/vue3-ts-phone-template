<template>
  <van-overlay :show="show" duration="0" />
  <van-loading size="24px" vertical color="#999" :style="!show ? {'display': 'none'} : {'display': 'block'}">加载中...</van-loading>
  <van-nav-bar
    title="loading弹窗"
    left-arrow
    @click-left="goBack()"
    class="nav"
  />
  <div class="box"></div>
</template>

<script lang="ts">
import { getList } from "@/service/list";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const show = ref(false);
    const router = useRouter();
    onMounted(()=>{
      show.value = true
      const params = {
        pageIndex: 1,
        pageSize: 10,
      };
      getList(params).then(res=>{
        show.value = false
      })
    })
    // 返回
    function goBack() {
      router.back()
    }
    return {
      show,
      goBack
    };
  },
});
</script>

<style scoped>
.van-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.van-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 222;
}
.box {
  width: 375px;
  height: 2000px;
  background-color: red;
}
</style>