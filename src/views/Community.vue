<template>
  <div class="community-wrapper">
    <!-- 专门做背景的底层 div，保证背景绝对不会丢 -->
    <div class="bg-layer"></div>

    <div class="community-container">
      <header class="page-header">
        <h1>醒狮共创社区</h1>
        <p>爱好者、设计师本地完成醒狮主题创作，可投稿至本社区；优质作品可申请进入数字交易市场进行IP授权对接。</p>
      </header>

      <div class="search-bar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜索社区作品、创作者..." disabled />
        </div>
      </div>

      <div class="gallery-grid">
        <div class="art-card" v-for="(item, index) in artworks" :key="index">
          <div class="img-wrapper">
            <img :src="item.img" alt="作品">
            <div class="tag" :class="item.type">{{ item.tagText }}</div>
          </div>
          <div class="info">
            <h3>🔥 {{ item.title }}</h3>
            <div class="author">
              <img :src="item.avatar" class="avatar-img" alt="头像">
              {{ item.author }}
            </div>
          </div>
        </div>
      </div>

      <div class="topic-section">
        <div class="topic-header">
          <div class="topic-title-area">
            <h2 class="section-title">话题专区</h2>
            <div class="topic-tabs">
              <span v-for="tab in tabs" :key="tab.id" :class="['tab-pill', { active: currentTab === tab.id }]" @click="currentTab = tab.id">
                {{ tab.name }}
              </span>
            </div>
          </div>
          <div class="topic-actions">
            <button class="btn-primary" @click="showDemoAlert('在 ' + tabs.find(t => t.id === currentTab)?.name + ' 下发帖')">
              <span>✍️</span> 发布帖子
            </button>
          </div>
        </div>

        <div class="feed-list">
          <div class="feed-item" v-for="(post, index) in currentPosts" :key="index">
            <img :src="post.avatar" class="feed-avatar" alt="头像">
            <div class="feed-content">
              <div class="user-info">
                <span class="username">{{ post.author }}</span>
                <span class="time">{{ post.time }}</span>
              </div>
              <p class="feed-text">
                {{ post.text }}
                <router-link :to="'/topic/' + currentTab" class="topic-link">
                  #{{ tabs.find(t => t.id === currentTab)?.name.replace('#', '') }}
                </router-link>
              </p>
              <div class="feed-images" v-if="post.images && post.images.length > 0" :class="{'single-img': post.images.length === 1}">
                <img v-for="(img, i) in post.images" :key="i" :src="img" alt="">
              </div>
              <div class="feed-actions">
                <span @click="showDemoAlert('点赞')">❤️ {{ post.likes }}</span> 
                <span @click="showDemoAlert('评论')">💬 {{ post.comments }}</span> 
                <span @click="showDemoAlert('分享')">🔗 分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contest-banner">
        <div class="contest-img-group">
          <img src="/2.jpg" alt="大赛图">
        </div>
        <div class="contest-info">
          <div class="contest-tag">🔥 官方活动</div>
          <h3>醒狮主题设计征集大赛</h3>
          <p>优秀作品优先推送数字交易市场进行 IP 授权对接，赢取丰厚奖金。</p>
          <div class="contest-meta">⏳ 距截止还有 15 天</div>
        </div>
        <div class="contest-action">
          <button class="disabled-btn" @click="showDemoAlert('报名')">立即报名</button>
        </div>
      </div>

      <footer class="footer-area">
        <button class="main-red-btn" @click="$router.push('/market')">优质作品可投稿前往 ➔ 数字交易市场</button>
        <p class="copyright">作品版权归原作者所有；所有内容需要非遗顾问内容审核。</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const artworks = [
  { img: '/1.jpg', title: '国潮醒狮插画', author: '演示设计师', avatar: '/avatar1.jpg', type: 'commercial', tagText: '可商用投稿' },
  { img: '/4.jpg', title: '醒狮手作实拍', author: '爱好者', avatar: '/avatar2.jpg', type: 'non-commercial', tagText: '非商用' },
  { img: '/8.jpg', title: 'Q版醒狮表情包设计', author: '青年创作者', avatar: '/avatar3.jpg', type: 'non-commercial', tagText: '非商用' },
  { img: '/7.jpg', title: '醒狮纹样手绘稿', author: '非遗研学学生', avatar: '/avatar4.jpg', type: 'non-commercial', tagText: '非商用' }
];

const tabs = [
  { id: 'story', name: '#醒狮传承小故事' },
  { id: 'creation', name: '#岭南非遗创作分享' },
  { id: 'record', name: '#醒狮影像记录' }
];
const currentTab = ref('story'); 

