<template>
  <div class="main-layout-content">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model:loading="loading"
          :finished="finished"
          loading-text="正在努力加载中"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="schedule-list">
          <div
              v-for="(item, index) in scheduleList"
              :key="index"
              class="schedule-item"
          >
            <!-- 课程日期和状态 -->
            <div class="item-header">
              <span class="date">{{ item.date }} {{ item.time }}</span>
              <span
                  class="status-tag"
                  :class="{
              'status-scheduled': item.status === '已排课',
              'status-attended': item.status === '已上课',
              'status-consumed': item.status === '已消课'
            }"
              >
            {{ item.status }}
          </span>
            </div>
            <div class="divider"></div>

            <!-- 课程名称和标签 -->
            <div class="item-body">
              <span class="course-name">{{ item.courseName }}</span>
              <span v-if="item.isTrial" class="trial-tag">体验课</span>
            </div>
            <div class="divider"></div>

            <!-- 功能按钮 -->
            <div class="item-actions">
              <van-button size="small" type="primary" @click="goToVideoPlayer">查看课堂视频</van-button>
              <van-button size="small" type="primary">查看老师反馈</van-button>
              <van-uploader>
                <van-button size="small" type="primary">提交课堂作业</van-button>
              </van-uploader>
            </div>

            <!-- 确认按钮 -->
            <div class="item-confirm">
              <van-button type="default" block>
                确认已上课 ({{ item.confirmDays }}天自动确认)
              </van-button>
            </div>
          </div>
        </div>

      </van-list>

    </van-pull-refresh>
  </div>
</template>

<script setup>
import {defineOptions, ref,onMounted,onActivated} from 'vue';
import { onBeforeRouteLeave,useRouter } from 'vue-router'; // <-- 关键：从 vue-router 导入
defineOptions({
  name: "plan"
});
let savedScrollTop = 0;
const router = useRouter();

onBeforeRouteLeave(() => {
  const vanPullRefreshElement = document.querySelector('.van-pull-refresh');
  if (vanPullRefreshElement) {
    savedScrollTop = vanPullRefreshElement.scrollTop;
    console.log('HomeonBeforeRouteLeave savedScrollTop == ', savedScrollTop);
  }
});

onActivated(() => {
  console.log('HomeonActivated savedScrollTop == ', savedScrollTop);
  const vanPullRefreshElement = document.querySelector('.van-pull-refresh');
  if (savedScrollTop > 0 && vanPullRefreshElement) {
    vanPullRefreshElement.scrollTop = savedScrollTop;
  }
});
const goToVideoPlayer = () => {
  router.push({
    name: 'VideoPlayer',
  });
};

// 模拟的课表数据
const scheduleList = ref([
  {
    date: '2025年8月7日',
    time: '20:00-20:40',
    status: '已排课',
    courseName: '每日三反思 - 正课',
    isTrial: false,
    confirmDays: 3,
  },
  {
    date: '2025年8月6日',
    time: '19:00-19:40',
    status: '已上课',
    courseName: '编程基础入门',
    isTrial: true,
    confirmDays: 3,
  },
  {
    date: '2025年8月5日',
    time: '10:00-10:40',
    status: '已消课',
    courseName: '英语口语练习',
    isTrial: false,
    confirmDays: 3,
  },
  {
    date: '2025年8月4日',
    time: '15:00-15:40',
    status: '已排课',
    courseName: '数学思维训练',
    isTrial: false,
    confirmDays: 3,
  },
]);
</script>

<style scoped>
.main-layout-content {
  flex: 1; /* 让内容区占据剩余所有空间 */
  overflow-y: auto; /* **关键：设置可滚动** */
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-bottom: 50px; /* 关键：留出 van-tabbar 的高度 */
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #f7f8fa; /* Vant 的默认背景色 */
}
.plan-container {
  padding: 2rem 1rem;
  background-color: #f7f8fa; /* Vant 的默认背景色 */
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 列表项之间的间距 */
}

.schedule-item {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.divider {
  height: 0.1rem;
  background-color: #f2f3f5;
  margin: 1.5rem 0;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-header .date {
  font-size: 1.6rem;
  font-weight: 500;
  color: #323233;
}

.item-header .status-tag {
  padding: 0.2rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
}

.status-scheduled {
  background-color: #967bb6; /* 浅紫色 */
}

.status-attended {
  background-color: #4CAF50; /* 绿色 */
}

.status-consumed {
  background-color: #9e9e9e; /* 灰色 */
}

.item-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-body .course-name {
  font-size: 1.6rem;
  font-weight: 500;
  color: #323233;
}

.item-body .trial-tag {
  padding: 0.2rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #967bb6; /* 浅紫色 */
}

.item-actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem; /* 按钮间距 */
  margin-bottom: 1.5rem;
}

.item-actions .van-button {
  flex: 1;
  font-size: 1.4rem;
}

.item-confirm .van-button {
  font-size: 1.4rem;
  color: #646566;
  background-color: #f7f8fa;
  border-color: #f7f8fa;
}
</style>
