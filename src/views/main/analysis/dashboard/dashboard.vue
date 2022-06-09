<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)"> </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量"></hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)"></hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="mt">
      <el-col :span="12">
        <hy-card title="分类商品销量">
          <base-echart :options="options"></base-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品收藏"></hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "@/store"

import HyCard from "@/base-ui/card/index"
import BaseEchart from "@/base-ui/echart/index"
export default defineComponent({
  name: "dashboard",
  components: {
    HyCard,
    BaseEchart
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")
    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    }
    return {
      options
    }
  }
})
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>
