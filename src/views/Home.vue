<template>
  <div class="home-wrapper">
    <!-- 四角回纹装饰 -->
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>

    <!-- 主视觉 -->
    <header class="hero-section">
      <!-- 印章 -->
      <div class="seal"><span>醒</span><span>狮</span></div>

      <div class="eyebrow">
        <span class="eyebrow-line"></span>
        <span class="eyebrow-dot">❖</span>
        <span class="eyebrow-line"></span>
      </div>

      <h1 class="main-title">醒狮数脉</h1>

      <div class="title-rule">
        <i></i><b>佛 山 醒 狮</b><i></i>
      </div>

      <p class="sub-title">佛山非遗数字化保护与 IP 创新传播平台</p>
      <p class="slogan">科技赋能非遗 · 数字传承文明</p>

      <div class="hero-actions">
        <button class="primary-btn" @click="$router.push('/3d')">
          开启沉浸式体验
          <span class="btn-arrow">→</span>
        </button>
      </div>
    </header>

    <!-- 功能专区 -->
    <main class="section">
      <div class="section-head">
        <span class="section-bar"></span>
        <h2>功能专区</h2>
        <span class="section-note">四大模块 · 沉浸式感受非遗之美</span>
      </div>

      <div class="card-grid">
        <article
          v-for="c in features"
          :key="c.path"
          class="card"
          @click="$router.push(c.path)"
        >
          <span class="card-corner"></span>
          <div class="card-icon">{{ c.icon }}</div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.desc }}</p>
          <span class="card-more">进入展馆 →</span>
        </article>
      </div>
    </main>

    <!-- 底部横幅 -->
    <section class="cta-banner" @click="$router.push('/market')">
      <span class="cta-seal">非遗</span>
      <div class="cta-text">
        <h3>入驻商家 · 数字交易市场</h3>
        <p>汇聚非遗传承字号与文创品牌，让醒狮 IP 创造价值</p>
      </div>
      <span class="cta-arrow">→</span>
    </section>
  </div>
</template>

<script setup>
const features = [
  { path: '/3d', icon: '狮', title: '狮头 3D 查看', desc: '360° 端详醒狮扎作结构，WebGL 轻量化渲染' },
  { path: '/ar', icon: '境', title: 'WebAR 体验', desc: '无需下载 APP，扫一扫唤醒虚拟醒狮' },
  { path: '/knowledge', icon: '典', title: '醒狮知识库', desc: '结构化数字档案与微型知识图谱' },
  { path: '/community', icon: '绘', title: '纹样共创社区', desc: '用户自主创作醒狮纹样，共建 UGC 生态' }
]
</script>

<style scoped>
.home-wrapper {
  /* 非遗配色变量 */
  --cream: #faf5ea;
  --red: #b02a2a;
  --red-deep: #8c221e;
  --red-soft: rgba(176, 42, 42, 0.32);
  --gold: #c9a227;
  --gold-soft: rgba(201, 162, 39, 0.42);
  --ink: #3b2f26;
  --ink-muted: #8a7b68;
  --serif: "Songti SC", "STSong", "STZhongsong", "SimSun", "Noto Serif SC", "Source Han Serif SC", serif;

  position: relative;
  min-height: calc(100vh - 80px);
  padding: 0 0 90px;
  overflow: hidden;
  background-color: var(--cream);
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='340' viewBox='0 0 340 340'%3E%3Cg fill='none' stroke='%23c9a227' stroke-width='1.6' stroke-linecap='round' opacity='0.20'%3E%3Cpath d='M24 74 c0 -20 18 -35 38 -31 c6 -20 30 -27 47 -14 c10 -15 35 -14 45 3 c20 -5 37 10 35 30 c15 2 26 15 21 29'/%3E%3Cpath d='M166 60 c13 -5 25 6 26 18'/%3E%3Cpath d='M62 43 c-8 -10 -25 -9 -31 3'/%3E%3Cg transform='translate(170 170)'%3E%3Cpath d='M24 74 c0 -20 18 -35 38 -31 c6 -20 30 -27 47 -14 c10 -15 35 -14 45 3 c20 -5 37 10 35 30 c15 2 26 15 21 29'/%3E%3Cpath d='M166 60 c13 -5 25 6 26 18'/%3E%3Cpath d='M62 43 c-8 -10 -25 -9 -31 3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(ellipse 62% 46% at 50% 0%, rgba(201, 162, 39, 0.16), rgba(201, 162, 39, 0) 72%);
  background-size: 340px 340px, 100% 100%;
  background-repeat: repeat, no-repeat;
}

