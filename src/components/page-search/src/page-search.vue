<template>
  <div class="page-search">
    <div class="search">
      <hy-form v-bind="searchFromConfig" v-model="formData">
        <template #header> <h1 class="header">高级检索</h1> </template>
        <template #footer>
          <div class="handleBtns">
            <el-button type="primary" @click="handleQueryClick"
              ><el-icon><Search /></el-icon>搜索</el-button
            >
            <el-button @click="handleResetClick"
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
  setup(props) {
    const formItems = props.searchFromConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      formData.value = formOriginData
    }
    const handleQueryClick = () => {
      console.log(1)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
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
