<script setup>
import { ref, watch, onActivated, onDeactivated } from 'vue';
import { useRoute } from 'vue-router';

// 确保组件名为 'main'，用于 App.vue 的 keep-alive
defineOptions({
  name: 'main',
});

const route = useRoute();
const active = ref('home');

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

    <van-tabbar v-model="active" route fixed>
      <van-tabbar-item name="home" icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="plan" icon="home-o" replace to="/plan">课表</van-tabbar-item>
      <van-tabbar-item name="pointsmall" icon="home-o" replace to="/pointsmall">积分</van-tabbar-item>
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
