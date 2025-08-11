<template>
  <div class="class-hour-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="我的课时"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
    />

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 课时情况统计 -->
      <div class="status-card van-hairline--bottom">
        <div class="status-total-hours">
          <!-- 总课时 -->
          <div class="total-hours-text">总课时：{{ classHours.total }}</div>
        </div>

        <div class="status-details">
          <!-- 已排课 -->
          <div class="status-item arranged">
            <span class="status-number">{{ classHours.arranged }}</span>
            <span class="status-label">已排课</span>
          </div>
          <!-- 已消课 -->
          <div class="status-item consumed">
            <span class="status-number">{{ classHours.consumed }}</span>
            <span class="status-label">已消课</span>
          </div>
          <!-- 剩余课时 -->
          <div class="status-item remaining">
            <span class="status-number">{{ classHours.remaining }}</span>
            <span class="status-label">剩余课时</span>
          </div>
        </div>

        <!-- 购买按钮 -->
        <div class="buy-button">
          <van-button type="primary" round block>加购课时</van-button>
        </div>
      </div>

      <!-- 课时消耗记录 -->
      <h3 class="record-title">课时消耗记录</h3>
      <div class="record-list-wrapper">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <div v-for="(record, index) in classRecords" :key="index" class="record-item van-hairline--bottom">
            <div class="record-info">
              <div class="record-time-course">
                <span class="record-time">{{ record.dateTime }}</span>
                <span class="record-course">{{ record.courseName }} - {{ record.courseType }}</span>
              </div>
              <div class="record-right">
                <div :class="['record-hours', record.hoursType]">{{ record.hours }}课时</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 课时情况数据
const classHours = reactive({
  total: 50,
  arranged: 10,
  consumed: 10,
  remaining: 30,
});

// 课时消耗记录数据
const classRecords = ref([
  {
    dateTime: '2025年8月7日 20:00-20:40',
    courseName: '每日三反思',
    courseType: '正课',
    hours: 1,
    hoursType: 'consumed',
    tag: '体验课'
  },
  {
    dateTime: '2025年8月6日 20:00-20:20',
    courseName: '每日三反思',
    courseType: '精英课',
    hours: 0.5,
    hoursType: 'consumed',
    tag: '体验课'
  },
]);

// 列表加载状态
const loading = ref(false);
const finished = ref(false);

// 返回上一页
const onClickLeft = () => history.back();

// 列表加载方法
const onLoad = () => {
  // 模拟异步加载
  setTimeout(() => {
    // 假设加载更多数据
    const newRecords = [
      {
        dateTime: '2025年8月5日 20:00-20:40',
        courseName: '每日三反思',
        courseType: '正课',
        hours: 1,
        hoursType: 'consumed',
        tag: '体验课'
      },
      {
        dateTime: '2025年8月4日 20:00-20:20',
        courseName: '每日三反思',
        courseType: '精英课',
        hours: 0.5,
        hoursType: 'consumed',
        tag: '体验课'
      },
    ];
    classRecords.value.push(...newRecords);

    loading.value = false;

    // 当数据全部加载完毕后，将finished设置为true
    if (classRecords.value.length >= 20) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style scoped>
/* 整个页面的容器，为固定导航栏留出顶部空间 */
.class-hour-container {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-top: 4.6rem;
}

/* 主要内容区域的样式 */
.main-content {
  padding: 1.6rem;
}

/* 课时统计卡片 */
.status-card {
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-bottom: 2rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
}

.status-total-hours {
  text-align: center;
  padding-bottom: 1.6rem;
}

.total-hours-text {
  font-size: 2rem;
  font-weight: 600;
  color: #323233;
}

.status-details {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 2rem;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.status-number {
  font-size: 1.8rem;
  font-weight: 600;
}

.status-label {
  font-size: 1.4rem;
  color: #969799;
}

/* 课时颜色标注 */
.arranged .status-number {
  color: #ff976a; /* 橙色 */
}
.consumed .status-number {
  color: #409eff; /* 蓝色 */
}
.remaining .status-number {
  color: #07c160; /* 绿色 */
}

/* 购买按钮 */
.buy-button {
  padding-top: 1.6rem;
}

/* 课时消耗记录标题 */
.record-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #323233;
  margin: 0 0 1.5rem 0;
}

/* 课时消耗列表 */
.record-list-wrapper {
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
}

.record-item {
  padding: 1.6rem;
}

.record-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.record-time-course {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.record-time {
  font-size: 1.4rem;
  color: #969799;
}

.record-course {
  font-size: 1.6rem;
  color: #323233;
}

.record-right {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.record-hours {
  font-size: 1.6rem;
  font-weight: 600;
}

.record-hours.consumed {
  color: #409eff; /* 蓝色 */
}

.record-tag {
  font-size: 1.2rem;
  color: #fff;
  background-color: #969799;
  border-radius: 0.4rem;
  padding: 0.2rem 0.5rem;
  display: inline-block;
  margin-top: 0.5rem;
}
</style>
