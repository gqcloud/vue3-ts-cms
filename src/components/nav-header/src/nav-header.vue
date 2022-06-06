<template>
  <div class="nav-header">
    <el-icon class="fold-menu" v-if="isFold" @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <el-icon class="fold-menu" v-else @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumb"></hy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, watch } from "vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import HyBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb/index"
import userInfo from "./user-info.vue"

import { pathMapBreadcrumbs } from "@/utils/map-menus"
export default defineComponent({
  components: { userInfo, HyBreadcrumb },
  setup(props, { emit }) {
    const isFold = ref(false)
    const store = useStore()
    const route = useRoute()
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    const breadcrumb = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      breadcrumb,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
