<template>
  <div class="report-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="体验课报告"
        left-arrow
        @click-left="onClickLeft"
    />

    <div class="report-content">
      <!-- 1. 学生成长变化趋势柱状图 -->
      <div class="section-card">
        <div class="section-title">学生成长变化趋势轨迹</div>
        <div id="chart-container" style="width: 100%; height: 350px;"></div>
      </div>

      <!-- 2. 学生体验课视频 -->
      <div class="section-card">
        <div class="section-title">学生体验课变化切片视频</div>
        <video controls class="report-video">
          <source src="/video.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>

      <!-- 3. 课程日历 -->
      <div class="section-card">
        <div class="section-title">课表</div>
        <div class="calendar-wrapper">
          <van-calendar
              :poppable="false"
              :show-mark="false"
              :show-subtitle="false"
              :show-confirm="false"
              :min-date="minDate"
              :max-date="maxDate"
              :default-date="defaultDate"
              color="#967BB6"
              @select="onDateSelect"
          >
            <!-- 日历自定义插槽 -->
            <template #bottom-info="day">
              <span v-if="courseMap[day.date.toDateString()]" class="course-name-tag">
                {{ courseMap[day.date.toDateString()] }}
              </span>
            </template>
          </van-calendar>
        </div>
      </div>

      <!-- 4. 课程目标 -->
      <div class="section-card">
        <div class="section-title">课程目标</div>
        <div class="goals-list">
          <div v-for="(goal, index) in goals" :key="index" class="goal-item">
            <div class="goal-number">{{ index + 1 }}</div>
            <div class="goal-text-wrapper">
              <div class="goal-title">{{ goal.title }}</div>
              <div class="goal-description-list">
                <div v-for="(sub, subIndex) in goal.description" :key="subIndex" class="goal-description-item">
                  <div class="sub-title">{{ sub.subTitle }}：</div>
                  <div class="sub-description">{{ sub.subDescription }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. 习惯投资与回报 -->
      <div class="section-card">
        <div class="section-title">在好习惯上的投资回报</div>
        <div class="section-description">
          小学阶段的好习惯培养，并非简单的课外兴趣班。它是一项具有长远价值的教育投资。好习惯能有效提升学习效率，让孩子在未来的学习道路上事半功倍，从而减少初高中阶段巨大的课外培训支出，实现教育成本的“先降后升”。
        </div>
        <div id="roi-chart-container" style="width: 100%; height: 300px;"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { NavBar, Calendar, Icon, showToast } from 'vant';
import * as echarts from 'echarts';

// 导航栏返回
const onClickLeft = () => {
  window.history.back();
};

// 1. 柱状图数据和配置
const chartData = {
  // 数据来自附件3图片
  // labels: ['方法复述准确度', '反思内容质量', '目的阐述清晰度', '应用意愿主动性'],
  // series: [
  //   {
  //     name: '体验课-正课',
  //     data: [5, 6, 5, 6],
  //   },
  //   {
  //     name: '体验课-精英课1',
  //     data: [7, 8, 7, 8],
  //   },
  //   {
  //     name: '体验课-精英课2',
  //     data: [9, 9, 9, 9],
  //   }
  // ],
  labels: ['批判性思维', '持续改进', '沟通表达'],
  series: [
    {
      name: '体验课-正课',
      data: [5, 6, 5],
    },
    {
      name: '体验课-精英课1',
      data: [7, 8, 7],
    },
    {
      name: '体验课-精英课2',
      data: [9, 9, 9],
    }
  ],
};

const initChart = () => {
  const chartDom = document.getElementById('chart-container');
  if (chartDom) {
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: chartData.series.map(s => s.name),
        top: 'top', // 将图例放在图表顶部
      },
      xAxis: {
        type: 'category',
        data: chartData.labels,
        axisLabel: {
          rotate: 60,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1
      },
      series: chartData.series.map(s => ({
        name: s.name,
        type: 'bar',
        barWidth: '20%',
        data: s.data
      }))
    };
    myChart.setOption(option);
  }
};

// 3. 课程日历数据
const minDate = new Date(2025, 8, 1);
const maxDate = new Date(2025, 11, 31);
const defaultDate = new Date(2025, 8, 1);

