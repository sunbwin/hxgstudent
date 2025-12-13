<template>
  <div class="student-registration-page">
    <!-- 移除了 GlobalLoading, Toast 和 RequestHandler 组件，依赖 request.js 封装的 Vant Toast/Loading -->

    <header class="header-section">
      <!-- 适应 rem 规则，将 max-width 改为 rem 单位 -->
      <img src="/hxg_slogan1.svg" class="slogan-img" alt="要我学变我要学-乐培生好习惯" />
    </header>

    <div class="main-content">
      <div class="form-card clean-card">
        <h2 class="card-title">
          <span class="title-decoration"></span>
          <!-- 动态显示 product name -->
          {{ productName }}报名
        </h2>
        <div class="form-group">
          <label for="studentName" class="form-label">学生姓名</label>
          <input type="text" id="studentName" v-model="studentName" :disabled="isPaid" class="form-input"
                 placeholder="请输入学生姓名" />
        </div>
        <div class="form-group">
          <label for="phoneNumber" class="form-label">手机号</label>
          <input type="tel" id="phoneNumber" v-model="phoneNumber" :disabled="isPaid" class="form-input"
                 placeholder="请输入手机号" maxlength="11" pattern="[0-9]{11}" @input="restrictPhoneNumberInput" />
        </div>
      </div>

      <div class="form-card course-intro-card clean-card">
        <h2 class="card-title">
          <span class="title-decoration"></span>
          课程介绍
        </h2>
        <div class="course-details">
          <h3 class="course-subtitle">课程内容和目标</h3>
          <div class="highlight-box">
            <p class="course-text">内容：如何反思每天的学习情况</p>
            <p class="course-plus">+</p>
            <p class="course-text">目标：初步掌握每日三反思的方法并能够清晰的表达</p>
          </div>
          <h3 class="course-subtitle">课程安排：采用1对1私教线上视频授课</h3>
          <div class="highlight-box">
            <p class="course-text">1节正课（40分钟）</p>
            <p class="course-plus">+</p>
            <p class="course-text">2节精英课（20分钟/每节）</p>
          </div>
          <p class="course-note">说明：试听课报名成功后，我们会通过你留下的联系方式及时与您联系，并和您协商确定上课时间。</p>
        </div>
      </div>
    </div>

    <footer class="footer-fixed">
      <div class="footer-content">
        <button v-if="!isPaid" @click="handleSubmit" class="submit-button">
          <!-- 动态显示价格，并保留原价 -->
          立即报名支付
          <span class="price-discount">￥{{ priceYuan }}</span>
          <span class="price-original">￥{{ orgiPriceYuan }}</span>
        </button>
        <p v-else class="success-message">
          <span class="check-icon">✔</span> 报名成功，老师会在一个工作日内联系你
        </p>
      </div>

      <!-- 新增：绑定学生功能区域 -->
      <div class="bind-section">
        <span class="bind-text">如果孩子已经报名过体验课，请点击绑定</span>
        <button @click="showBindDialog = true" class="bind-button">绑定</button>
      </div>
      <!-- 结束：绑定学生功能区域 -->

    </footer>

    <!-- 自定义 iOS 卡片式弹窗：绑定学生 -->
    <transition name="van-fade">
      <div v-if="showBindDialog" class="custom-ios-dialog-overlay">
        <div class="custom-ios-dialog-card">

          <div class="dialog-content">
            <!-- 标题区域 (新增) -->
            <div class="dialog-title">绑定学生</div>

            <!-- 输入区域 -->
            <div class="custom-input-card">
              <label for="stuCodeInput" class="input-label">学生编号</label>
              <input
                  type="text"
                  id="stuCodeInput"
                  v-model="stuCode"
                  placeholder="请输入学生编号"
                  maxlength="20"
                  class="input-control"
              />
            </div>
          </div>

          <!-- 底部操作按钮区域 -->
          <div class="dialog-actions">
            <button @click="showBindDialog = false" class="action-button cancel-button">
              取消
            </button>
            <button @click="handleBindConfirm" class="action-button confirm-button">
              确认
            </button>
          </div>

        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 引入 Vant 组件
import { showToast } from 'vant';
// 引入 API 函数，包含新增的 bindStudent
import { submitOrder, bindStudent } from '@/utils/api';

// 1. 获取路由参数
const route = useRoute();
const router = useRouter();

const productCode = computed(() => route.query.productCode || 'N/A');
const productName = computed(() => route.query.productName || '体验课');
const price = computed(() => Number(route.query.price) || 0);
const orgiPrice = computed(() => Number(route.query.orgiPrice) || 0);

