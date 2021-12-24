<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="百度地图" left-arrow @click-left="goBack()" />
    <div id="content" class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let map = ref();
const message = reactive({
  title: "海底捞王府井店",
  address: "地址：北京市东城区王府井大街88号乐天银泰百货八层",
  lng: null,
  lat: null
})

onMounted(() => {
  initMap()
})

function initMap() {
  map.value = new BMap.Map("content");          // 创建地图实例
  map.value.centerAndZoom("重庆", 18);          // 设置中心点
  map.value.enableScrollWheelZoom(true);        // 设置可拖拽

  // 定位
  let geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      console.log("r", r)
      let point = new BMap.Point(r.point.lng, r.point.lat);
      let mk = new BMap.Marker(point);
      map.value.addOverlay(mk);
      map.value.centerAndZoom(point, 18);
    }
    else {
      alert('failed' + this.getStatus());
    }
  }, {
    timeout: 20000,
    enableHighAccuracy: true
  });

  // 点击描点
  map.value.addEventListener("click", function (e) {
    let point = new BMap.Point(e.point.lng, e.point.lat);
    map.value.centerAndZoom(point, 18);          // 设置中心点
    let marker = new BMap.Marker(point);  // 创建标注
    map.value.addOverlay(marker);               // 将标注添加到地图中
    // 添加信息窗口
    var opts = {
      width: 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title: message.title, // 信息窗口标题
      enableMessage: true,//设置允许信息窗发送短息
    }
    var infoWindow = new BMap.InfoWindow(message.address, opts);  // 创建信息窗口对象 
    map.value.openInfoWindow(infoWindow, point); //开启信息窗口
  })
}

function goBack() {
  router.back();
}
</script>

<style lang="scss" scoped>
.content {
  width: 375px;
  height: 400px;
  :deep(.BMap_bubble_title) {
    font-size: 14px;
  }
  :deep(.BMap_bubble_content) {
    font-size: 14px;
  }
}
</style>