// 课程数据，已更新为用户提供的数据
const courses = [
  { date: new Date(2025, 8, 2), name: '每日三反思-正课' },
  { date: new Date(2025, 8, 4), name: '每日三反思-精英课' },
  { date: new Date(2025, 8, 8), name: '每日三反思-精英课' },
  { date: new Date(2025, 8, 11), name: '每日三反思-精英课' },
  { date: new Date(2025, 8, 13), name: '精英课2' },
  { date: new Date(2025, 8, 18), name: '正课' },
  { date: new Date(2025, 8, 20), name: '精英课1' },
  { date: new Date(2025, 8, 22), name: '精英课2' },
  { date: new Date(2025, 9, 2), name: '每日三反思-正课' },
  { date: new Date(2025, 9, 4), name: '每日三反思-精英课' },
  { date: new Date(2025, 9, 8), name: '每日三反思-精英课' },
  { date: new Date(2025, 9, 11), name: '每日三反思-精英课' },
  { date: new Date(2025, 9, 13), name: '精英课2' },
  { date: new Date(2025, 9, 18), name: '正课' },
  { date: new Date(2025, 9, 20), name: '精英课1' },
  { date: new Date(2025, 9, 22), name: '精英课2' },
  { date: new Date(2025, 10, 8), name: '每日三反思-正课' },
  { date: new Date(2025, 10, 10), name: '每日三反思-精英课' },
  { date: new Date(2025, 10, 12), name: '每日三反思-精英课' },
  { date: new Date(2025, 10, 14), name: '每日三反思-精英课' },
  { date: new Date(2025, 10, 16), name: '精英课2' },
  { date: new Date(2025, 10, 18), name: '正课' },
  { date: new Date(2025, 10, 20), name: '精英课1' },
  { date: new Date(2025, 10, 22), name: '精英课2' },
  { date: new Date(2025, 11, 8), name: '每日三反思-正课' },
  { date: new Date(2025, 11, 10), name: '每日三反思-精英课' },
  { date: new Date(2025, 11, 12), name: '每日三反思-精英课' },
  { date: new Date(2025, 11, 14), name: '每日三反思-精英课' },
  { date: new Date(2025, 11, 16), name: '精英课2' },
  { date: new Date(2025, 11, 18), name: '正课' },
  { date: new Date(2025, 11, 20), name: '精英课1' },
  { date: new Date(2025, 11, 22), name: '精英课2' },
];

const courseMap = courses.reduce((acc, curr) => {
  acc[curr.date.toDateString()] = curr.name;
  return acc;
}, {});

// 日期点击事件处理函数
const onDateSelect = (date) => {
  const courseName = courseMap[date.toDateString()];
  if (courseName) {
    showToast({
      message: courseName,
      position: 'bottom',
      duration: 3000,
    });
  }
};

// 4. 课程目标数据
const goals = [
  {
    title: '每日三反思',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对方法基础知识的记忆情况。' },
      { subTitle: '反思内容质量', subDescription: '衡量学生实际应用反思方法的能力和深度。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对反思方法价值的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将方法付诸实践的态度和意愿。' },
    ],
  },
  {
    title: '系统复习',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对系统复习“三步法”核心知识的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生实际操作“三步法”来规划和执行一次复习的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对系统复习为何比“临时抱佛脚”更有效的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将系统复习方法应用到日常学习中的态度和意愿。' },
    ],
  },
  {
    title: '数学预习',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对数学预习“三步法”核心步骤的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生在实际预习任务中，执行“三步法”的流程完整度和内容产出质量。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对数学预习价值和好处的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将预习“三步法”变为课前常规习惯的意愿。' },
    ],
  },
  {
    title: '课堂笔记',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“学习地图页”结构和笔记“三步法”的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生在实践环节中，运用“三步法”和“学习地图页”进行结构化记录的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对结构化笔记相比传统笔记的优势和价值的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生在未来课堂上尝试使用“学习地图页”记笔记的意愿。' },
    ],
  },
  {
    title: '小时间段计划',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“小时间段计划三步法”和“计划弹性术”核心概念的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生运用“三步法”制定一份合理的时间计划，并能阐述如何应对变化的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对做计划的价值以及计划需要灵活调整的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将计划方法应用到日常生活中，成为“时间小管家”的意愿。' },
    ],
  },
  {
    title: '正确修改错题',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“纠错三步法”及其核心分析维度的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生在实际操作中，运用“三步法”完整、深入地分析并订正一道错题的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对“错题是宝藏”这一理念的理解，以及为何要深度纠错而非简单改正。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将“纠错三步法”变为主动学习习惯的意愿。' },
    ],
  },
  {
    title: '考试技巧',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“考前5分钟”策略和“草稿纸使用”技巧的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生在模拟考试中，实际操作考前准备和规范使用草稿纸的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对考前准备和规范草稿的重要性的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生在未来真实考试中采纳这些技巧和习惯的意愿。' },
    ],
  },
  {
    title: '学习盲区锁定',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“学习盲区”概念和“盲区锁定三步法”的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生运用“三步法”在真实试卷上搜集、分析并列出盲区清单的实际操作能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对“盲区是宝藏”这一理念的理解，以及主动发现盲区对学习的价值。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将“盲区锁定”作为考后或作业后常规反思动作的意愿。' },
    ],
  },
  {
    title: '周反思',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“成长花园”比喻及“停止-继续-开始”反思框架的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生运用“三件宝”对自己过去一周进行有效回顾，并制定出具体行动清单的能力。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对每周进行复盘如何促进个人成长的理解程度。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生将周复盘内化为一种生活和学习节奏的意愿。' },
    ],
  },
  {
    title: '及时复习',
    description: [
      { subTitle: '方法复述准确度', subDescription: '衡量学生对“及时复习三步法”核心步骤及其具体操作方式的记忆情况。' },
      { subTitle: '方法应用质量', subDescription: '衡量学生在实际操作中，能否完整运用“三步法”对新知识进行一次有效的即时巩固。' },
      { subTitle: '目的阐述清晰度', subDescription: '衡量学生对知识遗忘规律的初步理解，以及为何“及时”复习是必要的。' },
      { subTitle: '应用意愿主动性', subDescription: '衡量学生是否愿意将“及时复习”作为课后或学习新知识后的固定动作。' },
    ],
  },
];

