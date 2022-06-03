<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import loginPanel from "./cpns/login-panel.vue"
export default defineComponent({
  components: { loginPanel },
  name: "Login",
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("@/assets/img/login-bg.svg");
}
</style>
