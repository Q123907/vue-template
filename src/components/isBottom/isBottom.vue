<template>
  <div class="isbottom">
    <van-loading v-if="loading" size="24px">加载中...</van-loading>
    <div v-else class="bottom">已经到达底部啦~</div>
  </div>
</template>

<script>
export default {
  name: "isBottom",
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.isbottom {
  display: flex;
  justify-content: center;
  padding: 0.24rem 0;
}
.bottom {
  font-size: 14px;
  color: #c9c9c9;
}
</style>
