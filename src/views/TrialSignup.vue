<template>
  <div class="student-registration-page">
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
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'; // 引入 useRoute
import { showToast } from 'vant';
import { submitOrder } from '@/utils/api';

// 1. 获取路由参数
const route = useRoute();
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

// 由于不再查询状态，这里简单模拟已支付状态 (通常用于组件内部演示，实际应由后端接口判断)
const isPaid = ref(false);
// 注意：如果该页面需要支持“已报名”状态，则需要再次引入 getPayStatus 并在 onMounted 中调用。
// 根据您的要求“进入时不需要再调用fetchPayStatus方法查询状态”，我们假设该页面只用于未支付状态的报名。


const restrictPhoneNumberInput = (event) => {
  // 限制手机号输入，只允许数字
  let value = event.target.value.replace(/\D/g, '');

  // 限制长度为 11 位
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

  // 简单的手机号格式验证
  if (phoneNumber.value.length !== 11) {
    showToast({ message: '请输入11位手机号码！', type: 'fail' });
    return;
  }


  try {
    // 3. 提交参数中添加 productCode
    const data = await submitOrder({
      name: studentName.value,
      phone: phoneNumber.value,
      productCode: productCode.value, // 新增参数
    });

    debugger
    if (data && data.url) {
      // 假设后端返回支付链接
      window.location.href = data.url;
    } else {
      // 如果后端没有返回跳转链接，可以假设订单创建成功，等待异步支付
      showToast({ message: '订单创建成功，请稍候跳转...', type: 'success' });
    }
  } catch (error) {
    console.error('提交订单失败 (业务层)', error);
    // 错误信息已在 request.js 拦截器中处理并显示 Toast
  }
};

</script>

<style scoped>
/* 保持原有的样式结构和命名，并针对价格显示进行微调 */
:root {
  /* 变量定义保持不变 */
  --primary-green: #8CC63F;
  --primary-green-dark: #76a835;
  --text-main: #333333;
  --text-sub: #666666;
  --bg-input: #F7F8FA;
  --border-color: #E5E7EB;
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

/* --- 顶部 Slogan 区域 --- */
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

/* --- 主要内容布局 --- */
.main-content {
  flex-grow: 1;
  padding: 1.6rem;
  padding-bottom: 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  /* 移除 align-items: center; 以解决边距过大问题，如果需要居中，请取消注释下一行 */
  /* align-items: center; */
}

/* --- 白色卡片风格 --- */
.clean-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  padding: 2rem 1.6rem;
  width: 100%;
  /* 确保卡片占据全部宽度 */
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

/* 标题左侧的小绿条装饰 */
.title-decoration {
  display: inline-block;
  width: 4px;
  height: 2.2rem;
  background-color: var(--primary-green);
  border-radius: 2px;
}

/* --- 表单样式 --- */
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

/* --- 课程介绍特定样式 --- */
.course-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

/* 课程内容高亮框 */
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
  margin: 0 auto;
}

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
  gap: 0.8rem; /* 增加价格之间的间距 */
}

/* 价格样式 */
.price-discount {
  font-size: 2.0rem; /* 增大折扣价 */
  font-weight: 800;
}

.price-original {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: line-through;
  margin-left: -0.4rem; /* 稍微向左移动，靠近现价 */
}


.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(125, 182, 49, 0.4);
}

.submit-button:active {
  transform: scale(0.98);
}

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
</style>