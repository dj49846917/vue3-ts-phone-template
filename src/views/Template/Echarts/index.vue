<template>
  <div class="container">
    <van-nav-bar
      title="echarts图表"
      left-arrow
      @click-left="goBack()"
      class="nav"
    />
    <div id="chartsA"></div>
    <div id="chartsB"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";

export default defineComponent({
  setup() {
    const router = useRouter();
    onMounted(() => {
      chart1();
      chart2();
    });

    function chart1() {
      const dom = document.getElementById("chartsA"); // 2 获取dom节点
      if(!dom) {
        return
      }
      const myChart = echarts.init(dom); // 3 初始化实例
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };
      // 4 设置实例参数
      myChart.setOption(option);
    }

    function chart2() {
      const dom = document.getElementById("chartsB"); // 2 获取dom节点
      if(!dom) {
        return
      }
      const myChart = echarts.init(dom); // 3 初始化实例
      const option = {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // 4 设置实例参数
      myChart.setOption(option);
    }

    // 返回
    function goBack() {
      router.back();
    }
    return {
      goBack,
    };
  },
});
</script>

<style scoped>
#chartsA,
#chartsB {
  width: 100%;
  height: 300px;
}
</style>