const allPosts = {
  story: [
    { avatar: '/avatar6.jpg', author: '非遗手作人老王', time: '5小时前', text: '做狮头是个细致活，光是这道"写色"和"贴金"的工序，就得耐着性子一点点拼贴。看着原本素白的纸扎狮头，在自己手里渐渐变得威风凛凛，心里特别踏实。希望这门老手艺，能被更多年轻人看见。', images: ['/11.jpg'], likes: 356, comments: 89 },
    { avatar: '/avatar2.jpg', author: '醒狮发烧友_大飞', time: '昨天', text: '小时候爷爷带我去看醒狮，现在轮到我带儿子去看了。这不仅是一场表演，更是我们一代代人的记忆传承。', images: ['/16.jpg'], likes: 120, comments: 34 }
  ],
  creation: [
    { avatar: '/avatar3.jpg', author: '设计系学生_阿明', time: '2小时前', text: '做了一组结合国潮风格的醒狮IP形象，准备拿去参加社区的设计大赛，大家觉得怎么样？', images: ['/6.jpg', '/8.jpg'], likes: 52, comments: 12 },
    { avatar: '/avatar1.jpg', author: '国风少女_Lily', time: '3天前', text: '自己手绘的醒狮纹样终于完成啦！准备把它印在帆布袋上，做独一无二的国潮单品。', images: ['/12.jpg', '/10.jpg'], likes: 210, comments: 45 }
  ],
  record: [
    { avatar: '/avatar1.jpg', author: '国风少女_Lily', time: '2小时前', text: '今天去佛山祖庙看了一场真正的醒狮表演！狮子出洞和高桩采青真的太震撼了，鼓点敲在心上，这才是我们岭南的文化底蕴！🦁✨', images: ['/17.png'], likes: 128, comments: 24 },
    { avatar: '/avatar4.jpg', author: '摄影师_老张', time: '一周前', text: '镜头捕捉到的醒狮瞬间，狮头的细节真的是艺术品。', images: ['/12.jpg'], likes: 450, comments: 67 }
  ]
};

const currentPosts = computed(() => allPosts[currentTab.value]);

const showDemoAlert = (action) => {
  alert(`【演示提示】\n您点击了“${action}”功能。\n当前为静态展示版本，该功能将在后续迭代中接入真实数据库并开放。`);
};
</script>

<style scoped>
/* 🔥 强制注入宣纸背景和最外层样式 */
.community-wrapper {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  font-family: "Songti SC", "STSong", "STZhongsong", "SimSun", "Noto Serif SC", serif;
}

/* 背景装饰纹理 */
.bg-layer {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(ellipse 62% 46% at 50% 0%, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0) 72%);
  pointer-events: none;
  z-index: 0;
}

.community-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #3b2f26;
}

