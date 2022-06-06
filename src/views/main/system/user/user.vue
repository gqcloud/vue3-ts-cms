<template>
  <div class="user">
    <page-search :searchFromConfig="searchFromConfig"></page-search>
  </div>
</template>

<script lang="ts">
import pageSearch from "@/components/page-search/src/page-search.vue"
import { defineComponent } from "vue"

import { useStore } from "vuex"

import { searchFromConfig } from "./config/search.config"
export default defineComponent({
  components: { pageSearch },
  name: "user",

  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return {
      searchFromConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
