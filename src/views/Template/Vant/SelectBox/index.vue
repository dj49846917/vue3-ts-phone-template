<template>
  <div class="container">
    <van-nav-bar
      title="上拉加载，下拉刷新"
      left-arrow
      @click-left="goBack()"
      class="nav"
    />
    <van-field
      v-model="zjlx"
      is-link
      readonly
      name="picker"
      label="证件类型"
      placeholder="点击选择证件类型"
      @click="openModal('证件类型', 'zjlx')"
    />
    <van-field
      v-model="xsrs"
      is-link
      readonly
      name="picker"
      label="学生人数"
      placeholder="点击选择学生人数"
      @click="openModal('学生人数', 'xsrs')"
    />
    <van-popup v-model:show="visible" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="visible = false"
        :title="label"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

interface formState { // 表单字段
  zjlx: string,
  xsrs: string
}

interface modalState {
  label: string,
  key: string,
  visible: boolean,
  columns: any[]
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const form = reactive<formState>({
      zjlx: "", // 证件类型
      xsrs: "", // 学生人数
    });
    const modalLabel = reactive<modalState>({
      // 弹出框的标题
      label: "",
      key: "", // 当前弹窗展开对应是哪个的字段
      visible: false,
      columns: [],
    });
    const arr = [
      { DicName: "身份证", DicCode: 100001 },
      { DicName: "军官证", DicCode: 100002 },
      { DicName: "户口簿", DicCode: 100003 },
      { DicName: "机动车驾驶证", DicCode: 100004 },
      { DicName: "学生证", DicCode: 100005 },
    ];
    const arr2 = [1, 2, 3, 4, 5, 6];
    const onConfirm = (value: string) => {
      // 点击弹窗的确定按钮
      console.log("value", value);
      form[modalLabel.key] = value;
      modalLabel.visible = false;
    };
    // 返回
    function goBack() {
      router.back();
    }
    // 点击打开弹窗
    function openModal(str: string, key: string) {
      modalLabel.visible = true;
      modalLabel.label = str;
      modalLabel.key = key;
      modalLabel.columns = [];
      if (str === "证件类型") {
        arr.forEach((item) => {
          console.log("1");
          modalLabel.columns.push(item.DicName);
        });
      } else {
        console.log("2");
        arr2.forEach((item) => modalLabel.columns.push(item));
      }
    }
    return {
      goBack,
      onConfirm,
      ...toRefs(form),
      ...toRefs(modalLabel),
      openModal,
    };
  },
});
</script>

<style scoped>
.van-cell {
  margin-top: 20px;
}
</style>