<template>
  <div id="app">
    <div class="black">
      <el-button class="left"> 导入文件 </el-button>
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

<script>
export default {
  name: 'App',
  data () {
    return {
      options: [{
        value: 'conf.yml',
        label: 'conf.yml'
      }, {
        value: 'conf1.yml',
        label: 'conf1.yml'
      }, {
        value: 'conf2.yml',
        label: 'conf2.yml'
      }],
      value: ''
    }
  }
}
</script>

<style lang="sss" scoped>
@import '../node_modules/vue-material/dist/vue-material.css';
@import 'assets/css.css';
@import 'assets/icon.css';

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