/* 标题：暗红宋体 */
.page-header { text-align: center; margin-bottom: 30px; }
.page-header h1 {
  color: #b02a2a;
  font-size: 42px;
  margin-bottom: 10px;
  letter-spacing: 6px;
  text-indent: 6px;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.65);
}
.page-header p { color: #8a7b68; font-size: 15px; }

/* 搜索框：泥金描边 */
.search-bar { display: flex; justify-content: flex-end; margin-bottom: 20px; }
.search-box {
  display: flex; align-items: center; background: #fff; border: 1px solid rgba(201, 162, 39, 0.5);
  border-radius: 30px; padding: 8px 15px; width: 300px;
}
.search-box input { background: transparent; border: none; color: #3b2f26; outline: none; width: 100%; }

/* 画廊卡片：白底泥金边 */
.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 50px; }
.art-card { background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid rgba(176, 42, 42, 0.2); transition: transform 0.3s; box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08);}
.art-card:hover { transform: translateY(-5px); border-color: #b02a2a; }
.img-wrapper { position: relative; width: 100%; height: 200px; }
.img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
.tag { position: absolute; top: 10px; right: -25px; padding: 4px 30px; font-size: 12px; transform: rotate(45deg); font-weight: bold; }
.tag.commercial { background: #c9a227; color: #fff; }
.tag.non-commercial { background: #b02a2a; color: #fff; }
.info { padding: 15px; }
.info h3 { color: #3b2f26; font-size: 16px; margin-bottom: 10px; }
.author { display: flex; align-items: center; gap: 8px; color: #8a7b68; font-size: 13px; }
.avatar-img { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(201, 162, 39, 0.5); }

/* 话题专区 */
.topic-section { background: #fff; border-radius: 16px; border: 1px solid rgba(176, 42, 42, 0.15); padding: 25px 30px; margin-bottom: 50px; box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08);}
.topic-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(201, 162, 39, 0.4); padding-bottom: 20px; margin-bottom: 25px; flex-wrap: wrap; gap: 20px; }
.topic-title-area { display: flex; align-items: center; gap: 20px; }
.section-title { color: #b02a2a; font-size: 22px; margin: 0; border-left: 4px solid #b02a2a; padding-left: 10px; }
.topic-tabs { display: flex; gap: 12px; }
.tab-pill { background: #f9f5eb; border: 1px solid rgba(201, 162, 39, 0.5); color: #8a7b68; padding: 8px 16px; border-radius: 20px; font-size: 14px; cursor: pointer; transition: all 0.3s; }
.tab-pill:hover { background: rgba(201, 162, 39, 0.2); color: #3b2f26; }
.tab-pill.active { background: #b02a2a; color: #fff; border-color: #b02a2a; font-weight: bold; }

.topic-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; }
.btn-primary {
  background: linear-gradient(135deg, #c1352f, #8c221e); color: #fdf4e3; border: 1px solid rgba(201, 162, 39, 0.6); padding: 10px 24px; border-radius: 30px;
  font-size: 15px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.3s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(140, 34, 30, 0.3); }
.demo-hint { color: #8a7b68; font-size: 12px; }

/* 动态流 */
.feed-list { display: flex; flex-direction: column; gap: 30px; }
.feed-item { display: flex; gap: 20px; }
.feed-avatar { width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0; object-fit: cover; border: 1px solid rgba(201, 162, 39, 0.5); }
.feed-content { flex: 1; border-bottom: 1px solid rgba(201, 162, 39, 0.3); padding-bottom: 25px; }
.feed-item:last-child .feed-content { border-bottom: none; padding-bottom: 0; }
.user-info { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.username { color: #b02a2a; font-weight: bold; font-size: 15px; }
.time { color: #8a7b68; font-size: 13px; }
.feed-text { color: #3b2f26; font-size: 15px; line-height: 1.8; margin-bottom: 15px; text-align: left; }

.topic-link { color: #3b82f6; text-decoration: none; margin-left: 5px; }
.feed-images { display: flex; gap: 10px; margin-bottom: 15px; }
.feed-images img { width: 130px; height: 130px; border-radius: 8px; object-fit: cover; border: 1px solid rgba(201, 162, 39, 0.5); }
.feed-images.single-img img { width: 280px; height: 280px; }
.feed-actions { display: flex; gap: 25px; color: #8a7b68; font-size: 14px; }
.feed-actions span { cursor: pointer; }
.feed-actions span:hover { color: #b02a2a; }

/* 大赛横幅 */
.contest-banner { display: flex; align-items: center; background: #fff; border: 1px solid rgba(201, 162, 39, 0.6); border-radius: 16px; padding: 25px; gap: 30px; margin-bottom: 50px; box-shadow: 0 4px 14px rgba(139, 105, 20, 0.08);}
.contest-img-group img { width: 100px; height: 100px; border-radius: 12px; object-fit: cover; border: 1px solid rgba(201, 162, 39, 0.5); }
.contest-info { flex: 1; }
.contest-tag { display: inline-block; background: rgba(176, 42, 42, 0.1); color: #b02a2a; padding: 4px 10px; border-radius: 4px; font-size: 12px; margin-bottom: 10px; font-weight: bold;}
.contest-info h3 { font-size: 22px; color: #b02a2a; margin-bottom: 10px; }
.contest-info p { color: #8a7b68; font-size: 15px; margin-bottom: 15px; }
.contest-meta { color: #c9a227; font-size: 13px; font-weight: bold; }
.contest-action { text-align: center; display: flex; flex-direction: column; gap: 10px;}
.disabled-btn { background: #b02a2a; color: #fff; border: none; padding: 12px 35px; border-radius: 25px; font-size: 16px; font-weight: bold; cursor: pointer; opacity: 0.9;}
.contest-action .demo-hint { color: #8a7b68; font-size: 12px; }

/* 底部按钮 */
.footer-area { text-align: center; margin-top: 20px; }
.main-red-btn { background: linear-gradient(135deg, #c1352f, #8c221e); color: #fdf4e3; border: 1px solid rgba(201, 162, 39, 0.6); padding: 15px 40px; font-size: 18px; font-weight: bold; border-radius: 30px; cursor: pointer; box-shadow: 0 4px 15px rgba(140, 34, 30, 0.2); transition: all 0.3s; }
.main-red-btn:hover { transform: scale(1.02); box-shadow: 0 6px 20px rgba(140, 34, 30, 0.4); }
.copyright { color: #8a7b68; font-size: 13px; margin-top: 20px; }

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .topic-header, .contest-banner { flex-direction: column; align-items: flex-start; text-align: left;}
  .topic-title-area { flex-direction: column; align-items: flex-start; }
  .feed-item { flex-direction: column; gap: 15px; }
}
</style>