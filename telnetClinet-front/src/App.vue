<template>
  <div id="app">
    <div class="black">
      <!--      <input id="inputElement" name="file" type="file" accept="yml"  />-->
      <el-button class="left" @click="uploadFiles"> 导入文件 </el-button>
      <el-select class="left" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <router-view/>
  </div>
</template>

<script >
import {getConf1, getConf2, getConf3} from './file/fileinit'
export default {
  name: 'App',
  data () {
    return {
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
    uploadFiles () {
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
        // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        alert('请求失败')
      })
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
