<template>
  <nav class="navbar">
    <div class="nav-inner">
      <div class="logo" @click="$router.push('/')">
        <span class="logo-mark">狮</span>
        <span class="logo-text">醒狮数脉</span>
      </div>
      <div class="links">
        <router-link to="/">首页</router-link>
        <router-link to="/market">数字交易市场</router-link>
        <router-link to="/community">社区互动</router-link>
        <router-link to="/knowledge">醒狮知识库</router-link>
        <router-link to="/3d">3D模型展示</router-link>
      </div>
    </div>
    <!-- 底部回纹金带 -->
    <div class="nav-band"></div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* 与 App.vue 中 .content 的 padding-top: 80px 对齐，避免露出底色 */
  height: 80px;
  background: linear-gradient(180deg, #a62b25 0%, #8c221e 100%);
  border-bottom: 2px solid #c9a227;
  box-shadow: 0 4px 18px rgba(80, 18, 15, 0.28);
  z-index: 1000;
}

.nav-band {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  height: 5px;
  background-image:
    repeating-linear-gradient(90deg, transparent 0 5px, rgba(201, 162, 39, 0.7) 5px 7px),
    repeating-linear-gradient(0deg, transparent 0 2px, rgba(201, 162, 39, 0.7) 2px 4px);
  background-size: 7px 4px, 7px 4px;
  opacity: 0.45;
  pointer-events: none;
}

.nav-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}
.logo-mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-content: center;
  border: 1px solid rgba(201, 162, 39, 0.72);
  border-radius: 6px;
  background: rgba(253, 244, 227, 0.13);
  color: #f2dfae;
  font-family: "Songti SC", "STSong", "SimSun", "Noto Serif SC", serif;
  font-size: 17px;
  line-height: 1;
}
.logo-text {
  font-family: "Songti SC", "STSong", "SimSun", "Noto Serif SC", serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 4px;
  text-indent: 4px;
  color: #fdf4e3;
}

.links {
  display: flex;
  align-items: center;
  gap: 34px;
}
.links a {
  position: relative;
  padding-bottom: 5px;
  color: #f0dcb4;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-decoration: none;
  opacity: 0.82;
  transition: color 0.3s, opacity 0.3s;
}
.links a:hover { color: #ffffff; opacity: 1; }
.links a.router-link-active {
  color: #f6d98a;
  font-weight: 600;
  opacity: 1;
}
.links a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: #f6d98a;
  transition: width 0.3s ease;
}
.links a:hover::after,
.links a.router-link-active::after { width: 100%; }

@media (max-width: 960px) {
  .nav-inner { padding: 0 18px; }
  .links { gap: 18px; }
  .links a { font-size: 13px; letter-spacing: 0; }
  .logo-text { font-size: 17px; letter-spacing: 2px; }
  .logo-mark { width: 30px; height: 30px; font-size: 15px; }
}
</style>
