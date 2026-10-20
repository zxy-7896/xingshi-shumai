<template>
  <div id="app">
    <!-- 全局导航栏 -->
    <NavBar />
    
    <!-- 页面内容渲染区 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
/* =========================================
   全局样式重置与底色配置
   ========================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* 1. 设置全站的宣纸底色 */
  background-color: #f9f5eb !important;
  
  /* 2. 注入精致的泥金几何暗纹和顶部金色光晕 */
  background-image: 
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='340' viewBox='0 0 340 340'%3E%3Cg fill='none' stroke='%23c9a227' stroke-width='1.6' stroke-linecap='round' opacity='0.20'%3E %3Cpath d='M24 74 c0 -20 18 -35 38 -31 c6 -20 30 -27 47 -14 c10 -15 35 -14 45 3 c20 -5 37 10 35 30 c15 2 26 15 21 29'/%3E%3Cpath d='M166 60 c13 -5 25 6 26 18'/%3E %3Cpath d='M62 43 c-8 -10 -25 -9 -31 3'/%3E%3Cg transform='translate(170 170)'%3E%3Cpath d='M24 74 c0 -20 18 -35 38 -31 c6 -20 30 -27 47 -14 c10 -15 35 -14 45 3 c20 -5 37 10 35 30 c15 2 26 15 21 29'/%3E%3Cpath d='M166 60 c13 -5 25 6 26 18'/%3E%3Cpath d='M62 43 c-8 -10 -25 -9 -31 3'/%3E%3Cg/%3E%3Cg/%3E%3C/svg%3E"),
    radial-gradient(ellipse 62% 46% at 50% 0%, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0) 72%);
  background-size: 340px 340px, 100% 100%;
  background-repeat: repeat, no-repeat;
  background-attachment: fixed;
  
  /* 3. 统一全站默认字体和文字颜色 */
  color: #3b2f26;
  font-family: "Songti SC", "STSong", "STZhongsong", "SimSun", "Noto Serif SC", serif;
}

/* 内容容器 */
.content {
  padding-top: 80px; /* 留出顶部固定导航栏的高度 */
  min-height: 100vh;
  /* 确保容器透明，让 body 的背景透上来 */
  background-color: transparent !important; 
}
</style>