<template>
  <router-view />
</template>

<script>
import { refreshScale } from '@/util/flexible-dashboard'
export default {
  name: 'app',
  mounted () {
    refreshScale();
    window.onresize = function () {
      refreshScale()
    }
  }
}

</script>

<style>
#app {
  width: 1920px;
  height: 1080px;
  font-family: 'PingFang SC';
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
}
</style>
