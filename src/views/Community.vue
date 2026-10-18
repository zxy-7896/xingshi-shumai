<template>
  <div class="community-container">
    <!-- 顶部标题与投稿按钮 -->
    <header class="page-header">
      <div class="title-area">
        <h1>🎨 纹样共创社区</h1>
        <p>UGC 生态：让传统醒狮文化在数字时代焕发新生</p>
      </div>
      <button class="submit-btn" @click="alert('投稿功能开发中，敬请期待！')">
        + 我要投稿
      </button>
    </header>

    <!-- 工具栏：分类筛选 + 搜索 -->
    <div class="toolbar">
      <div class="tags">
        <span 
          v-for="tag in tags" 
          :key="tag" 
          :class="['tag', { active: currentTag === tag }]"
          @click="currentTag = tag"
        >
          {{ tag }}
        </span>
      </div>
      <div class="search-box">
        <input type="text" v-model="searchQuery" placeholder="搜索作品或作者..." />
      </div>
    </div>

    <!-- 作品画廊网格 -->
    <main class="gallery">
      <div class="art-card" v-for="(item, index) in filteredArtworks" :key="index">
        <div class="img-wrapper">
          <img :src="item.img" :alt="item.title">
          <span class="category-badge">{{ item.category }}</span>
        </div>
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
          
          <div class="meta">
            <span class="author">👤 {{ item.author }}</span>
            <div class="stats">
              <span class="stat-item" @click="toggleLike(item)">
                {{ item.isLiked ? '❤️' : '🤍' }} {{ item.likes }}
              </span>
              <span class="stat-item">💬 {{ item.comments }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 搜索无结果时显示 -->
      <div v-if="filteredArtworks.length === 0" class="no-results">
        没有找到相关作品~
      </div>
    </main>

    <!-- 贡献者展示与分页 (静态 UI) -->
    <footer class="footer-area">
      <div class="contributors">
        <h3>🌟 核心贡献者</h3>
        <div class="avatars">
          <div class="avatar">国潮手艺人</div>
          <div class="avatar">文创小生</div>
          <div class="avatar">剪纸传承人</div>
        </div>
      </div>
      <div class="pagination">
        <button disabled>上一页</button>
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>下一页</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 分类标签
const tags = ['全部', '共创提案', '数字艺术', '故事创作'];
const currentTag = ref('全部');
const searchQuery = ref('');

// 模拟的 UGC 数据
const artworks = ref([
  { img: '/1.jpg', title: '金线刺绣瑞狮', desc: '将传统刺绣工艺与醒狮结合，展现国潮之美。', author: '国潮手艺人', category: '数字艺术', likes: 128, comments: 12, isLiked: false },
  { img: '/2.jpg', title: '醒狮文创贴纸组', desc: '一套适合年轻人的醒狮文创贴纸设计。', author: '文创小生', category: '共创提案', likes: 256, comments: 34, isLiked: false },
  { img: '/3.jpg', title: '翡翠玉雕狮头', desc: '以翡翠材质重塑狮头，尽显尊贵与威严。', author: '非遗爱好者', category: '数字艺术', likes: 89, comments: 5, isLiked: false },
  { img: '/4.jpg', title: '迎春醒狮插画', desc: '在桃花盛开中舞动的醒狮，充满生机。', author: '插画师阿明', category: '故事创作', likes: 512, comments: 88, isLiked: false },
  { img: '/5.jpg', title: '彩绘狮头图腾', desc: '传统手艺人的彩绘狮头，色彩斑斓。', author: '佛山阿伯', category: '数字艺术', likes: 77, comments: 3, isLiked: false },
  { img: '/6.jpg', title: '水彩风舞狮戏球', desc: '水彩晕染下的舞狮，灵动又轻盈。', author: '艺术系学生', category: '故事创作', likes: 199, comments: 22, isLiked: false },
  { img: '/7.jpg', title: '红金剪纸醒狮', desc: '非遗剪纸艺术与醒狮的完美碰撞。', author: '剪纸传承人', category: '共创提案', likes: 340, comments: 45, isLiked: false },
  { img: '/8.jpg', title: '文创狮头狮子头', desc: '适合作为潮玩手办的醒狮IP设计。', author: '国风设计师', category: '共创提案', likes: 421, comments: 56, isLiked: false }
]);

// 筛选与搜索逻辑
const filteredArtworks = computed(() => {
  return artworks.value.filter(item => {
    const matchTag = currentTag.value === '全部' || item.category === currentTag.value;
    const matchSearch = item.title.includes(searchQuery.value) || item.author.includes(searchQuery.value);
    return matchTag && matchSearch;
  });
});

// 点赞交互
const toggleLike = (item) => {
  if (item.isLiked) {
    item.likes--;
    item.isLiked = false;
  } else {
    item.likes++;
    item.isLiked = true;
  }
};
</script>

<style scoped>
.community-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 头部 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}
.title-area h1 {
  color: #d4af37;
  font-size: 36px;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.title-area p {
  color: #aaa;
  font-size: 16px;
}
.submit-btn {
  background: linear-gradient(135deg, #d4af37, #b8860b);
  border: none;
  color: #111;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s;
}
.submit-btn:hover {
  transform: scale(1.05);
}

/* 工具栏：标签 + 搜索 */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}
.tags {
  display: flex;
  gap: 15px;
}
.tag {
  padding: 8px 20px;
  background: #222;
  border: 1px solid #444;
  color: #aaa;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.tag:hover {
  border-color: #d4af37;
  color: #d4af37;
}
.tag.active {
  background: #d4af37;
  color: #111;
  border-color: #d4af37;
  font-weight: bold;
}
.search-box input {
  background: #222;
  border: 1px solid #444;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  width: 250px;
  outline: none;
  transition: border 0.3s;
}
.search-box input:focus {
  border-color: #d4af37;
}

/* 画廊网格 */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}
.art-card {
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #333;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s ease;
}
.art-card:hover {
  transform: translateY(-8px);
  border-color: #d4af37;
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.15);
}
.img-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.category-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #d4af37;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 10px;
  border: 1px solid #d4af37;
}
.info {
  padding: 20px;
}
.info h3 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 8px;
}
.desc {
  color: #888;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 15px;
  height: 38px; /* 固定高度，防止卡片长短不一 */
  overflow: hidden;
}
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 15px;
  font-size: 13px;
}
.author {
  color: #aaa;
}
.stats {
  display: flex;
  gap: 15px;
}
.stat-item {
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s;
}
.stat-item:hover {
  color: #d4af37;
}

/* 底部：贡献者和分页 */
.footer-area {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.contributors h3 {
  color: #d4af37;
  font-size: 16px;
  margin-bottom: 10px;
}
.avatars {
  display: flex;
  gap: 10px;
}
.avatar {
  background: #222;
  border: 1px solid #555;
  color: #ccc;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
}
.pagination {
  display: flex;
  gap: 8px;
}
.pagination button {
  background: #222;
  border: 1px solid #444;
  color: #aaa;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.pagination button.active {
  background: #d4af37;
  color: #111;
  border-color: #d4af37;
  font-weight: bold;
}
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  color: #888;
  padding: 50px 0;
}
</style>