<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import TimeAxis from './components/TimeAxis.vue'
import ArmillarySphere from './components/ArmillarySphere.vue';
import StarBackground from './components/StarBackground.vue';
import AncientBookPanel from './components/AncientBookPanel.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <div class="container">
    <StarBackground />      <!-- 敦煌星图背景 -->
    <TimeAxis />            <!-- 北斗七星时间轴 -->
    <ArmillarySphere />     <!-- 浑天仪3D模型 -->
    <Seismoscope />         <!-- 地动仪3D模型 -->
    <Quadrants />           <!-- 四大象限信息板块 -->
    <AncientBookPanel />    <!-- 交互式古籍面板 -->
  </div>

</template>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #0a0f2c, #1a1f4a);
}
</style>
