<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar class="nav" title="聊天" left-arrow @click-left="goBack()" />
    <!-- 内容区域 -->
    <div :class="['content', { contentActive: isShowMenu }]" ref="main">
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
    <div :class="['footer', { footerActive: isShowMenu }]">
      <span class="iconfont icon-yuyin" />
      <textarea v-model="message" />
      <span class="iconfont icon-biaoqing" />
      <van-button v-show="message" type="success" class="send" @click="sendMsg"
        >发送</van-button
      >
      <span
        v-show="!message"
        class="iconfont icon-add"
        @click="toggleShowMenu"
      />
    </div>
    <div class="menu" v-if="isShowMenu">
      <van-swipe
      class="my-swipe"
      indicator-color="white"
    >
      <van-swipe-item v-for="item in menuData" :key="item.index">
        <div class="menu-item" v-for="it in item.menuInfo" :key="it.id">
          <span :class="['iconfont', it.icon, 'icon']"></span>
          <div>{{ it.text }}</div>
        </div>
      </van-swipe-item>
    </van-swipe>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
} from "vue";
import { useRouter } from "vue-router";
import { chatList, menuList } from "./data";
export default defineComponent({
  setup() {
    const router = useRouter();
    const main = ref();
    const timer = ref();
    const data = reactive({
      message: "",
      chatList,
      menuData: []
    });
    const isShowMenu = ref(false); // 是否展示更多菜单
    onMounted(() => {
      const dom = document.querySelector(".nav");
      if (dom) {
        main.value.style.top = dom.clientHeight + "px";
        goToBottom();
      }

      // 组装menu菜单数据
      parseMenuData()
    });

    // 清除定时器
    onUnmounted(() => {
      clearTimeout(timer.value);
    });
    // 点击更多按钮
    function toggleShowMenu() {
      isShowMenu.value = !isShowMenu.value;
      goToBottom();
    }

    // 点击发送按钮
    function sendMsg() {
      const params = {
        avatar: "#",
        user_id: 2,
        nickname: "自己",
        type: "text",
        data: data.message,
      };
      data.chatList.push(params);
      goToBottom();
    }

    // 加载到底部
    function goToBottom() {
      timer.value = setTimeout(() => {
        main.value.scrollTop = main.value.scrollHeight;
      }, 400);
      data.message = "";
    }

    // 封装菜单数据
    function parseMenuData() {
      const arrLength = Math.ceil(menuList.length / 8)
      let n = 8 // 每页展示8个
      if(arrLength > 0) {
        for(let i =0; i<arrLength; i++) {
          const obj = {
            index: i,
            menuInfo: []
          }
          let temp = menuList.slice(i*n, i*n+n)
          obj.menuInfo = temp
          data.menuData.push(obj)
        }
      }
      console.log(data.menuData)
    }

    function goBack() {
      router.back();
    }
    return {
      ...toRefs(data),
      goBack,
      main,
      sendMsg,
      isShowMenu,
      toggleShowMenu,
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
    .send {
      height: 37px;
      margin-right: 10px;
    }
  }
  .footerActive {
    bottom: 150px;
    transition: all 0.3s ease;
  }
  .contentActive {
    bottom: 200px;
    transition: all 0.3s ease;
  }
  .menu {
    width: 375px;
    height: 150px;
    position: fixed;
    bottom: 0;
    .my-swipe {
      .van-swipe-item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 0;
        .menu-item {
          width: 58px;
          height: 58px;
          border-radius: 10px;
          align-content: flex-start;
          margin:0 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .icon {
            font-size: 32px;
          }
          div {
            font-size: 14px;
          }
        }
      }
      .van-swipe__indicators {
        bottom: 0
      }
    }
  }
}
</style>