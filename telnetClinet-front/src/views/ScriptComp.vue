<template>
  <div>
    <el-input
      type="textarea"
      style="width: 90%"
      :autosize="{ minRows: 30}"
      placeholder="请输入配置文件"
      v-model="textarea2">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'ScriptComp',
  data () {
    return {
      textarea2: ''
    }
  }
}
</script>

<style scoped>
</style>
