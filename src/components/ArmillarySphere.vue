<template>
  
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

let scene, camera, renderer, model;

onMounted(() => {
  // 初始化Three.js场景
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('.container').appendChild(renderer.domElement);

  // 加载GLTF模型
  const loader = new THREE.GLTFLoader();
  loader.load('/models/armillary_sphere.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
    animate();
  });

  // 动画循环
  const animate = () => {
    requestAnimationFrame(animate);
    model.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
});

onUnmounted(() => {
  // 清理资源
  renderer.dispose();
});
</script>

<style>

</style>