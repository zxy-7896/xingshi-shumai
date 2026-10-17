<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <!-- 这里是页面显示的地方 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #1a1a1a;
  color: white;
}
.content {
  padding-top: 80px;
}
</style>