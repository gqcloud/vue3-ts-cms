<template>
  <div class="loginPhone">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue"
export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
}
.el-input {
  margin-right: 8px;
}
</style>
