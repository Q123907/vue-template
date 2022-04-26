<template>
  <div id="app"></div>
</template>
<script>
import bus from "@/public/eventBus";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {},
  async created() {
    window.onscroll = this.$util.debounce(
      function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = Math.ceil(
          document.body.scrollTop || document.documentElement.scrollTop
        ); //变量scrollHeight是滚动条的总高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight; //变量windowHeight是可视区的高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
        if (scrollHeight - 50 <= windowHeight + scrollTop) {
          //已滚动底部
          bus.$emit("onReachBottom");
        }
      },
      300,
      false
    );
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
}
.bgImg {
  width: 7.5rem;
}
button,
input,
select,
textarea {
  font-size: 100%;
  outline: none;
}
img,
video {
  width: 100%;
  height: 100%;
}
video {
  background: #000;
}
.imgCover {
  object-fit: cover;
}
.imgContain {
  object-fit: contain;
}
// .video {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   // object-fit: contain;
// }
.nowrapELl {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.vhcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.relative100 {
  position: relative;
  z-index: 100;
}
.myMask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: transparent;
  z-index: 99;
}
</style>
