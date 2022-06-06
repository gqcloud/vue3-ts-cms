<template>
  <div class="page-search">
    <div class="search">
      <hy-form v-bind="searchFromConfig" v-model="formData">
        <template #header> <h1 class="header">高级检索</h1> </template>
        <template #footer>
          <div class="handleBtns">
            <el-button type="primary"
              ><el-icon><Search /></el-icon>搜索</el-button
            >
            <el-button
              ><el-icon><Refresh /></el-icon>重置</el-button
            >
          </div>
        </template>
      </hy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HyForm from "@/base-ui/form/index"
export default defineComponent({
  props: {
    searchFromConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      createTime: ""
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
.header {
  color: rgb(7, 96, 96);
}
.handleBtns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