/* ---------- 四角回纹 ---------- */
.corner {
  position: absolute;
  width: 108px;
  height: 108px;
  pointer-events: none;
  z-index: 1;
}
.corner::before {
  content: '';
  position: absolute;
  inset: 0;
  border-top: 2px solid var(--red-soft);
  border-left: 2px solid var(--red-soft);
}
.corner::after {
  content: '';
  position: absolute;
  top: 13px;
  left: 13px;
  width: 46px;
  height: 46px;
  border-top: 1.5px solid var(--gold-soft);
  border-left: 1.5px solid var(--gold-soft);
}
.corner.tl { top: 26px; left: 26px; }
.corner.tr { top: 26px; right: 26px; transform: rotate(90deg); }
.corner.br { bottom: 26px; right: 26px; transform: rotate(180deg); }
.corner.bl { bottom: 26px; left: 26px; transform: rotate(270deg); }

/* ---------- 主视觉 ---------- */
.hero-section {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 74px 20px 0;
}

.seal {
  position: absolute;
  top: 24px;
  right: 8%;
  width: 62px;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--red);
  border-radius: 8px;
  color: #fdf3e0;
  font-family: var(--serif);
  font-size: 20px;
  line-height: 1.06;
  letter-spacing: 2px;
  box-shadow: 0 8px 20px rgba(140, 34, 30, 0.28);
  transform: rotate(-5deg);
  opacity: 0.94;
  pointer-events: none;
}

.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: var(--gold);
  margin-bottom: 24px;
}
.eyebrow-line {
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
}
.eyebrow-line:last-child {
  background: linear-gradient(270deg, transparent, var(--gold));
}
.eyebrow-dot { font-size: 13px; }

.main-title {
  font-family: var(--serif);
  font-size: 76px;
  font-weight: 700;
  letter-spacing: 14px;
  text-indent: 14px;
  color: var(--red);
  margin-bottom: 20px;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.65), 0 10px 28px rgba(176, 42, 42, 0.16);
}

.title-rule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 28px;
  color: var(--gold);
}
.title-rule i {
  width: 52px;
  height: 1px;
  background: var(--gold-soft);
}
.title-rule b {
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3px;
}