// 5. 折线图数据和配置
const roiChartData = {
  labels: ['小学阶段', '初中阶段', '高中阶段'],
  series: [
    {
      name: '已养成好习惯',
      data: [3, 4, 5],
    },
    {
      name: '未养成好习惯',
      data: [3, 8, 12],
    },
  ],
};

const initRoiChart = () => {
  const chartDom = document.getElementById('roi-chart-container');
  if (chartDom) {
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          let str = `${params[0].name}<br/>`;
          params.forEach(item => {
            str += `${item.marker} ${item.seriesName}: ${item.value} 万元<br/>`;
          });
          return str;
        }
      },
      legend: {
        data: roiChartData.series.map(s => s.name),
        bottom: 'bottom'
      },
      xAxis: {
        type: 'category',
        data: roiChartData.labels,
      },
      yAxis: {
        type: 'value',
        name: '课外培训支出 (万元)',
      },
      series: roiChartData.series.map(s => ({
        name: s.name,
        type: 'line',
        data: s.data,
        smooth: true,
      }))
    };
    myChart.setOption(option);
  }
};

// 初始化图表
onMounted(() => {
  initChart();
  initRoiChart();
});
</script>

<style scoped>
.report-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.report-content {
  padding: 1.6rem;
}

.section-card {
  background-color: #fff;
  border-radius: 0.8rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
  text-align: center;
}

.section-description {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.6rem;
}

/* 视频样式 */
.report-video {
  width: 100%;
  border-radius: 0.8rem;
}

/* 课程日历样式 */
.calendar-wrapper {
  padding: 1.6rem 0;
}

/* 确保每个日期单元格有足够的空间容纳多行文本，并保持日期不被遮挡 */
:deep(.van-calendar__day) {
  min-height: 6rem;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

:deep(.van-calendar__day .van-calendar__text) {
  margin-bottom: 0.5rem; /* 在日期和课程名称之间增加间距 */
}

/* 课程名称标签样式 */
.course-name-tag {
  font-size: 1rem;
  color: #fff;
  background-color: #967BB6;
  border-radius: 0.4rem;
  padding: 0.2rem 0.4rem;
  display: block;
  width: 90%;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis; /* 显示省略号 */
  text-align: center;
  line-height: 1.2;
}

/* 课程目标样式 */
.goals-list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.goal-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}

.goal-number {
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #967BB6;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  font-size: 1.6rem;
}

.goal-text-wrapper {
  flex-grow: 1;
}

.goal-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

.goal-description-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.4rem;
}

.goal-description-item {
  display: flex;
  flex-direction: column;
}

.sub-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.sub-description {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.5;
}
</style>
