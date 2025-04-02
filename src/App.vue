<script setup>
import DynamicWallpaper from './components/DynamicWallpaper.vue'
import './assets/css/spiders.css' // 确保引入全局样式
import TimeAxis from './components/TimeAxis.vue'
import ArmillarySphere from './components/ArmillarySphere.vue';
import StarBackground from './components/StarBackground.vue';
import AncientBookPanel from './components/AncientBookPanel.vue';
</script>

<template>
    <DynamicWallpaper />
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

</style>
