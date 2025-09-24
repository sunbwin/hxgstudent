<script setup>
import { ref, onMounted, onActivated, onDeactivated } from 'vue';
import { useRouter,onBeforeRouteLeave } from 'vue-router';
import { defineOptions } from 'vue';

// 使用 defineOptions 来定义组件的 name
defineOptions({
  name: 'home',
});

const router = useRouter();
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

// const scrollContainer = ref(null);
// let savedScrollTop = 0;

// 模拟数据请求
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newList = [];
      const item = {
        videoUrl: '/ad.mp4',
        posterUrl: '/ad.png',
      };
      // 模拟每次加载 10 条数据
      const start = list.value.length;
      for (let i = start; i < start + 10; i++) {
        newList.push(item);
      }
      resolve(newList);
    }, 1000);
  });
};

const onLoad = async () => {
  loading.value = true;
  const newData = await fetchData();
  list.value.push(...newData);
  loading.value = false;

  if (list.value.length >= 40) {
    finished.value = true;
  }
};

const onRefresh = async () => {
  // 清空列表数据
  list.value = [];
  finished.value = false;
  refreshing.value = true;

  const newData = await fetchData();
  list.value.push(...newData);
  loading.value = false;
  refreshing.value = false;
};

const goToVideoPlayer = () => {
  router.push({
    name: 'VideoPlayer',
  });
};
const goToTrial = () => {
  router.push({
    name: 'trial',
  });
};

onMounted(() => {
  // 组件挂载后，手动触发一次加载
  debugger
  if (list.value.length === 0) {
    onLoad();
  }
});

const pullRefreshRef = ref(null);
let savedScrollTop = 0;

onMounted(() => {
  debugger
});

onBeforeRouteLeave(() => {
  const vanPullRefreshElement = document.querySelector('.van-pull-refresh');
  if (vanPullRefreshElement) {
    savedScrollTop = vanPullRefreshElement.scrollTop;
    console.log('HomeonBeforeRouteLeave savedScrollTop == ', savedScrollTop);
  }
});

onActivated(() => {
  debugger
  console.log('HomeonActivated savedScrollTop == ', savedScrollTop);
  const vanPullRefreshElement = document.querySelector('.van-pull-refresh');
  if (savedScrollTop > 0 && vanPullRefreshElement) {
    vanPullRefreshElement.scrollTop = savedScrollTop;
  }
});

</script>

<template>
  <div class="main-layout-content">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      <van-col>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item @click="goToTrial">体验课报名</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </van-col>
      <van-list
          v-model:loading="loading"
          :finished="finished"
          loading-text="正在努力加载中"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-grid :column-num="2" :border="false">
          <van-grid-item v-for="(item, index) in list" :key="index" @click="goToVideoPlayer()">
            <van-image :src="item.posterUrl" radius="1rem" fit="cover">
              <div class="overlay">
                <van-icon name="play-circle-o" class="play-icon" />
              </div>
            </van-image>
          </van-grid-item>
        </van-grid>
      </van-list>

    </van-pull-refresh>
  </div>
</template>

<style scoped>
.main-layout-content {
  flex: 1; /* 让内容区占据剩余所有空间 */
  overflow-y: auto; /* **关键：设置可滚动** */
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-bottom: 50px; /* 关键：留出 van-tabbar 的高度 */
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-grid-item {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
}

.play-icon {
  color: #fff;
  font-size: 2rem;
  z-index: 10;
}

.van-image {
  width: 100%;
  height: 100%;
}
</style>