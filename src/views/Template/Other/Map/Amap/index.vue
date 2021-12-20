<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="nav"
      title="高德地图"
      left-arrow
      @click-left="goBack()"
    />
    <div class="content" id="myMap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";

export default defineComponent({
  setup() {
    const router = useRouter();
    let map = shallowRef(null);

    onMounted(() => {
      initMap();
    });

    function initMap() {
      AMapLoader.load({
        key: "9b8d062702a9d557146643641099a3c8", //设置您的key
        version: "2.0",
        plugins: [""],
      })
        .then((AMap) => {
          map = new AMap.Map("myMap", {
            resizeEnable: true,
          });
          AMap.plugin("AMap.Geolocation", function () {
            var geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, //是否使用高精度定位，默认:true
              timeout: 10000, //超过10秒后停止定位，默认：5s
              position: "RB", //定位按钮的停靠位置
              buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
            });
            // @ts-ignore
            map.addControl(geolocation);
            // @ts-ignore
            geolocation.getCurrentPosition(function (status, result) {
              if (status == "complete") {
                console.log("定位成功", result)
              } else {
                console.log("定位失败", result)
              }
            });
          });
          var marker = new AMap.Marker({
            position: new AMap.LngLat(106.50876, 29.61004),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '公司'
          });
          map.add(marker);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    function goBack() {
      router.back();
    }
    return {
      goBack,
      map,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 375px;
  overflow: hidden;
  .content {
    width: 375px;
    height: 400px;
    overflow: hidden;
  }
}
</style>