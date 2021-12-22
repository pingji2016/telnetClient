<template>
  <div>
    <span style="font-size: 20px;float:left;margin-left: 50px;font-weight: bold">脚本文件内容</span>
    <el-form :model="formInline" style="  text-align:left;margin-left: 50px;">
      <el-form-item >
        <el-input :rows="30" type="textarea" v-model="returnAns" style="width: 90%;">
          <h1>sssssssss</h1>
          <router-comp></router-comp>
        </el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" style="margin-left: 50%" @click="clickbutton">一键配置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import RouterItem from './RouterItem'

export default {
  name: 'ThirdComp',
  components: {
    RouterItem
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
  },
  methods: {
    clickbutton () {
      console.log('clickbutton', this.textarea2)
      axios.post('http://localhost:8080/sendCommand', this.textarea2)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.leftcard {
  text-align:left;
  margin-left: 50px;
  padding-top: 40px;
}
</style>
