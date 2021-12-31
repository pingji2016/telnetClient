<template>
  <div>
    <el-select class="left" v-model="value" placeholder="测试脚本选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <el-input :rows="20" type="textarea" v-model="Confreturn" style="width: 80%;"></el-input>
  </div>
</template>

<script>
import {getConf1, getConf2, getConf3} from '../file/fileinit'
export default {
  name: 'TestPane',
  data () {
    return {
      scriptSelect: '',
      confReturn: ''
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
    submitUpload () {
      // this.value
    }
  }
}
</script>

<style scoped>

</style>
