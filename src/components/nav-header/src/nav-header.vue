<template>
  <div class="nav-header">
    <el-icon class="fold-menu" v-if="isFold" @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <el-icon class="fold-menu" v-else @click="handleFoldClick"
      ><Expand
    /></el-icon>
    <div class="content">
      <div>面包屑/</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import userInfo from "./user-info.vue"
export default defineComponent({
  components: { userInfo },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    return {
      isFold,
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
