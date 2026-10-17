<template>
  <div class="home-wrapper">
    <div class="glow-bg"></div>

    <header class="hero-section">
      <div class="title-box">
        <h1 class="main-title">醒狮数脉</h1>
        <div class="sub-title">佛山非遗数字化保护与 IP 创新传播平台</div>
      </div>
      <p class="slogan">科技赋能非遗，数字传承文明</p>
      
      <button class="primary-btn" @click="$router.push('/3d')">
        开启沉浸式体验 →
      </button>
    </header>

    <main class="card-grid">
      <div class="card" @click="$router.push('/3d')">
        <div class="icon">🦁</div>
        <h2>狮头 3D 查看</h2>
        <p>360度查看醒狮结构，WebGL轻量化渲染</p>
      </div>
      
      <div class="card" @click="$router.push('/ar')">
        <div class="icon">📱</div>
        <h2>WebAR 体验</h2>
        <p>无需下载APP，扫一扫唤醒虚拟醒狮</p>
      </div>
      
      <div class="card" @click="$router.push('/knowledge')">
        <div class="icon">📚</div>
        <h2>醒狮知识库</h2>
        <p>结构化数字档案与微型知识图谱</p>
      </div>
      
      <div class="card" @click="$router.push('/community')">
        <div class="icon">🎨</div>
        <h2>纹样共创社区</h2>
        <p>用户自主创作醒狮纹样，UGC生态</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 整体容器，加上细微的网格暗纹，非常有质感 */
.home-wrapper {
  min-height: 100vh;
  background-color: #0d0d0d;
  background-image: 
    linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
  background-size: 40px 40px; /* 网格大小 */
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
}

/* 顶部金色光晕 */
.glow-bg {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 50vh;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(13, 13, 13, 0) 60%);
  z-index: 0;
  pointer-events: none;
}

.hero-section {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 100px;
  margin-bottom: 60px;
}

/* 纯金色大标题（去掉容易报错的渐变） */
.main-title {
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 12px;
  margin-bottom: 15px;
  color: #d4af37;
  text-shadow: 0 4px 30px rgba(212, 175, 55, 0.4), 0 0 10px rgba(212, 175, 55, 0.2);
}

.sub-title {
  font-size: 18px;
  color: #ccc;
  letter-spacing: 5px;
  margin-bottom: 25px;
  font-weight: 300;
}

.slogan {
  font-size: 15px;
  color: #777;
  margin-bottom: 45px;
  letter-spacing: 2px;
}

.primary-btn {
  background: linear-gradient(135deg, #d4af37, #b8860b);
  border: none;
  color: #0d0d0d;
  padding: 16px 45px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

.primary-btn:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.6);
}

.card-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 85%;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 40px 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* 卡片顶部悬浮的金色亮线 */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(40, 40, 40, 0.8);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.card:hover::before {
  opacity: 1;
}

.icon {
  font-size: 55px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
}

.card:hover .icon {
  transform: scale(1.1);
}

.card h2 {
  font-size: 24px;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: 2px;
  font-weight: 600;
}

.card p {
  font-size: 15px;
  color: #999;
  line-height: 1.6;
}
</style>