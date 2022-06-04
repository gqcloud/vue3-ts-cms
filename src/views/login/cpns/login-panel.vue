<template>
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span
            ><el-icon><User /></el-icon>账号登录</span
          >
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
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

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const currentTab = ref("account")
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log("调用phone")
      }
    }
    return {
      isKeepPassword,
      accountRef,
      currentTab,
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
