<template>
    <div class="wrapper">
        <left-content class="left">

        </left-content>
        <right-content class="right">

        </right-content>
    </div>
</template>

<script>
import LeftContent from '../views/leftContent'
import RightContent from '../views/rightContent'
export default {
  name: 'HelloWorld',
  components: {LeftContent, RightContent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
