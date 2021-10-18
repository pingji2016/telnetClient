<template>
  <div >
    <el-tabs type="border-card">
      <el-tab-pane label="可视化配置">可视化配置</el-tab-pane>
      <el-tab-pane label="脚本配置">
        <script-comp/>
      </el-tab-pane>
      <el-tab-pane label="配置静态路由"></el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import ScriptComp from './ScriptComp'
export default {
  name: 'rightContent',
  components: {
    ScriptComp
  }
}
</script>

<style scoped>
.inputarea {
  padding-right: 50px;
  margin-right: 50px;
}
</style>
