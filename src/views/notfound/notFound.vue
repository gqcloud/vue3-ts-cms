<template>
  <div class="not-found">
    <img src="@/assets/img/1.png" alt="" />
    <div class="goBack" @click="goBack($router.back())">返回上一页</div>
    <span>--------- 休闲一下，喝杯咖啡~🥳 ----------</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.not-found {
  width: 800px;
  height: 100vh;
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  .goBack {
    display: inline-block;
    line-height: 40px;
    background: #00a1d6;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
    padding: 0 20px;
    margin-top: 20px;
    &:hover {
      background: #32aad2;
    }
  }
  span {
    margin-top: 200px;
    color: gray;
  }
}
</style>
