<template>
    <div class="wrapper">
        <left-content class="left">

        </left-content>

        <right-content class="right">

        </right-content>
    </div>
</template>

<script type="application/ecmascript">
    import LeftContent from "./views/leftContent.vue"
    import RightContent from "./views/rightContent.vue"
    export default {
        name: '',
      components: {RightContent, LeftContent},
      data () {
            return {
                msg: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
.wrapper {
  position: relative;
  height: 0;
  padding-top: 80%;
}

.left {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
}

.right {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 50%;
  top: 0;
  border: 10px solid #ccc;
}
</style>
