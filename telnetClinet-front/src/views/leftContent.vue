<template>
  <div class="left">
    <useGoDiagramTreeLayout>
    </useGoDiagramTreeLayout>
  </div>
</template>

<script>
import useGoDiagramTreeLayout from './useGoDiagramTreeLayout'
export default {
  name: 'leftContent',
  components: {
    useGoDiagramTreeLayout
  }
}
</script>

<style scoped>
.left {
  background: #A1F5EBDF;
}
</style>