.sub-title {
  font-size: 17px;
  color: var(--ink);
  letter-spacing: 4px;
  margin-bottom: 12px;
  font-weight: 500;
}
.slogan {
  font-size: 14px;
  color: var(--ink-muted);
  letter-spacing: 3px;
  margin-bottom: 42px;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 40px;
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #fdf4e3;
  background: linear-gradient(135deg, #c1352f, var(--red-deep));
  border: 1px solid rgba(201, 162, 39, 0.78);
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(140, 34, 30, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px rgba(140, 34, 30, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.26);
}
.btn-arrow {
  letter-spacing: 0;
  transition: transform 0.3s ease;
}
.primary-btn:hover .btn-arrow { transform: translateX(5px); }

/* ---------- 功能专区 ---------- */
.section {
  position: relative;
  z-index: 2;
  width: 88%;
  max-width: 1120px;
  margin: 92px auto 0;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
}
.section-bar {
  width: 5px;
  height: 26px;
  border-radius: 3px;
  background: linear-gradient(180deg, #c1352f, var(--red-deep));
}
.section-head h2 {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 4px;
  color: var(--ink);
  text-indent: 4px;
}
.section-note {
  margin-left: 6px;
  font-size: 13px;
  color: var(--ink-muted);
  letter-spacing: 1px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.card {
  position: relative;
  padding: 34px 20px 28px;
  text-align: center;
  background: #fffdf8;
  border: 1px solid rgba(176, 42, 42, 0.13);
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(139, 105, 20, 0.07);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.card::after {
  content: '';
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 18px;
  height: 18px;
  border-right: 1.5px solid var(--gold-soft);
  border-bottom: 1.5px solid var(--gold-soft);
  opacity: 0.75;
}
.card-corner {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 18px;
  height: 18px;
  border-top: 1.5px solid var(--gold-soft);
  border-left: 1.5px solid var(--gold-soft);
  opacity: 0.75;
}
.card:hover {
  transform: translateY(-8px);
  border-color: rgba(176, 42, 42, 0.42);
  box-shadow: 0 18px 36px rgba(139, 105, 20, 0.16);
}
.card:hover::before { opacity: 1; }

.card-icon {
  width: 68px;
  height: 68px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 28px;
  color: var(--red);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 28%, #fffaf0, #f5e6c4);
  border: 1px solid rgba(201, 162, 39, 0.55);
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.7);
  transition: transform 0.35s ease;
}
.card:hover .card-icon { transform: scale(1.08) rotate(-4deg); }

.card h3 {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--ink);
  margin-bottom: 10px;
}
.card p {
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--ink-muted);
}
.card-more {
  display: inline-block;
  margin-top: 16px;
  font-size: 12px;
  letter-spacing: 2px;
  color: var(--red);
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.35s ease;
}
.card:hover .card-more {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- 底部横幅 ---------- */
.cta-banner {
  position: relative;
  z-index: 2;
  width: 88%;
  max-width: 1120px;
  margin: 58px auto 0;
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 32px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--red), var(--red-deep));
  box-shadow: 0 14px 34px rgba(140, 34, 30, 0.24);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.cta-banner::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(201, 162, 39, 0.42);
  border-radius: 11px;
  pointer-events: none;
}
.cta-banner:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 44px rgba(140, 34, 30, 0.32);
}
.cta-seal {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: grid;
  place-content: center;
  border: 1px solid rgba(201, 162, 39, 0.62);
  border-radius: 8px;
  background: rgba(253, 244, 227, 0.12);
  color: #f2dfae;
  font-family: var(--serif);
  font-size: 17px;
  letter-spacing: 2px;
}
.cta-text { position: relative; }
.cta-text h3 {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fdf4e3;
  margin-bottom: 8px;
}
.cta-text p {
  font-size: 13.5px;
  letter-spacing: 1px;
  color: rgba(253, 244, 227, 0.74);
}
.cta-arrow {
  margin-left: auto;
  font-size: 26px;
  color: #e8c96a;
  transition: transform 0.3s ease;
}
.cta-banner:hover .cta-arrow { transform: translateX(6px); }

/* ---------- 响应式 ---------- */
@media (max-width: 980px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .corner, .seal { display: none; }
  .hero-section { padding-top: 46px; }
  .main-title { font-size: 46px; letter-spacing: 8px; text-indent: 8px; }
  .eyebrow-line { width: 44px; }
  .sub-title { font-size: 14px; letter-spacing: 2px; }
  .slogan { font-size: 12.5px; letter-spacing: 1px; margin-bottom: 34px; }
  .primary-btn { padding: 13px 30px; font-size: 15px; letter-spacing: 2px; }
  .section { margin-top: 64px; }
  .section-head { flex-wrap: wrap; gap: 10px; }
  .section-head h2 { font-size: 21px; }
  .section-note { width: 100%; margin-left: 19px; }
  .cta-banner {
    flex-direction: column;
    text-align: center;
    gap: 14px;
    padding: 26px 20px;
  }
  .cta-arrow { margin-left: 0; }
}
@media (max-width: 560px) {
  .card-grid { grid-template-columns: 1fr; }
}
</style>
