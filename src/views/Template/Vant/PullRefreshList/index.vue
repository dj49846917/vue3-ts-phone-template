<template>
  <div class="container">
    <van-nav-bar
      title="上拉加载，下拉刷新"
      left-arrow 
      @click-left="goBack()"
      class="nav"
    />
    <div class="banner"></div>
    <!-- 列表区域 -->
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <van-list
        v-model:loading="loading"
        v-model:error="error"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="cell" v-for="item in data" :key="item.DicCode">
          <div class="cell-item">
            <span>字典码</span>
            <span>{{ item.DicCode }}</span>
          </div>
          <div class="cell-item">
            <span>字典名称</span>
            <span>{{ item.DicName }}</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getList } from "@/service/list";
import { commonListParam, commonObj } from "@/types";
import { Notify } from "vant";

interface listParam extends commonListParam {
  refreshing: boolean; // 是否刷新
  finished: boolean; // 是否数据到底了
  loading: boolean; // 是否加载
  error: boolean; // 是否出错
  data: commonObj[]; // 数据源
}

export default defineComponent({
  setup() {
    const router = useRouter();

    let list = reactive<listParam>({
      pageIndex: 1,
      pageSize: 10,
      refreshing: false,
      finished: false,
      loading: false,
      error: false,
      data: [],
    });
    // 请求数据
    onMounted(() => {
      list.loading = true; // 这句非常关键，不加的话，初始化会再请求一次上拉加载
      const params = {
        pageIndex: 1,
        pageSize: 10,
      };
      getListData(params);
    });
    // 返回
    function goBack() {
      router.back();
    }
    // 下拉刷新
    function onRefresh() {
      const params = {
        pageIndex: 1,
        pageSize: 10,
      };
      getListData(params);
    }
    // 上拉加载
    function onLoad() {
      const newPage = list.pageIndex + 1;
      const params = {
        pageIndex: newPage,
        pageSize: list.pageSize,
      };
      getListData(params);
    }
    // 获取列表数据
    async function getListData(params: commonListParam) {
      try {
        const res = await getList(params);
        console.log("res", res);
        list.data = list.data.concat(res.data);
        if (res.data.length < list.pageSize) {
          list.finished = true;
        }
      } catch (error) {
        Notify({ type: "warning", message: error });
        list.error = true;
      } finally {
        list.refreshing = false;
        list.loading = false;
        list.pageIndex = params.pageIndex;
        list.pageSize = params.pageSize;
      }
    }
    return {
      ...toRefs(list),
      goBack,
      onRefresh,
      onLoad,
    };
  },
});
</script>

<style scoped lang="scss">
.nav {
  border-bottom: 1px solid #ccc;
}
.banner {
  width: 375px;
  height: 100px;
  background-color: red;
}
.cell {
  width: 375px;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #fff;
  .cell-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>