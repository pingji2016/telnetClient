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
<!--        <el-button type="primary" @click="clickbutton" style="top:50%;margin-left: 20px;float: left">提交</el-button>-->
    </div>

    <el-form :inline="true" class="leftcard">
      <el-form-item >
        <span style="font-size: 25px;padding-right: 10px;font-weight: bold">Ping</span>
        <el-input v-model="pingOrder" placeholder="输入IP" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clickbutton">提交</el-button>
      </el-form-item>
    </el-form>
    <el-form  style="  text-align:left;margin-left: 50px;">
      <el-form-item >
        <span style="font-size: 16px;text-align:left;font-weight: bold">Ping：原始返回值</span>
      </el-form-item>
      <el-form-item >
        <el-input :rows="8" type="textarea" v-model="returnAns" style="width: 90%;"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="getRouter">获取路由表</el-button>
      </el-form-item>
      <el-form-item >
        <el-input :rows="8" type="textarea" v-model="routerAns" style="width: 90%;"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getRouterAPort } from '../file/fileinit'
export default {
  name: 'ScriptComp',
  data () {
    return {
      pingOrder: '',
      returnAns: '',
      routerAns: '',
      tableData: [],
      nodeSelect: 'RouterA',
      fileSelected: 'conf.yml'
    }
  },
  created () {
    this.getInit()
  },
  methods: {
    getInit () {
      this.tableData = getRouterAPort()
      var self = this
      this.$EventBus.$on('node-change', function (value) {
        self.nodeChange(value)
      })
      this.$EventBus.$on('yml-change', function (value) {
        self.fileSelected = value
      })
    },
    nodeChange (newNode) {
      this.nodeSelect = newNode
      console.log('nodeSelect ==', this.nodeSelect)
      let data = 'routerName=' + this.nodeSelect
      this.$axios.post('/getRouterPorts', data).then(response => {
        if (response.data) {
          this.tableData = response.data.data
          console.log(response.data.data)
        }
      }).catch({})
    },
    clickbutton () {
      let data = 'routerName=' + this.nodeSelect + '&ip' + this.pingOrder
      this.$axios.post('/pingIP', data).then(response => {
        if (response.data) {
          console.log(response.data)
          this.returnAns = response.data
        }
        // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        alert('请求失败')
      })
    },
    getRouter () {
      let data = 'routerName=' + this.nodeSelect
      this.$axios.post('/getRouterTable', data).then(response => {
        if (response.data) {
          console.log(response.data)
          this.routerAns = response.data
        }
        // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        alert('请求失败')
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
