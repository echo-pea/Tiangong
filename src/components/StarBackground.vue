<template>
  
</template>

<!-- components/StarBackground.vue -->
<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 创建粒子星空
  const particles = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < 5000; i++) {
    positions.push(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
  }
  particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0x8a8dff });
  const particleSystem = new THREE.Points(particles, particleMaterial);
  scene.add(particleSystem);

  // 渲染循环
  const animate = () => {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  animate();
});
</script>

<style>

</style>