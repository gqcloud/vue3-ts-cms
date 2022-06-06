<template>
  <div class="page-content">
    <div class="content">
      <hy-table :listData="userList" v-bind="contentTabConfig">
        <template #status="scope">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? "启用" : "禁用"
          }}</el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $formatTime.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $formatTime.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #handler>
          <div class="handel-btns">
            <el-button size="small" text type="primary"
              ><el-icon><Edit /></el-icon>编辑</el-button
            >
            <el-button size="small" type="danger" text
              ><el-icon><Delete /></el-icon>删除</el-button
            >
          </div>
        </template>

        <template #header></template>
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
          <el-button
            ><el-icon><Refresh /></el-icon
          ></el-button>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

import HyTable from "@/base-ui/table/index"

import { useStore } from "@/store"
export default defineComponent({
  props: {
    contentTabConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyTable
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    return {
      userList
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.handel-btns {
  display: flex;
}
</style>
