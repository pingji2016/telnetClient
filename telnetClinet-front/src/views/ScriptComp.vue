<template>
  <div>
    <span style="font-size: 25px;float:left;margin-left: 50px;font-weight: bold">数据</span>
    <div class="leftcard">
        <el-table
          :data="tableData"
          border
          style="width: 70%;float: left">
          <el-table-column
            prop="port"
            label="Port"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="IP"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mask"
            label="Mask">
          </el-table-column>
          <el-table-column
            prop="status"
            label="Status">
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="clickbutton" style="top:50%;margin-left: 20px;float: left">提交</el-button>
    </div>

    <el-form :inline="true" :model="formInline" class="leftcard">
      <el-form-item >
        <span style="font-size: 25px;padding-right: 10px;font-weight: bold">Ping</span>
        <el-input v-model="formInline.order" placeholder="输入IP" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clickbutton">提交</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="formInline" style="  text-align:left;margin-left: 50px;">
      <el-form-item >
        <span style="font-size: 16px;text-align:left;font-weight: bold">Ping：原始返回值</span>
      </el-form-item>
      <el-form-item >
        <el-input :rows="8" type="textarea" v-model="returnAns" style="width: 90%;"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="clickbutton">获取路由表</el-button>
      </el-form-item>
      <el-form-item >
        <el-input :rows="8" type="textarea" v-model="returnAns" style="width: 90%;"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ScriptComp',
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
