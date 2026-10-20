<template>
  <div class="three-wrapper">
    <!-- 背景光晕层 -->
    <div class="bg-layer"></div>

    <div class="three-container">
      <!-- 顶部标题与提示 -->
      <header class="page-header">
        <h1>醒狮 3D 数字模型展示</h1>
        <p class="subtitle">数字化采集 · 三维重建 · 工艺细节记录</p>
      </header>


      <!-- 3D 渲染区 -->
      <div class="showcase-main">
        <div id="webgl-container" class="canvas-box">
          <div id="loading-tip" class="loading-tip">模型加载中，请稍候...</div>
        </div>
        
        <!-- 交互提示 -->
        <div class="interaction-hints">
          <div class="hint-item"><span class="icon">🔄</span><span>拖拽旋转</span></div>
          <div class="hint-item"><span class="icon">🔍</span><span>滚轮缩放</span></div>
          <div class="hint-item"><span class="icon">🖱️</span><span>右键平移</span></div>
        </div>
      </div>

      <!-- 模型信息卡片 -->
      <div class="info-card">
        <div class="info-title-box">
          <span class="icon">ℹ️</span>
          <h3>模型信息</h3>
        </div>
        <div class="info-content">
          <p style="text-align: left;"><strong>模型名称：</strong>醒狮三维模型（演示版）</p>
          <p style="text-align: left;"><strong>工艺类别：</strong>狮头扎作——外部彩绘与装饰工艺</p>
          <p style="text-align: left;"><strong>展示细节：</strong>外部纹样、绒球装饰、鳞片细节、胡须质感</p>
          <p style="text-align: left;"><strong>技术说明：</strong>数字化采集、三维重建、WebGL 实时渲染与多角度交互</p>
        </div>
      </div>

      <!-- 静态多角度展示 -->
      <div class="static-gallery">
        <h2 class="section-title">📸 多角度静态展示</h2>
        <div class="gallery-grid">
          <div class="static-item"><img src="/lion-front.jpg" alt="正视图"><div class="static-label">正面视角</div></div>
          <div class="static-item"><img src="/lion-left-front.png" alt="左前视图"><div class="static-label">左前视角</div></div>
          <div class="static-item"><img src="/lion-right-front.png" alt="右前视图"><div class="static-label">右前视角</div></div>
          <div class="static-item"><img src="/lion-top.png" alt="顶部视图"><div class="static-label">顶部视角</div></div>
          <div class="static-item"><img src="/lion-back.png" alt="后视图"><div class="static-label">背面视角</div></div>
          <div class="static-item"><img src="/lion-bottom.png" alt="底部视图"><div class="static-label">底部视角</div></div>
        </div>
      </div>

      <!-- 底部跳转 -->
      <footer class="footer-area">
        <span>返回：</span>
        <router-link to="/">首页</router-link> | 
        <router-link to="/market">数字交易市场</router-link> | 
        <router-link to="/community">社区互动</router-link>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let renderer = null;

onMounted(() => {
  const container = document.getElementById('webgl-container');
  const loadingTip = document.getElementById('loading-tip');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // 1. 场景 (改成深咖色，配合宣纸风)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a2522); 

  // 2. 相机
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 1.5, 6); 

  // 3. 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);


  // 4. 光影 (完美曝光版)
  // 1. 环境光 (稍微收一点，保留暗部)
  scene.add(new THREE.AmbientLight(0xffffff, 1.2)); 
  
  // 2. 正面主光 (降一点，防止白毛过曝)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5); 
  dirLight.position.set(5, 5, 5);
  dirLight.castShadow = true;
  scene.add(dirLight);

  // 3. 背面补光 (暖光，勾勒出红色轮廓)
  const backLight = new THREE.DirectionalLight(0xffebc4, 1.0);
  backLight.position.set(-5, 5, -5);
  scene.add(backLight);

  // 4. 底部补光 (暗红光，增加层次感)
  const redLight = new THREE.PointLight(0xb02a2a, 1.5, 15);
  redLight.position.set(0, -3, 3);
  scene.add(redLight);

  // 5. 交互
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.0;

  // 6. 加载模型
  const loader = new GLTFLoader();
  loader.load('/model.glb', (gltf) => {
    if (loadingTip) loadingTip.style.display = 'none';
    
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4 / maxDim; 
    model.scale.set(scale, scale, scale);
    
    model.position.sub(center.multiplyScalar(scale));
    model.position.y -= 0.5; 
    
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.add(model);
  }, 
  (xhr) => {
    if (xhr.total > 0 && loadingTip) {
      const percent = Math.round((xhr.loaded / xhr.total) * 100);
      loadingTip.innerText = `模型加载中... ${percent}%`;
    }
  }, 
  (error) => {
    console.error('模型加载失败:', error);
    if (loadingTip) loadingTip.innerText = '模型加载失败，请检查控制台';
  });

  // 7. 窗口自适应
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener('resize', handleResize);

  // 8. 动画循环
  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    if (renderer) renderer.dispose();
  });
});
</script>

