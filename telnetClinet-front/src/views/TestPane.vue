<template>
  <div>
    <el-select class="left" v-model="value" placeholder="测试脚本选择" @change="selectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <el-input :rows="20" placeholder="服务器返回输出" type="textarea" v-model="confReturn" style="width: 80%;"></el-input>
  </div>
</template>

<script>
export default {
  name: 'TestPane',
  data () {
    return {
      scriptSelect: '',
      confReturn: '',
      options: [],
      value: ''
    }
  },
  mounted () {
    this.initValue()
  },
  methods: {
    initValue () {
      this.options = [{
        value: 'testOSPF.yml',
        label: 'testOSPF.yml'
      }, {
        value: 'testOSPF.yml',
        label: 'testRIP.yml'
      }, {
        value: 'testOSPF.yml',
        label: 'testStatic.yml'
      }]
    },
    submitUpload () {
      console.log('value==', this.value)
      let fileName = this.value
      let param = new FormData() // 创建form对象
      param.append('fileName', fileName) // 通过append向form对象添加数据

      let config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      this.$axios.post('/testRouter', param, config).then(response => {
        if (response.data) {
          console.log(response.data)
          let jsonData = response.data.data
          var json2yaml = require('json2yaml')
          this.confReturn = json2yaml.stringify(jsonData).slice(4)
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

</style>
