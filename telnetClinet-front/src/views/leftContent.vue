<template>
  <div class="left">
    <!--  控件 -->
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:110px">
      <div id="myPaletteDiv" style="border: solid 1px black; height: 420px"></div>
    </span>

    <!--  设计面板 -->
    <span style="display: inline-block; vertical-align: top; padding: 5px; width:80%">
      <div id="myFlowDesignerDiv" style="border: solid 1px black; height: 420px"></div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'leftContent'
}
</script>

<style scoped>
.left {
  background: #6d6d6d;
}
</style>
