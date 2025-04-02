<template>
  <div id="upupoo_container">
    <!-- 星体动画层 -->
    <div id="spiders">
      <div id="spidersOne"></div>
      <div id="spidersTwo"></div>
      <div id="spidersThree"></div>
    </div>
    <!-- 图片容器 -->
    <div id="image_container">
      <img :src="bgImage" alt="Background" id="background_image">
    </div>
  </div>
</template>

<script>
import { WALLPAPER_CONFIG } from '@/config/wallpaper';

export default {
  name: 'DynamicWallpaper',
  data() {
    return {
      bgImage: WALLPAPER_CONFIG.bgImg
    }
  },
  mounted() {
    this.initSpidersAnimation();
    // 预加载背景图片
    new Image().src = this.bgImage;
  },
  methods: {
    initSpidersAnimation() {
      // 使用requestAnimationFrame优化动画
      const animate = () => {
        const createStarElements = (count, elementId) => {
          const container = document.getElementById(elementId);
          for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
              position: absolute;
              width: 2px;
              height: 2px;
              background: transparent;
              box-shadow: ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF;
            `;
            container.appendChild(star);
          }
        };
        
        requestAnimationFrame(animate);
      };
      animate();
    }
  }
}
</script>

<style scoped>
#upupoo_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  /* 新增隔离层 */
  isolation: isolate;
}

#image_container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 修复Safari渲染问题 */
  transform: translateZ(0);
}

#background_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 强制覆盖尺寸 */
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  /* 修复Edge浏览器显示问题 */
  image-rendering: crisp-edges;
}
</style>
