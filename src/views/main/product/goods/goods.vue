<template>
  <div class="goods">
    <page-content :contentTabConfig="contentTabConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">
        {{ "¥" + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ "¥" + scope.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageContent from "@/components/page-content/index"
import { contentTabConfig } from "./config/content.config"
export default defineComponent({
  components: { pageContent },
  name: "goods",
  setup() {
    return {
      contentTabConfig
    }
  }
})
</script>

<style scoped></style>
