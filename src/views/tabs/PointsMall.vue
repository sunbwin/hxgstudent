<template>
  <div class="points-mall-container">
    <!-- 下拉刷新组件 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="padding-top: 2rem">
      <!-- 商品列表 -->
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="goods-list">
          <div v-for="item in goodsList" :key="item.id" class="goods-item" @click="handleExchange(item)">
            <div class="goods-image-wrapper">
              <img :src="item.image" alt="商品图片" class="goods-image">
            </div>
            <div class="goods-price">{{ item.points }} 积分</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <!-- 顶部积分余额展示 -->
    <div class="points-balance-card">
      <div class="points-text">当前可兑换积分：</div>
      <div class="points-number">{{ userPoints }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';

// 模拟用户积分
const userPoints = ref(1000);

// 商品列表数据
const goodsList = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

// 模拟商品数据
// 当 goods 文件夹位于 public 目录时，可以直接通过绝对路径 /goods/... 访问
const allGoods = [
  { id: 1, points: 200, image: '/goods/img_0.png' },
  { id: 2, points: 200, image: '/goods/img_1.png' },
  { id: 3, points: 200, image: '/goods/img_2.png' },
  { id: 4, points: 200, image: '/goods/img_3.png' },
  { id: 5, points: 200, image: '/goods/img_4.png' },
  { id: 6, points: 300, image: '/goods/img_5.png' },
  { id: 7, points: 300, image: '/goods/img_6.png' },
  { id: 8, points: 300, image: '/goods/img_7.png' },
  { id: 9, points: 300, image: '/goods/img_8.png' },
];

// 加载更多商品数据
const onLoad = () => {
  // 模拟异步加载
  setTimeout(() => {
    if (refreshing.value) {
      goodsList.value = [];
      refreshing.value = false;
    }

    // 假设一次加载6个商品
    const start = goodsList.value.length;
    const end = start + 6;
    const newGoods = allGoods.slice(start, end);
    goodsList.value.push(...newGoods);

    loading.value = false;

    if (goodsList.value.length >= allGoods.length) {
      finished.value = true;
    }
  }, 1000);
};

// 下拉刷新
const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  onLoad();
};

// 模拟兑换操作
const handleExchange = (item) => {
  if (userPoints.value >= item.points) {
    showToast(`成功兑换商品: ${item.id}`);
    userPoints.value -= item.points;
  } else {
    showToast('积分不足，无法兑换');
  }
};
</script>

<style scoped>
.points-mall-container {
  flex: 1; /* 让内容区占据剩余所有空间 */
  overflow-y: auto; /* **关键：设置可滚动** */
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-bottom: 50px; /* 关键：留出 van-tabbar 的高度 */
}

/* 顶部积分卡片 */
.points-balance-card {
  background-color: #fff;
  padding: 1rem 1.6rem;
  text-align: center;
  border-radius: 0.8rem 0.8rem 0 0;
  box-shadow: 0 -0.2rem 0.6rem rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.points-text {
  font-size: 1.4rem;
  color: #969799;
  margin-right: 1rem;
}

.points-number {
  font-size: 2.2rem;
  font-weight: 600;
  color: #ff976a;
}

/* 商品列表布局 */
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1.6rem;
}

.goods-item {
  width: 48%; /* 两列布局 */
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 1.6rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
}

/* 商品图片容器 */
.goods-image-wrapper {
  width: 100%;
  height: 16rem; /* 固定高度 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.goods-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* 居中裁切 */
}

/* 商品积分 */
.goods-price {
  font-size: 1.6rem;
  font-weight: 500;
  color: #ff976a;
  margin-top: 1rem;
}
</style>
