<template>
  <div class="role">
    <page-search :searchFromConfig="searchFromConfig"></page-search>
    <page-content
      :contentTabConfig="contentTabConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <el-tree
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @click="handleCheckClick"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useStore } from "@/store"

import pageContent from "@/components/page-content/src/page-content.vue"
import PageSearch from "@/components/page-search/src/page-search.vue"
import PageModal from "@/components/page-modal/src/page-modal.vue"

import { contentTabConfig } from "./config/content.config"
import { searchFromConfig } from "./config/search.config"
import { modalConfig } from "./config/modal.config"

import { usePageModal } from "@/hooks/usePageModal"
export default defineComponent({
  components: { pageContent, PageSearch, PageModal },
  name: "role",
  setup() {
    const [handleNewData, handleEditData, defaultInfo, pageModalRef] =
      usePageModal()

    const store = useStore()
    const otherInfo = ref({})
    const menus = computed(() => store.state.entireMenu)
    const handleCheckClick = (data1: any, data2: any) => {
      console.log(data1, data2)
    }
    return {
      contentTabConfig,
      searchFromConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      defaultInfo,
      pageModalRef,
      menus,
      otherInfo,
      handleCheckClick
    }
  }
})
</script>

<style scoped></style>