<style scoped>
/* 🔥 强制注入宣纸背景和最外层样式 */
.three-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: #f9f5eb;
  overflow: hidden;
  font-family: "Songti SC", "STSong", "STZhongsong", "SimSun", "Noto Serif SC", serif;
}

.bg-layer {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(ellipse 62% 46% at 50% 0%, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0) 72%);
  pointer-events: none;
  z-index: 0;
}

.three-container {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #3b2f26;
}

/* 顶部标题 */
.page-header { text-align: center; margin-bottom: 30px; }
.page-header h1 {
  color: #b02a2a;
  font-size: 42px;
  margin-bottom: 10px;
  letter-spacing: 8px;
  text-indent: 8px;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.65);
}
.subtitle { color: #8a7b68; font-size: 15px; margin-bottom: 25px; letter-spacing: 2px; }

/* 提示条 */
.warning-bar { 
  background: rgba(201, 162, 39, 0.08); 
  border: 1px solid rgba(201, 162, 39, 0.5); 
  border-radius: 8px; padding: 15px 20px; text-align: left; margin-bottom: 20px; 
}
.warning-bar p { color: #8c221e; font-size: 14px; line-height: 1.6; margin-bottom: 5px; }
.warning-bar p:last-child { margin-bottom: 0; }

/* 3D 展示区 */
.showcase-main { 
  background: #fff; 
  border: 1px solid rgba(176, 42, 42, 0.2); 
  border-radius: 16px; overflow: hidden; margin-bottom: 30px; 
  box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08); 
}
.canvas-box { position: relative; width: 100%; height: 500px; background: #2a2522; }
.loading-tip { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #c9a227; font-size: 18px; font-weight: bold; }

/* 交互提示 */
.interaction-hints { display: flex; justify-content: center; gap: 40px; padding: 15px; background: #fdfcf8; border-top: 1px solid rgba(201, 162, 39, 0.3); }
.hint-item { display: flex; flex-direction: column; align-items: center; gap: 5px; color: #8a7b68; font-size: 12px; }
.hint-item .icon { font-size: 20px; }

/* 模型信息卡片 */
.info-card { display: flex; background: #fff; border: 1px solid rgba(176, 42, 42, 0.2); border-radius: 12px; overflow: hidden; margin-bottom: 40px; box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08);}
.info-title-box { width: 120px; background: #b02a2a; color: #fdf3e0; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; font-weight: bold; }
.info-title-box .icon { font-size: 24px; }
.info-content { padding: 20px 30px; flex: 1; }
.info-content p { color: #3b2f26; font-size: 15px; line-height: 2; margin: 0; }
.info-content strong { color: #b02a2a; margin-right: 10px; }

/* 静态多角度展示 */
.static-gallery { margin-bottom: 40px; }
.section-title { color: #b02a2a; font-size: 22px; margin-bottom: 20px; border-left: 4px solid #b02a2a; padding-left: 10px; }

.gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.static-item { background: #fff; border: 1px solid rgba(176, 42, 42, 0.2); border-radius: 12px; overflow: hidden; transition: all 0.3s ease; cursor: pointer; box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08);}
.static-item:hover { transform: translateY(-5px); border-color: #b02a2a; }
.static-item img { width: 100%; height: 200px; object-fit: cover; }
.static-label { padding: 12px; text-align: center; font-size: 14px; color: #3b2f26; background: #fdfcf8; border-top: 1px solid rgba(201, 162, 39, 0.3); }

/* 底部 */
.footer-area { text-align: center; border-top: 1px solid rgba(201, 162, 39, 0.4); padding-top: 20px; color: #8a7b68; font-size: 14px; }
.footer-area a { color: #b02a2a; text-decoration: none; margin: 0 5px; transition: color 0.3s; }
.footer-area a:hover { color: #8c221e; text-decoration: underline; }

/* 响应式 */
@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .canvas-box { height: 350px; }
  .info-card { flex-direction: column; }
  .info-title-box { width: 100%; padding: 10px; flex-direction: row; }
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>