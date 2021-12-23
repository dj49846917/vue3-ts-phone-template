<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="高德地图" left-arrow @click-left="goBack()" />
    <div class="content" id="myMap"></div>

    <!-- 关键词搜索区域 -->
    <div class="search">
      <div class="searchBox">
        <div class="title">请输入关键字</div>
        <input type="text" @input="getKeyWord" v-model="searchInfo.keyword" />
      </div>
      <ul class="searchList">
        <li
          v-if="!searchInfo.selected"
          v-for="item in searchInfo.list"
          :key="item.id"
          @click="choseItem(item)"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, shallowRef } from "vue";
import { useRouter } from "vue-router";
import AMapLoader from "@amap/amap-jsapi-loader";
import axios from 'axios';
import { queryParams } from '@/utils/index';
import { throttle } from "@/utils";

const router = useRouter();
let map = shallowRef(null);
const mapObj = shallowRef(null);
const searchInfo = reactive({
  list: [],
  selected: false,
  keyword: '',
})

onMounted(() => {
  initMap();
});

onBeforeUnmount(() => {
  // @ts-ignore
  map.value && map.value.destroy();
})

function initMap() {
  AMapLoader.load({
    key: "9b8d062702a9d557146643641099a3c8", //设置您的key
    version: "2.0",
    plugins: [""],
  })
    .then((AMap) => {
      mapObj.value = AMap
      map = new AMap.Map("myMap", {
        viewMode: "3D",    //是否为3D地图模式
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
    })
    .catch((e) => {
      console.log(e);
    });
}

function goBack() {
  router.back();
}

// 输入框输入
const getKeyWord = throttle((e: any) => {
  searchInfo.keyword = e.target.value
  const params = {
    keywords: e.target.value,
    key: "b2993222f87de539cc6f0a270f129259"
  }
  axios.get(`/text${queryParams(params)}`).then(res => {
    console.log("res", res)
    searchInfo.list = res.data.pois
  })
}, 1000)

// 点击下拉选择框
function choseItem(item: any) {
  console.log(item)
  searchInfo.keyword = item.name
  searchInfo.selected = true
  const lng = item.location.split(",")[0] // 纬度
  const lat = item.location.split(",")[1] // 经度
  // 描点并跳转
  // @ts-ignore
  var marker = new mapObj.value.Marker({
  // @ts-ignore
    position: new mapObj.value.LngLat(lng, lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  });
  marker.setTitle(item.name);
  marker.setLabel({
      offset: new mapObj.value.Pixel(0, -10),  //设置文本标注偏移量
      content: `<div class='info'>${item.name}</div>`, //设置文本标注内容
      direction: 'top' //设置文本标注方位
  });
  // @ts-ignore
  map.add(marker);
  // @ts-ignore
  map.setCenter([lng, lat]) // 设置中心点
}
</script>

<style scoped lang="scss">
.container {
  width: 375px;
  position: relative;
  .content {
    width: 375px;
    height: 400px;
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