// 2. 价格单位转换：分 -> 元
const priceYuan = computed(() => (price.value / 100).toFixed(2));
const orgiPriceYuan = computed(() => (orgiPrice.value / 100).toFixed(2));

// --- 页面状态和数据 ---
const studentName = ref('');
const phoneNumber = ref('');
const isPaid = ref(false);

// 使用 CSS 变量 --primary-green: #8CC63F; 作为主色调
const primaryGreen = ref('#8CC63F');

// --- 绑定功能状态 ---
const showBindDialog = ref(false);
const stuCode = ref('');

const restrictPhoneNumberInput = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  if (value.length > 11) {
    value = value.substring(0, 11);
  }
  phoneNumber.value = value;
};

// 提交订单及支付
const handleSubmit = async () => {
  if (!studentName.value || !phoneNumber.value) {
    showToast({ message: '请填写所有必填信息！', type: 'fail' });
    return;
  }

  if (phoneNumber.value.length !== 11) {
    showToast({ message: '请输入11位手机号码！', type: 'fail' });
    return;
  }

  try {
    const data = await submitOrder({
      name: studentName.value,
      phone: phoneNumber.value,
      productCode: productCode.value,
    });

    if (data && data.url) {
      window.location.href = data.url;
    } else {
      showToast({ message: '订单创建成功，请稍候跳转...', type: 'success' });
    }
  } catch (error) {
    console.error('提交订单失败 (业务层)', error);
  }
};

/**
 * 确认绑定学生
 */
const handleBindConfirm = async () => {
  if (!stuCode.value) {
    showToast({ message: '学生编号不能为空', type: 'fail' });
    return;
  }

  try {
    // 4. 点击确认，调用 api 接口 post 请求 /apiv1/home/bindstu，传入参数 stuCode
    await bindStudent({ stuCode: stuCode.value });

    showToast({ message: '绑定成功！', type: 'success' });

    // 5. 请求成功后使用 route 覆盖当前页面打开 /plan 路径
    router.replace('/plan');

  } catch (error) {
    // 错误处理由 request.js 拦截器处理
    console.error('绑定学生失败:', error);
    // 如果失败，阻止弹窗关闭 (保持开启状态)
    // 注意：由于是自定义弹窗，我们需要手动控制关闭
  } finally {
    // 无论成功还是失败，都尝试关闭弹窗
    showBindDialog.value = false;
  }
};

</script>

<style scoped>
/* 样式变量定义 */
:root {
  --primary-green: #8CC63F;
  --primary-green-dark: #76a835;
  --text-main: #333333;
  --text-sub: #666666;
  --bg-input: #F7F8FA;
  --border-color: #E5E7EB;
  --dialog-border-radius: 1.2rem; /* iOS 风格圆角 */
  --dialog-action-border: #d6d6d6; /* 按钮分割线颜色 */
}

/* --- 基础重置 --- */
*, *::before, *::after {
  box-sizing: border-box;
}

.student-registration-page {
  font-family: "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background-color: #f7f8fa;
  color: var(--text-main);
}

/* --- 顶部 Slogan 区域 (保持不变) --- */
.header-section {
  width: 100%;
  padding: 3rem 1.6rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.slogan-img {
  width: 100%;
  max-width: 30rem;
  height: auto;
  display: block;
}

/* --- 主要内容布局 (保持不变) --- */
.main-content {
  flex-grow: 1;
  padding: 1.6rem;
  padding-bottom: 9rem; /* 确保底部有足够留白 */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

/* --- 白色卡片风格 (保持不变) --- */
.clean-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  padding: 2rem 1.6rem;
  width: 100%;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.title-decoration {
  display: inline-block;
  width: 4px;
  height: 2.2rem;
  background-color: var(--primary-green);
  border-radius: 2px;
}

/* --- 表单样式 (保持不变) --- */
.form-group {
  margin-bottom: 2.2rem;
}

.form-label {
  display: block;
  color: var(--text-main);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.form-input {
  width: 100%;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--border-color);
  border-radius: 0.8rem;
  background-color: var(--bg-input);
  color: var(--text-main);
  font-size: 1.6rem;
  outline: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
}

.form-input::placeholder {
  color: #9CA3AF;
}

.form-input:focus {
  background-color: #fff;
  border-color: var(--primary-green);
  box-shadow: 0 0 0 3px rgba(140, 198, 63, 0.15);
}

.form-input:disabled {
  background-color: #f3f4f6;
  color: #9ca3af;
  border-color: #e5e7eb;
  cursor: not-allowed;
}

/* --- 课程介绍特定样式 (保持不变) --- */
.course-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.highlight-box {
  background-color: rgba(140, 198, 63, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  border: 1px dashed var(--primary-green);
}

.course-text {
  font-size: 1.4rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0;
}

.course-plus {
  font-size: 1.6rem;
  color: var(--primary-green);
  margin: 0.3rem 0;
  font-weight: bold;
}

.course-note {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-sub);
  background-color: #fff;
  padding-top: 1rem;
}

/* --- 底部固定区域 --- */
.footer-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid #f0f0f0;
  padding: 1.5rem 1.6rem;
  z-index: 100;
  padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));
}

