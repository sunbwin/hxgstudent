<template>
  <div class="profile-container">
    <!-- 头部个人信息卡片 -->
    <div class="profile-header">
      <div class="user-info">
        <!-- 动态显示用户姓名 -->
        <h1 class="user-name">{{ userInfo.name || '加载中...' }}</h1>
        <!-- 动态显示用户性别 -->
        <span class="user-gender">{{ userInfo.gender }}</span>
      </div>
      <div class="user-tags">
        <!-- 动态显示年级标签 -->
        <van-tag type="primary" plain class="user-tag">{{ userInfo.grade }}</van-tag>
        <!-- 动态显示入学年份 (这里使用模拟的 admissionYear 字段) -->
        <span class="admission-info" v-if="userInfo.admissionYear">入学: {{ userInfo.admissionYear }}年</span>
      </div>
      <div class="school-info">
        <!-- 动态显示学校信息 (这里使用模拟的 school 字段) -->
        <p>{{ userInfo.school || '学校信息加载中' }}</p>
      </div>
    </div>

    <!-- 功能列表 -->
    <div class="feature-list">
      <van-cell-group inset style="margin: 1rem">
        <!-- 学习情况调查表 -->
        <van-cell
            title="学习情况调查表"
            is-link
            @click="skipInvestigation"
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
        </van-cell>

        <!-- 我的积分：动态显示积分总数 -->
        <van-cell
            title="我的积分"
            is-link
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
          <!-- 动态显示积分总数到箭头的左侧 -->
          <span class="energy-amount">{{ energyAmount !== null ? energyAmount : '...' }}</span>
        </van-cell>

        <!-- 其它被注释掉的功能保持不变 -->
        <!-- <van-cell
            title="我的课时"
            is-link
            @click="skipClassHour"
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
        </van-cell> -->
        <!-- <van-cell
            title="我的订单"
            is-link
            @click="onCellClick('my-orders')"
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
        </van-cell> -->
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { useRouter } from "vue-router";
// 导入 API 文件中的函数 (假设路径为 @/utils/api)
import { getUserInfo, getEnergyAmount } from '@/utils/api';


defineOptions({
  name:'profile'
})

const router = useRouter();

// --- 状态管理 ---
const initialUserInfo = {
  name: '加载中...',
  gender: '',
  grade: '加载中',
  school: '学校信息加载中',
  admissionYear: ''
};
const userInfo = ref({ ...initialUserInfo });
const energyAmount = ref(null); // 积分总数

// --- 数据获取函数 ---

/**
 * 获取用户信息并更新状态
 */
const fetchUserInfo = async () => {
  try {
    // 调用 API 文件中的函数，预期的返回结构: { error_code: 0, obj: { student: { name, gender, grade, ... } } }
    const responseObj = await getUserInfo();

    if (responseObj && responseObj.student) {
      const student = responseObj.student;
      // 使用 API 返回的学生信息更新状态
      userInfo.value = {
        name: student.name || '王大鹏',
        gender: student.gender || '未知',
        grade: student.grade || '未设置',
        // 假设学校和入学年份仍使用模拟值，因为它们不在API返回结构中
        school: '四川省成都市龙江路小学',
        admissionYear: 2018
      };
    } else {
      // 业务层面的数据结构异常，但请求本身成功
      showToast('用户信息结构异常');
    }
  } catch (error) {
    // 错误处理由 request.js 拦截器统一处理，这里仅做 console 打印
    console.error('Fetch User Info Error:', error);
  }
};

/**
 * 获取积分总数并更新状态
 */
const fetchEnergyAmount = async () => {
  try {
    // 调用 API 文件中的函数，预期的返回结构: { error_code: 0, obj: { energy: number } }
    const energyData = await getEnergyAmount();

    if (energyData && typeof energyData.energy === 'number') {
      energyAmount.value = energyData.energy;
    } else {
      // 业务层面的数据结构异常
      showToast('积分数据结构异常');
    }
  } catch (error) {
    // 错误处理由 request.js 拦截器统一处理
    console.error('Fetch Energy Error:', error);
  }
};

// --- 生命周期钩子：组件挂载后获取数据 ---
onMounted(() => {
  fetchUserInfo();
  fetchEnergyAmount();
});


// 模拟点击事件
const onCellClick = (type) => {
  showToast(`点击了: ${type}`);
};

const skipInvestigation = () => {
  router.push({
    name: 'investigation',
  });
};

</script>

<style scoped>
/* primary-green 变量应在全局或父组件中定义，这里为兼容性再次定义 */
:root {
  --primary-green: #8CC63F;
}

.profile-container {
  min-height: 100vh;
  background-color: #f7f8fa; /* Vant 的默认背景色 */
  padding: 1rem 0;
}

/* 头部个人信息卡片 */
.profile-header {
  background-color: var(--primary-green);
  color: #fff;
  padding: 2rem;
  margin: 0 1rem 2rem;
  border-radius: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.user-name {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.user-gender {
  margin-left: 2rem;
  font-size: 1.6rem;
}

.user-tags {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.user-tag {
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.4rem;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
}

.admission-info {
  margin-left: 1rem;
  font-size: 1.6rem;
}

.school-info {
  font-size: 1.6rem;
}

/* 功能列表 */
.feature-list {

}

.cell-icon {
  font-size: 2rem;
  color: var(--primary-green);
  margin-right: 1rem;
}

/* Vant Cell 样式覆盖 */
.van-cell {
  padding: 1.2rem 1.6rem;
}

.van-cell__title {
  font-size: 1.6rem;
}

/* 新增：积分数值样式，显示在右侧 */
.energy-amount {
  color: var(--primary-green);
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 0.5rem; /* 与箭头分隔 */
}

/* 确保 van-cell__value 能够容纳积分数 */
/* 使用 :deep() 或 ::v-deep 穿透样式，修改 Vant 组件内部元素 */
:deep(.van-cell__value) {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 右对齐 */
}
</style>