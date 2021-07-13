<template>
  <div class="helloworld">
    <span>MES 1 尚景 Bold</span>
    <span>MES 1 尚景 ExtraLight</span>
    <span>MES 1 尚景 Heavy</span>
    <span>MES 1 尚景 Light</span>
    <span>MES 1 尚景 Medium</span>
    <span>MES 1 尚景 Normal</span>
    <span>MES 1 尚景 Regular</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.helloworld {
  span{
    width:100%;
    color:#000;
    display: inline-block;
    font-size: 66px;
  }
  span:nth-child(1) {
    font-family: "SourceHanSansSC-Bold";
  }
  span:nth-child(2) {
    font-family: "SourceHanSansSC-ExtraLight";
  }
  span:nth-child(3) {
    font-family: "SourceHanSansSC-Heavy";
  }
  span:nth-child(4) {
    font-family: "SourceHanSansSC-Light";
  }
  span:nth-child(5) {
    font-family: "SourceHanSansSC-Medium";
  }
  span:nth-child(6) {
    font-family: "SourceHanSansSC-Normal";
  }
  span:nth-child(7) {
    font-family: "SourceHanSansSC-Regular";
  }
}
</style>