.footer-content {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto 1.5rem; /* 增加底部间距，为绑定区域留出空间 */
}

/* --- 提交按钮样式 (保持不变) --- */
.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #9bd44d 0%, #7db631 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 1.2rem 1.5rem;
  border-radius: 99px;
  box-shadow: 0 4px 12px rgba(125, 182, 49, 0.3);
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.price-discount {
  font-size: 2.0rem;
  font-weight: 800;
}

.price-original {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: line-through;
  margin-left: -0.4rem;
}

/* --- 成功消息样式 (保持不变) --- */
.success-message {
  color: var(--primary-green-dark);
  background-color: #f0fdf4;
  border: 1px solid #dcfce7;
  padding: 1rem;
  border-radius: 0.8rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.check-icon {
  font-size: 1.8rem;
}

/* --- 新增：绑定学生区域样式 (文本和按钮在同一行) --- */
.bind-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  font-size: 1.3rem;
  color: var(--text-sub);
}

.bind-text {
  flex: 1;
  text-align: left;
}

.bind-button {
  background: none;
  border: none;
  color: var(--primary-green);
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
}


/*==============================================*/
/* --- 自定义 iOS 风格弹窗样式 --- */
/*==============================================*/

/* 1. 弹窗背景遮罩 */
.custom-ios-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200; /* 确保在最上层 */
}

/* 2. 弹窗主体卡片 - 确保圆角 */
.custom-ios-dialog-card {
  width: 80%; /* 宽度适中 */
  max-width: 32rem;
  background-color: #ffffff;
  border-radius: var(--dialog-border-radius); /* 确保圆角生效 */
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

/* 3. 弹窗内容区域 */
.dialog-content {
  padding: 1.8rem 1.6rem 2.0rem; /* 调整底部内边距，给标题和输入框留出空间 */
}

/* 4. 弹窗标题样式 (新增) */
.dialog-title {
  font-size: 1.7rem; /* 标题大小 */
  font-weight: 600; /* 粗体 */
  color: var(--text-main);
  margin-bottom: 1.5rem; /* 底部留出间距 */
  line-height: 1.2;
}


/* 5. 自定义输入卡片样式 (模拟图片中的输入框) */
.custom-input-card {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  /* 移除 margin-bottom，改为由 dialog-content 统一控制 */
}

.input-label {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-main);
  padding-right: 1.2rem;
  white-space: nowrap;
}

.input-control {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: var(--text-main);
  background-color: transparent;
  padding: 0;
  /* 调整 placeholder 颜色 */
  --webkit-input-placeholder: #a0a0a0;
  --moz-placeholder: #a0a0a0;
  --ms-input-placeholder: #a0a0a0;
}

.input-control::placeholder {
  color: #a0a0a0;
  font-weight: 400;
}


/* 6. 底部按钮区域 */
.dialog-actions {
  display: flex;
  border-top: 1px solid var(--dialog-action-border); /* 按钮上方水平分割线 */
}

.action-button {
  flex: 1;
  height: 4.8rem;
  font-size: 1.7rem;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.1s;
}

.action-button:hover:active {
  background-color: #f7f7f7;
}

/* 垂直分割线 */
.action-button:first-child {
  border-right: 1px solid var(--dialog-action-border);
}

/* 取消按钮：默认颜色 */
.cancel-button {
  color: var(--text-main);
}

/* 确认按钮：主色调和加粗 */
.confirm-button {
  color: var(--primary-green);
  font-weight: 600;
}

/* 过渡动画 (使用 Vant 的 fade 效果) */
.van-fade-enter-active,
.van-fade-leave-active {
  transition: opacity 0.3s ease;
}

.van-fade-enter-from,
.van-fade-leave-to {
  opacity: 0;
}
</style>