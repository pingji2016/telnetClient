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

export default {
  name: 'ScriptComp',
  data () {
    return {
      pingOrder: '',
      returnAns: '',
      routerAns: '',
      tableData: [{
        port: 'FastEtherent0/0',
        ip: '172.16.0.1',
        mask: '255.255.0.0',
        status: 'Up'
      }]
    }
  },
  methods: {
    clickbutton () {
      const data = {
        routerName: '123',
        ip: '333'
      }
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
      const data = {
        routerName: '123'
      }
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
