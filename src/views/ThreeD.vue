<template>
  <div class="three-container">
    <h1>🦁 狮头 3D 查看</h1>
    <p>按住鼠标左键拖动旋转，滚轮缩放</p>
    <div id="webgl-container" class="model-box"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

onMounted(() => {
  const container = document.getElementById('webgl-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // 1. 创建场景
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a2a2a);

  // 2. 创建相机
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 2, 5);

  // 3. 创建渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // 4. 添加灯光（没有光模型就是黑的）
  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 20, 0);
  scene.add(light);
  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(3, 10, 10);
  scene.add(dirLight);

  // 5. 鼠标交互
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // 6. 加载模型
  const loader = new GLTFLoader();
  loader.load('/stone_lion.glb', (gltf) => {
    const model = gltf.scene;
    // 自动居中缩放
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center); 
    scene.add(model);
  }, undefined, (error) => {
    console.error("模型加载失败:", error);
  });

  // 7. 动画循环
  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });
});
</script>

<style scoped>
.three-container { text-align: center; padding: 20px; }
h1 { color: #d4af37; margin-bottom: 10px; }
p { color: #aaa; margin-bottom: 20px; }
.model-box {
  width: 80%; max-width: 800px; height: 600px;
  margin: 0 auto; background-color: #2a2a2a;
  border-radius: 12px; border: 1px solid #444; overflow: hidden;
}
</style>