<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span>cloud</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick"
            ><el-icon><RemoveFilled /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided
            ><el-icon><InfoFilled /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item divided
            ><el-icon><Opportunity /></el-icon>随便填填</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import LocalCache from "@/utils/cache"
export default defineComponent({
  setup() {
    const router = useRouter()
    const handleExitClick = () => {
      LocalCache.deleteCache("token")
      router.push("/main")
    }
    return {
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
  }
}
</style>
