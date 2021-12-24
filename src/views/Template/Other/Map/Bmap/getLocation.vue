<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="百度地图" left-arrow @click-left="goBack()" />
    <div id="content" class="content"></div>
    <!-- 关键词搜索区域 -->
    <div class="search">
      <div class="searchBox">
        <div class="title">请输入关键字</div>
        <input type="text" @input="getKeyWord" v-model="searchInfo.keyword" />
      </div>
      <ul class="searchList" v-if="!searchInfo.selected">
        <li
          v-for="item in searchInfo.list"
          :key="item.uid"
          @click="choseItem(item)"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { queryParams } from '@/utils';
import { throttle } from "@/utils";
import { jsonp } from 'vue-jsonp';

const router = useRouter();
let map = ref();
const message = reactive({
  title: "海底捞王府井店",
  address: "地址：北京市东城区王府井大街88号乐天银泰百货八层",
  lng: null,
  lat: null
})
const searchInfo = reactive({
  list: [],
  selected: false,
  keyword: '',
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
  });

  // 点击描点
  map.value.addEventListener("click", function (e) {
    console.log("e", e)
    let point = new BMap.Point(e.point.lng, e.point.lat);
    message.lng = e.point.lng
    message.lat = e.point.lat
    map.value.centerAndZoom(point, 18);          // 设置中心点
    let marker = new BMap.Marker(point);  // 创建标注
    map.value.clearOverlays();
    map.value.addOverlay(marker);               // 将标注添加到地图中
    // 获取位置信息
    getInfo(e.point.lng, e.point.lat)
    // 添加信息窗口
    getInfoWindow(point)
  })
}

// 通过经纬度获取位置信息
function getInfo(lng: number, lat: number) {
  const params = {
    ak: "9UxhL8yiE89j3ryPL2G25msjPFzTnDGd",
    location: `${lng},${lat}`,
    output: 'json',
    radius: 5000
  }
  let url = `/bapi/reverse_geocoding/v3/`
  if (import.meta.env.PROD) {
    url = `https://api.map.baidu.com/reverse_geocoding/v3/`
  }
  axios.get(`${url}${queryParams(params)}`).then(res => {
    console.log("res", res)
  })
}

// 输入框输入
const getKeyWord = throttle((e: any) => {
  searchInfo.keyword = e.target.value
  const params = {
    q: e.target.value,
    ak: "9UxhL8yiE89j3ryPL2G25msjPFzTnDGd",
    region: '重庆市',
    output: "json",
    callback: "jsonp_func"
  }

  jsonp(`https://api.map.baidu.com/place/v2/suggestion?callback=callFunc`, params).then(res=>{
    searchInfo.list = res.result
  })
}, 1000)

// 点击下拉选择框
function choseItem(item: any) {
  console.log(item)
  searchInfo.keyword = item.name
  searchInfo.selected = true
  const lng = item.location.lng // 纬度
  const lat = item.location.lat // 经度
  message.title = item.name
  message.address = `地址：${item.address}`
  message.lng = lng
  message.lat = lat
  // 描点并跳转
  let point = new BMap.Point(lng, lat);
  let mk = new BMap.Marker(point);
  map.value.clearOverlays();
  map.value.addOverlay(mk);
  map.value.centerAndZoom(point, 18);
  getInfoWindow(point)
}

// 地图提示框
function getInfoWindow(point: any) {
  var opts = {
    width: 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title: message.title, // 信息窗口标题
    enableMessage: true,//设置允许信息窗发送短息
  }
  var infoWindow = new BMap.InfoWindow(message.address, opts);  // 创建信息窗口对象 
  map.value.openInfoWindow(infoWindow, point); //开启信息窗口
}

function goBack() {
  router.back();
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
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
  .search {
    position: absolute;
    top: 50px;
    right: 10px;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    padding: 10px;
    .searchBox {
      .title {
        font-size: 14px;
        margin: 4px 0;
      }
      input {
        width: 200px;
        font-size: 14px;
        box-sizing: border-box;
      }
    }
    .searchList {
      margin-top: 10px;
      li {
        border-bottom: 1px solid #000;
        &:hover {
          background-color: #ccc;
          color: red;
        }
      }
    }
  }
}
</style>