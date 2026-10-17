<template>
  <div class="ar-container">
    <h1>📱 WebAR 沉浸式体验</h1>
    <p>请用手机浏览器打开，授权摄像头后，扫描醒狮图片</p>
    
    <!-- 这里是 AR 相机的渲染容器 -->
    <div class="ar-box">
      <div id="ar-container" style="width: 100%; height: 100%;"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

let mindarThree = null;

onMounted(() => {
  // 1. 初始化 MindAR
  mindarThree = new MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: '/targets.mind', // 刚才生成的识别特征文件
  });

  const { renderer, scene, camera } = mindarThree;

  // 2. 添加灯光（让模型有明暗）
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);
  
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(1, 1, 1);
  scene.add(dirLight);

  // 3. 创建一个 3D 物体（先用一个金色方块代替，如果你会加载模型，可以换成 GLTFLoader）
  // 这里的尺寸 0.2 是根据识别图的相对比例设的
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2); 
  const material = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.5, roughness: 0.2 });
  const cube = new THREE.Mesh(geometry, material);

  // 4. 绑定到识别图（0 代表 targets.mind 里的第一张图）
  const anchor = mindarThree.addAnchor(0);
  anchor.group.add(cube);

  // 5. 启动 AR 相机
  mindarThree.start().catch(err => {
    console.error("摄像头启动失败，请检查是否授权:", err);
  });

  // 6. 动画循环
  renderer.setAnimationLoop(() => {
    // 让方块自己转起来，显得酷一点
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
  });
});

// 页面关闭时停止摄像头，释放资源
onBeforeUnmount(() => {
  if (mindarThree) {
    mindarThree.stop();
  }
});
</script>

<style scoped>
.ar-container {
  text-align: center;
  padding: 20px;
}
h1 {
  color: #d4af37;
  margin-bottom: 10px;
}
p {
  color: #aaa;
  margin-bottom: 20px;
}
.ar-box {
  width: 100%;
  max-width: 600px;
  height: 600px; /* 手机端建议调大一点，比如 80vh */
  margin: 0 auto;
  background-color: #2a2a2a;
  border-radius: 12px;
  border: 1px solid #444;
  overflow: hidden;
  position: relative;
}
</style>