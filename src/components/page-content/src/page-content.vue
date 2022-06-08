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
          <span>{{ $formatTime.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handel-btns">
            <el-button size="small" text type="primary" v-if="isUpdate"
              ><el-icon><Edit /></el-icon>编辑</el-button
            >
            <el-button size="small" type="danger" text v-if="isDelete"
              ><el-icon><Delete /></el-icon>删除</el-button
            >
          </div>
        </template>

        <template #header></template>
        <template #headerHandler>
          <el-button type="primary" v-if="isCreate">新建用户</el-button>
          <el-button
            ><el-icon><Refresh /></el-icon
          ></el-button>
        </template>

        <template
          v-for="item in otherPropSlots"
          :key="item.prop"
          #[item.slotName]="scope"
        >
          <template v-if="item.slotName"
            ><slot :name="item.slotName" :row="scope.row"></slot
          ></template>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"

import HyTable from "@/base-ui/table/index"

import { useStore } from "@/store"

import { usePermission } from "@/hooks/usePermission"
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
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
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

    const otherPropSlots = props.contentTabConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "ceateAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )
    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      getPageData,
      isCreate,
      isUpdate,
      isDelete
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
