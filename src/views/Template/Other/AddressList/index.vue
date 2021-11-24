<template>
  <div class="container">
    <van-nav-bar title="通讯录" left-arrow @click-left="goBack()" class="nav" />
    <div class="content" @scroll="handerScroll">
      <!-- 顶部 -->
      <div class="list" v-for="item in topList" :key="item.id">
        <div class="img">
          <img :src="item.img_url" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
      <!-- 通讯录 -->
      <div v-for="(item, index) in data" :key="index">
        <div class="char">{{ item.latter }}</div>
        <div class="list" v-for="it in item.data" :key="it.id">
          <div class="img">
            <img :src="it.img_url" />
          </div>
          <div class="name">{{ it.name }}</div>
        </div>
      </div>
      <!-- 右侧字母表 -->
      <div class="letter" ref="drag">
        <span @click="resetTop" class="icon">↑</span>
        <span
          :class="item.latter === charVal ? 'active' : ''"
          @click="chooseItem(item.latter)"
          @touchstart="scrollStart"
          @touchmove="scrollMove"
          v-for="(item, index) in data"
          :key="index"
          class="icon"
          >{{ item.latter }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { topList, listData } from "./data";
import { throttle } from "@/utils";

export default defineComponent({
  setup() {
    const router = useRouter();
    const drag = ref(null); // 右侧字母表的dom
    const info = reactive({
      // 通讯录列表数据
      data: listData,
    });
    const posY = ref(0); // 滑动的纵坐标位置
    const charVal = ref(""); // 右侧字母选中的值
    const charOneHeight = ref(0); // 每一个字母的高度
    const touchStartIndex = ref(0); // 滑动开始的字母对应的数组下标
    function goBack() {
      router.back();
    }
    // 滚动
    const handerScroll = throttle((e: any) => {
      // 实现思路：通过初始化时给列表中所有字母记录位置，在滚动时，判断当前滚动到顶部的距离<某个字母的当前位置，>=这个字母的前一个字母的当前位置
      info.data.forEach((item, index)=>{
        if(index > 0) {
          // @ts-ignore
          if(e.target.scrollTop < item.loc && e.target.scrollTop >= info.data[index-1].loc - e.target.offsetTop) {
            charVal.value = info.data[index-1].latter
          }
        } else {
          charVal.value = ""
        }
      })
    }, 500);

    onMounted(() => {
      // 设置右侧字母的动态垂直居中
      // @ts-ignore
      drag.value.style.marginTop = -(drag.value.offsetHeight / 2) + "px";
      // 向列表数据中添加位置字段，便于通过位置判断滚动的是哪个字母
      const dom = document.getElementsByClassName("char");
      for (let i = 0; i < info.data.length; i++) {
        for (let j = 0; j < dom.length; j++) {
          if(info.data[i].latter === dom[j].innerHTML) {
            // @ts-ignore
            info.data[i].loc = dom[j].offsetTop
          }
        }
      }
      // 动态获取右侧字母的高度
      const charDom = document.getElementsByClassName("icon")[0];
      charOneHeight.value = charDom.clientHeight
    });

    // 点击右侧的字母表
    function chooseItem(str: string) {
      charVal.value = str;
      const dom = document.getElementsByClassName("char"); // 获取content中所有的.char的元素
      for (let i = 0; i < dom.length; i++) {
        if (dom[i].innerHTML === str) {
          // @ts-ignore
          document.querySelector(".content").scrollTop = dom[i].offsetTop - dom[i].clientHeight;
        }
      }
    }

    // 点击右侧的top按键
    function resetTop() {
      // @ts-ignore
      document.querySelector(".content").scrollTop = 0;
    }

    // 滑动开始事件
    function scrollStart(e: any) {
      posY.value = e.changedTouches[0].pageY
      charVal.value = e.target.innerText
      touchStartIndex.value = info.data.findIndex(x=>x.latter === e.target.innerText)
      chooseItem(e.target.innerText)
    }
    // 滑动移动事件
    const scrollMove = throttle((e:any)=>{
      // 思路：通过获取touchstart初始的位置pageY和移动是的pageY, 再除以每个字母的高度，就得到变化的下标
      const index = Math.ceil((e.changedTouches[0].pageY - posY.value) / charOneHeight.value)
      const newIndex = index + touchStartIndex.value
      chooseItem(info.data[newIndex].latter)
    }, 200)
    return {
      ...toRefs(info),
      goBack,
      topList,
      handerScroll,
      drag,
      chooseItem,
      resetTop,
      charVal,
      scrollStart,
      scrollMove,
      posY
    };
  },
});
</script>

<style scoped lang="scss">
@mixin textOne {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@mixin verticalCenter {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container {
  .nav {
    background-color: #e8e8e8;
  }
  .content {
    height: calc(100% - 46px);
    overflow-y: scroll;
    .list {
      width: 375px;
      display: flex;
      flex-direction: row;
      background-color: #fff;
      .img {
        padding: 10px 15px;
        width: 38px;
        height: 38px;
        img {
          width: 38px;
          height: 38px;
          background-color: forestgreen;
        }
      }
      .name {
        flex: 1;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        @include verticalCenter();
        @include textOne();
        &:active {
          background-color: rgb(231, 228, 228);
        }
      }
    }
    .char {
      padding: 10px 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .letter {
      width: 25px;
      position: fixed;
      right: 0;
      top: 50%;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      span {
        padding: 1px 0;
        display: inline-block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        text-align: center;
      }
      .active {
        background-color: #ccc;
      }
    }
  }
}
</style>