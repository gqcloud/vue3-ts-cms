<template>
  <div class="user">
    <page-search :searchFromConfig="searchFromConfig"></page-search>
    <page-content :contentTabConfig="contentTabConfig"> </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"

import { searchFromConfig } from "./config/search.config"
import { contentTabConfig } from "./config/content.config"
export default defineComponent({
  components: { pageSearch, PageContent },
  name: "user",

  setup() {
    return {
      contentTabConfig,
      searchFromConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
