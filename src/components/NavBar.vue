<template>
  <nav class="navbar">
    <div class="nav-inner">
      <div class="logo" @click="$router.push('/')">醒狮数脉</div>
      <div class="links">
        <router-link to="/">首页</router-link>
        <router-link to="/market">数字交易市场</router-link>
        <router-link to="/community">社区互动</router-link>
        <router-link to="/3d">3D模型展示</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 30px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #d4af37;
  cursor: pointer;
  letter-spacing: 2px;
}

.links a {
  color: #bbb;
  text-decoration: none;
  margin-left: 35px;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
}

.links a:hover, .links a.router-link-active {
  color: #d4af37;
}

/* 导航栏底部的小金条 */
.links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #d4af37;
  transition: width 0.3s;
}

.links a:hover::after, .links a.router-link-active::after {
  width: 100%;
}
</style>