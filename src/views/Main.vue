<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPayStatus } from '@/utils/api'; // 导入 API 函数

// 确保组件名为 'main'，用于 App.vue 的 keep-alive
defineOptions({
  name: 'main',
});

const route = useRoute();
const router = useRouter(); // **新增：初始化路由实例**
const active = ref('plan'); // 默认选中 'plan' (与 router/index.js 中的 redirect 匹配)

// 确保 tabbar 选中状态与当前路由匹配
watch(route, (newRoute) => {
  const tabNames = ['plan', 'profile']; // 仅包含当前可见的 tab item name
  if (tabNames.includes(newRoute.name)) {
    active.value = newRoute.name;
  }
}, { immediate: true });


/**
 * 检查试听课状态并导航
 */
const checkTrialStatus = async () => {
  try {
    // 调用 API，getPayStatus 返回的是后端的 res.obj
    const res = await getPayStatus();

    // 检查状态是否为 0 (未支付/未报名)
    if (res && res.status === 0) {
      // **状态等于 0，跳转到 TrialSignup 页面并传入参数**
      router.replace({ // 使用 replace 避免在历史记录中留下 Main 页面
        name: 'TrialSignup',
        query: {
          productCode: res.productCode,
          productName: res.productName,
          price: res.price,
          orgiPrice: res.orgiPrice,
        },
      });
    }
    // 如果 status 不为 0，则不进行跳转，停留在当前页面（/plan）

  } catch (error) {
    // API 调用失败或业务逻辑错误已在 request.js 中处理了 toast 提示
    console.error('获取试听课状态失败:', error);
    // 错误时不影响用户进入主界面
  }
};

// **新增：在组件挂载后执行状态检查**
onMounted(() => {
  checkTrialStatus();
});
</script>

<template>
  <div>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive include="home,plan,pointsmall,profile">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </router-view>
    </main>

    <van-tabbar v-model="active" active-color="var(--primary-green)" inactive-color="#000" route fixed>
      <van-tabbar-item name="plan" icon="home-o" replace to="/plan">课表</van-tabbar-item>
      <van-tabbar-item name="profile" icon="setting-o" replace to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
/* 这是 Main.vue 的样式 */
.main-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout-content {
  flex: 1; /* 让内容区占据剩余所有空间 */
  overflow-y: auto; /* **关键：设置可滚动** */
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-bottom: 50px; /* 关键：留出 van-tabbar 的高度 */
}
</style>