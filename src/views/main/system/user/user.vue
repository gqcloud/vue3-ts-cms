<template>
  <div class="user">
    <page-search
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentTabConfig="contentTabConfig"
      pageName="users"
      ref="pageContentRef"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"

import { searchFromConfig } from "./config/search.config"
import { contentTabConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
  components: { pageSearch, PageContent },
  name: "users",
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      pageContentRef,
      contentTabConfig,
      searchFromConfig,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less"></style>
