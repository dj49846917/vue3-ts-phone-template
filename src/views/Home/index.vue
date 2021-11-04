<template>
  <div>
    {{ data.count }}
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  setup() {
    const store = useStore();
    console.log("store", store.state.user.num);
    let data = reactive({
      count: store.state.user.num,
    });

    onMounted(() => {
      axios
        .get("/api/columns?currentPage=1&pageSize=5")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    });
    return {
      data,
    };
  },
};
</script>

<style scoped></style>