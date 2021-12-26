<template>
  <div>
    <span style="font-size: 20px;float:left;margin-left: 50px;font-weight: bold">脚本文件内容</span>
    <el-form :model="formInline" style="  text-align:left;margin-left: 50px;">
      <el-form-item >
        <el-input :rows="30" type="textarea" v-model="returnAns" style="width: 90%;">
        </el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" style="margin-left: 50%" @click="clickbutton">一键配置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RouterItem from './RouterItem'

export default {
  name: 'ThirdComp',
  components: {
    RouterItem
  },
  data () {
    return {
      returnAns: '',
      fileSelected: ''
    }
  },
  created () {
    var self = this
    this.$EventBus.$on('yml-change', function (value) {
      let reader = new FileReader()
      self.fileSelected = value.name
      reader.onload = function () {
        self.returnAns = this.result
      }
      reader.readAsText(value)
    })
  },
  methods: {
    clickbutton () {
      let file = new File([this.returnAns], this.fileSelected,
        {
          type: 'text/plain'
        })
      let param = new FormData() // 创建form对象
      param.append('file', file) // 通过append向form对象添加数据

      param.append('chunk', '别的数据') // 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去

      let config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }

      this.$axios.post('/uploadFile', param, config).then(response => {
        if (response.data) {
          console.log(response.data)
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
