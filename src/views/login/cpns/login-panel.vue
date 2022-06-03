<template>
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><User /></el-icon>账号登录</span
          >
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><Cellphone /></el-icon>手机登录</span
          >
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="accountControl">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="loginBtn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import loginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
export default defineComponent({
  components: { loginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(true)

    const handleLoginClick = () => {
      console.log(1)
    }
    return {
      isKeepPassword,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.loginPanel {
  text-align: center;
  width: 320px;
  margin-bottom: 120px;
  span {
    display: flex;
    align-items: center;
  }
  .accountControl {
    display: flex;
    justify-content: space-between;
  }
  .loginBtn {
    width: 100%;
    margin-top: 6px;
  }
}
</style>
