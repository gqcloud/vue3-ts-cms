<template>
  <div class="loginAccount">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"

import { rules } from "../config/account-config"
import LocalCache from "@/utils/cache"
import { ElForm } from "element-plus/lib/components"

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache("name") ?? "",
      password: LocalCache.getCache("password") ?? ""
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            LocalCache.setCache("name", account.name)
            LocalCache.setCache("password", account.password)
          } else {
            LocalCache.deleteCache("name")
            LocalCache.deleteCache("password")
          }

          store.dispatch("login/accountLoginAction", { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
