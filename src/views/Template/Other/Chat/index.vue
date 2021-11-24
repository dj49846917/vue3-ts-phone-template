<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="聊天" left-arrow @click-left="goBack()" />
    <!-- 内容区域 -->
    <div class="content" ref="main">
      <!-- 聊天列表 -->
      <div v-for="(item, index) in chatList" :key="index">
        <div class="talk left" v-if="item.user_id === 1">
          <img :src="item.avatar" alt="a" />
          <div class="word">
            <span class="iconfont icon-triangle-left"></span>{{ item.data }}
          </div>
        </div>
        <div class="talk right" v-else>
          <div class="word">
            <span class="iconfont icon-triangle-right"></span>{{ item.data }}
          </div>
          <img src="#" alt="b" />
        </div>
      </div>
    </div>
    <!-- 底部输入框 -->
    <div class="footer">
      <span class="iconfont icon-yuyin" />
      <textarea v-model="message" />
      <span class="iconfont icon-biaoqing" />
      <span class="iconfont icon-add" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { chatList } from "./data";
export default defineComponent({
  setup() {
    const router = useRouter();
    const message = ref("");
    const main = ref();
    onMounted(() => {
      const dom = document.querySelector(".nav");
      if (dom) {
        main.value.style.top = dom.clientHeight + "px";
      }
    });

    function goBack() {
      router.back();
    }
    return {
      goBack,
      message,
      main,
      chatList,
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
@mixin center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left {
  justify-content: flex-start;
  img {
    margin-right: 15px;
  }
  .word {
    background-color: #fff;
    span {
      position: absolute;
      left: -10px;
      top: 12px;
      color: #fff;
    }
  }
}
.right {
  justify-content: flex-end;
  img {
    margin-left: 15px;
  }
  .word {
    background-color: lightgreen;
    span {
      position: absolute;
      right: -10px;
      top: 12px;
      color: lightgreen;
    }
  }
}
.container {
  .content {
    width: 375px;
    position: fixed;
    left: 0;
    bottom: 50px;
    overflow-y: scroll;
    padding: 0 10px;
    box-sizing: border-box;
    padding-top: 20px;
    box-sizing: border-box;
    .talk {
      display: flex;
      margin-bottom: 10px;
      img {
        width: 38px;
        height: 38px;
        border-radius: 4px;
        background-color: #fff;
        font-size: 12px;
      }
      .word {
        padding: 10px 15px;
        box-sizing: border-box;
        font-size: 16px;
        border-radius: 8px;
        max-width: 220px;
        word-break: break-all;
        position: relative;
      }
    }
  }
  .footer {
    width: 375px;
    height: 50px;
    @include verticalCenter();
    overflow: hidden;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    .iconfont {
      font-size: 28px;
      padding: 0 10px;
    }
    textarea {
      flex: 1;
      height: 37px;
      padding: 4px;
      box-sizing: border-box;
      line-height: 29px;
      text-indent: 10px;
      font-size: 18px;
      resize: none;
      outline: none;
      border: none;
      overflow-y: hidden;
    }
  }
}
</style>