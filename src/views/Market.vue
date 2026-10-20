<template>
  <div class="market-container">
    <!-- 页头 -->
    <header class="page-header">
      <div class="title-area">
        <h1>🛒 数字交易市场</h1>
        <p>入驻商家 · 让非遗 IP 创造价值</p>
      </div>
    </header>

    <!-- 商家网格（静态展示） -->
    <main class="merchant-grid">
      <div class="merchant-card" v-for="m in merchants" :key="m.name">
        <!-- 头部：头像 + 名称 + 徽章 -->
        <div class="m-head">
          <div class="m-avatar">{{ m.avatar }}</div>
          <div class="m-title">
            <h3>
              {{ m.name }}
              <span :class="['m-badge', { heritage: m.heritage }]">
                {{ m.heritage ? '非遗传承字号' : '认证商家' }}
              </span>
            </h3>
            <p class="m-loc">📍 {{ m.location }}</p>
          </div>
        </div>

        <!-- 简介 -->
        <p class="m-desc">{{ m.desc }}</p>

        <!-- 主营品类 -->
        <div class="m-tags">
          <span v-for="t in m.tags" :key="t">{{ t }}</span>
        </div>

        <!-- 作品预览 -->
        <div class="m-works">
          <img v-for="(w, i) in m.works" :key="i" :src="w" :alt="m.name + '作品'" />
        </div>

        <!-- 底部数据 -->
        <div class="m-stats">
          <span>在售 <b>{{ m.count }}</b> 件</span>
          <span>好评 <b>{{ m.rate }}</b></span>
          <span>{{ m.since }} 入驻</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 入驻商家数据（仅静态展示）
const merchants = [
  {
    name: '黎家狮扎作坊', avatar: '🦁', heritage: true, location: '广东 · 佛山',
    desc: '佛山狮头扎作老字号，传承二百余年，"扎、扑、写、装"全手工技艺，狮头远销海内外狮团。',
    tags: ['狮头扎作', '非遗工艺', '高端定制'],
    works: ['/5.jpg', '/8.jpg', '/3.jpg'],
    count: 12, rate: '99%', since: '2023'
  },
  {
    name: '国潮手艺人工作室', avatar: '🧵', heritage: false, location: '广东 · 广州',
    desc: '专注刺绣与醒狮结合的数字艺术创作，金线走针、瑞狮腾跃，作品多次获省级文创奖项。',
    tags: ['数字藏品', '刺绣艺术'],
    works: ['/1.jpg', '/4.jpg', '/7.jpg'],
    count: 8, rate: '98%', since: '2023'
  },
  {
    name: '文创小生文创社', avatar: '🎨', heritage: false, location: '广东 · 佛山',
    desc: '面向年轻人的醒狮文创设计团队，贴纸、文具、生活周边一应俱全，让醒狮融入日常。',
    tags: ['文创周边', '贴纸文具'],
    works: ['/2.jpg', '/8.jpg', '/5.jpg'],
    count: 23, rate: '97%', since: '2024'
  },
  {
    name: '佛山阿伯彩绘坊', avatar: '🖌', heritage: true, location: '广东 · 佛山',
    desc: '老手艺人自营彩绘坊，整理传统狮头彩绘图腾与三大经典配色，素材深受设计师喜爱。',
    tags: ['彩绘纹样', '设计素材'],
    works: ['/5.jpg', '/3.jpg', '/6.jpg'],
    count: 6, rate: '99%', since: '2024'
  },
  {
    name: '剪纸传承人工作室', avatar: '✂️', heritage: true, location: '广东 · 佛山',
    desc: '百年剪纸技法代代相传，红纸为底、金箔点睛，以剪纸演绎醒狮百态，部分收益用于非遗进校园。',
    tags: ['剪纸艺术', '数字藏品'],
    works: ['/7.jpg', '/4.jpg', '/1.jpg'],
    count: 9, rate: '100%', since: '2024'
  },
  {
    name: '国风设计师潮玩铺', avatar: '🧸', heritage: false, location: '广东 · 深圳',
    desc: '醒狮 IP 潮玩手办与授权合作，方头阔口、憨态可掬，兼顾趣味性与收藏价值。',
    tags: ['潮玩手办', 'IP 授权'],
    works: ['/8.jpg', '/2.jpg', '/7.jpg'],
    count: 11, rate: '98%', since: '2025'
  }
]
</script>

<style scoped>
.market-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

/* 页头 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 34px;
}
.title-area h1 {
  color: #d4af37;
  font-size: 36px;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.title-area p { color: #aaa; font-size: 16px; }

/* 商家网格 */
.merchant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}
.merchant-card {
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #333;
  border-radius: 16px;
  padding: 22px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}
.merchant-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  opacity: 0;
  transition: opacity 0.35s;
}
.merchant-card:hover {
  transform: translateY(-6px);
  border-color: #d4af37;
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.12);
}
.merchant-card:hover::before { opacity: 1; }

/* 头部 */
.m-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.m-avatar {
  width: 54px; height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  border: 1px solid rgba(212, 175, 55, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  flex-shrink: 0;
}
.m-title { min-width: 0; }
.m-title h3 {
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.m-badge {
  font-size: 11px;
  font-weight: normal;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 2px 8px;
  border-radius: 10px;
  white-space: nowrap;
}
.m-badge.heritage {
  background: rgba(212, 175, 55, 0.12);
}
.m-loc { color: #777; font-size: 12px; margin-top: 5px; }

/* 简介 */
.m-desc {
  color: #999;
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 14px;
  text-align: justify;
}

/* 主营标签 */
.m-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.m-tags span {
  background: #222;
  border: 1px solid #3a3a3a;
  color: #b5b5b5;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 12px;
}

/* 作品预览 */
.m-works {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.m-works img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #2c2c2c;
}

/* 底部数据 */
.m-stats {
  display: flex;
  gap: 18px;
  border-top: 1px solid #2c2c2c;
  padding-top: 14px;
  font-size: 12px;
  color: #888;
}
.m-stats b {
  color: #d4af37;
  font-weight: bold;
}

/* 响应式 */
@media (max-width: 768px) {
  .title-area h1 { font-size: 28px; }
  .merchant-grid { grid-template-columns: 1fr; }
}
</style>
