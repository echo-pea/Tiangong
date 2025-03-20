<template>
    <canvas ref="canvasRef" width="600" height="400" class="ancient-book" />
</template>

<!-- components/AncientBookPanel.vue -->
<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const canvasRef = ref(null);

onMounted(() => {
  const ctx = canvasRef.value.getContext('2d');
  // 绘制手写体
  ctx.font = '24px "ZCOOL QingKe HuangYou"';
  ctx.fillStyle = '#3a2e1e';
  ctx.fillText('天工开物·乃粒篇', 50, 100);

  // GSAP翻页动画
  gsap.to(canvasRef.value, { rotationY: 180, duration: 1 });
});
</script>

<style>

</style>