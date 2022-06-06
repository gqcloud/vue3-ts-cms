<template>
  <div class="role">
    <page-search :searchFromConfig="searchFromConfig"></page-search>
    <page-content
      :contentTabConfig="contentTabConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageContent from "@/components/page-content/src/page-content.vue"
import PageSearch from "@/components/page-search/src/page-search.vue"

import { contentTabConfig } from "./config/content.config"
import { searchFromConfig } from "./config/search.config"
export default defineComponent({
  components: { pageContent, PageSearch },
  name: "role",
  setup() {
    return {
      contentTabConfig,
      searchFromConfig
    }
  }
})
</script>

<style scoped></style>
