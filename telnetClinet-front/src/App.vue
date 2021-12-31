<template>
  <div id="app">
    <div class="black">
      <el-button class="left" @click="dialogTableVisible = true"> 导入文件 </el-button>
      <el-button class="left" @click="Reload"> Reload </el-button>
      <el-select class="left" v-model="value" placeholder="请选择" @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <router-view/>
    <el-dialog title="文件导入" :visible.sync="dialogTableVisible">
      <input id="inputElement" name="file" type="file" accept="yml"  />
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-dialog>
  </div>
</template>

<script >
import {getConf1, getConf2, getConf3} from './file/fileinit'
export default {
  name: 'App',
  data () {
    return {
      options: [],
      value: '',
      dialogTableVisible: false,
      fileList: ''
    }
  },
  mounted () {
    this.initFileList()
  },
  methods: {
    initFileList  () {
      const data = ''
      this.$axios.post('/getAllFileName', data).then(response => {
        if (response.data.data) {
          let optList = response.data.data
          this.options = []
          for (let index = 0; index < optList.length; index++) {
            this.options.push({
              value: optList[index],
              label: optList[index]
            })
          }
        }
      }).catch(res => {
        alert('获取文件列表 失败')
      })
    },
    reload () {
      this.$axios.post('/reload').then(response => {
        console.log(response.data)
        alert('reload 成功 ！')
      }).catch(res => {
        alert('请求失败')
      })
    },
    initValue () {
      this.options = [{
        value: getConf1(),
        label: 'conf.yml'
      }, {
        value: getConf2(),
        label: 'conf1.yml'
      }, {
        value: getConf3(),
        label: 'conf2.yml'
      }]
    },
    selectChange (value) {
      console.log('dddd', value)
      this.$EventBus.$emit('yml-change', value)
      // let data = 'fileName=' + value
      // this.$axios.post('/getYamlScript', data).then(response => {
      //   if (response.data) {
      //     console.log(response.data.data)
      //     this.returnAns = response.data
      //   }
      // }).catch({})
    },
    uploadFiles () {
      this.value = document.getElementById('inputElement').files[0]
      console.log('value==', this.value)
      // let inputElement = document.getElementById('inputElement')
      let file = this.value

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
        this.initFileList()
        // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        alert('请求失败')
      })
    },
    submitUpload () {
      this.uploadFiles()
    }
  }
}
</script>

<style lang="sss" scoped>
@import '../node_modules/vue-material/dist/vue-material.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.black {
  background-color: black;
  text-align:left;
}

.left {
  margin-left: 20px;
}
</style>
