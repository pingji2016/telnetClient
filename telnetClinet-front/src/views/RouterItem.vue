<template>
  <div>
    <h1>sssssssss</h1>
    <span style="font-size: 20px;float:left;margin-left: 50px;font-weight: bold">{{ title }}</span>
    <el-form :model="formInline" style="text-align:left;margin-left: 20px;">
      <el-form-item >
        <el-input :rows="30" type="textarea" v-model="routerInfo" style="width: 90%;"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ThirdComp',
  props: {
    title: {
      type: String,
      default: 'RouterA'
    },
    routerInfo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      returnAns: '',
      tableData: [{
        port: '2016-05-02',
        ip: '王小虎',
        mask: '上海市普陀区金沙江路 1518 弄',
        status: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
