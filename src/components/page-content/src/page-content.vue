<template>
  <div class="page-content">
    <div class="content">
      <hy-table
        :listData="dataList"
        :listCount="dataCount"
        v-bind="contentTabConfig"
        v-model:page="pageInfo"
      >
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
import { defineComponent, computed, ref, watch } from "vue"

import HyTable from "@/base-ui/table/index"

import { useStore } from "@/store"
export default defineComponent({
  props: {
    contentTabConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    HyTable
  },
  setup(props) {
    const store = useStore()
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData
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
