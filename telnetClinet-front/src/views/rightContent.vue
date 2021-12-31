<template>
  <div>
    <h1 class="title">{{ nodeSelected }}</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="可视化配置">
        <el-form :inline="true" class="leftcard">
          <el-form-item>
            <el-button type="primary" @click="onConnect" style="width: 100px;margin-right: 500px">连接</el-button>
          </el-form-item>
          <el-form-item>
            <span style="font-size: 25px;padding-right: 10px;font-weight: bold">命令</span>
            <el-input v-model="cmd" placeholder="输入命令" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发送</el-button>
          </el-form-item>
        </el-form>
        <el-form style="  text-align:left;margin-left: 50px;">
          <el-form-item >
            <span style="font-size: 25px;text-align:left;font-weight: bold">返回列表</span>
          </el-form-item>
          <el-form-item >
            <el-input :rows="20" type="textarea" v-model="returnAns" style="width: 80%;"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="配置静态路由">
        <script-comp/>
      </el-tab-pane>
      <el-tab-pane label="脚本配置">
        <third-comp/>
      </el-tab-pane>
      <el-tab-pane label="测试脚本">
        <test-pane/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ScriptComp from './ScriptComp'
import ThirdComp from './ThirdComp'
import TestPane from './TestPane'
export default {
  name: 'rightContent',
  components: {
    ScriptComp,
    ThirdComp,
    TestPane
  },
  data () {
    return {
      nodeSelected: 'RouterA',
      cmd: '',
      returnAns: '',
      preNode: ''
    }
  },
  created () {
    var self = this
    this.$EventBus.$on('node-change', function (value) {
      self.nodeChange(value)
    })
  },
  methods: {
    nodeChange (newNode) {
      console.log('newNode', newNode)
      if (newNode !== this.nodeSelected) {
        this.nodeSelected = newNode
      }
    },
    onSubmit () {
      console.log('submit!', this.cmd)
      const data = 'command=' + this.cmd
      this.$axios.post('/sendCommand', data).then(response => {
        if (response.data) {
          console.log(response.data)
          this.returnAns = response.data
        }
      }).catch()
    },
    onConnect () {
      // 先断连接
      if (this.preNode !== '') {
        const data = ''
        this.$axios.post('/distinct', data).then(response => {
          console.log('关闭连接' + response.data)
          this.$EventBus.$emit('node-change', this.nodeSelected)
        }).catch(res => {
          alert('关闭连接失败')
        })
      }
      // 再开连接
      const data = 'routerName=' + this.nodeSelected
      this.$axios.post('/getConnect', data).then(response => {
        console.log('开启连接' + response.data)
        this.preNode = this.nodeSelected
      }).catch(res => {
        alert('开启连接失败')
      })
    }
  }
}
</script>

<style scoped>
.title {
  text-align:left;
  margin-left: 50px;
}
.leftcard {
  text-align:left;
  margin-left: 50px;
  padding-top: 40px;
}
</style>
