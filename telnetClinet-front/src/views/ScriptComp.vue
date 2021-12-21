<template>
  <div>
    <el-input
      type="textarea"
      style="width: 90%"
      :autosize="{ minRows: 30}"
      placeholder="请输入配置文件"
      v-model="textarea2">
    </el-input>

      <el-button @click.native='clickbutton'>
        确定
      </el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ScriptComp',
  data () {
    return {
      textarea2: ''
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
</style>
