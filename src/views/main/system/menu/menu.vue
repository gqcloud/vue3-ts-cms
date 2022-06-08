<template>
  <div class="menu">
    <page-content
      :contentTabConfig="contentTabConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content/index"
import { contentTabConfig } from "./config/content.config"
export default defineComponent({
  components: { PageContent },
  name: "menus",
  setup() {
    return {
      contentTabConfig
    }
  }
})
</script>

<style scoped></style>
