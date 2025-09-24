<template>
  <!-- 封面页，通过 v-if 控制显示与隐藏 -->
  <div v-if="showCover" :class="{'slide-up-animation': isSliding}" class="cover-page">
    <div class="cover-content">
      <h1 class="cover-title">学生习惯养成总体报告</h1>
      <p class="cover-text">学生姓名：林晨</p>
      <p class="cover-text">报告时间：2025年9月23日</p>
    </div>
    <button class="start-button" @click="startReport">开启报告</button>
  </div>

  <!-- 报告内容，在封面页隐藏后显示 -->
  <div v-if="!showCover" class="report-container">
    <div class="report-content">
      <div class="section-card">
        <div class="section-title">尊敬的林晨家长，您好！</div>
        <div class="section-description">感谢您信任并参与本次数学学习习惯的深度评估。这份报告的目的，不是简单地给孩子打一个分数，而是希望通过科学、客观的数据，与您一同“看见”孩子在数学学习行为上的真实面貌。我们坚信，每一个看似偶然的数学学习结果，背后都有其必然的习惯原因。这份报告将帮助您清晰地了解孩子当前的习惯优势与潜在的提升空间，并为他/她规划一条最有效的数学成长路径。</div>
      </div>

      <!-- 新增：核心评估结果 -->
      <div class="section-card">
        <div class="section-title">一、 核心评估结果：三大核心数学分数</div>
        <div class="section-description">我们从“坚持度”（频率）和“思考力”（深度）两个维度，对林晨同学的13项核心学习习惯进行了评估，结果如下：</div>

        <!-- 1. 学习习惯总分 (综合健康度) -->
        <div class="section-description">1.学习习惯总分 (综合健康度): 35/ 100<br>您孩子的得分区间为：奠基·起步区<br><strong>具体表现：</strong> 孩子在学习上可能感到有些吃力，常常需要家长的督促。他/她可能还没找到适合自己的学习“节拍”，许多有效的学习方法尚未建立。这个阶段最需要的不是施压，而是搭建稳固的“脚手架”。</div>
        <div id="chart-health" class="score-chart" style="width: 100%; height: 250px;"></div>

        <!-- 2. 数学习惯频率分 (坚持度) -->
        <div class="section-description">2.数学习惯频率分 (坚持度): 40/ 100<br>您孩子的得分区间为：依赖提醒型<br><strong>具体表现：</strong> 学习的启动和维持，严重依赖家长的“提醒”和“催促”。就像一辆需要不断推动才能前进的车，缺乏内在的动力系统。</div>
        <div id="chart-persistence" class="score-chart" style="width: 100%; height: 250px;"></div>

        <!-- 3. 数学深度分 (思考力) -->
        <div class="section-description">3.数学深度分 (思考力): 33/ 100<br>您孩子的得分区间为：浅层模仿型<br><strong>具体表现：</strong> 学习方式主要是“听话照做”，机械地模仿老师的步骤，但对“为什么这么做”理解不深，知识停留在“记住”而非“理解”的层面。</div>
        <div id="chart-thinking" class="score-chart" style="width: 100%; height: 250px;"></div>

        <div class="section-description">将“数学频率分”和“数学深度分”结合来看，我们可以更精准地判断孩子的数学学习类型：类型三：低频率 + 低深度 (潜力蓄积型)<br>
          <strong>深层习惯诊断：</strong> 基于本次评估在学习习惯层面的观察，数据显示孩子在“坚持度”（持续投入的毅力）和“思考力”（深入钻研的习惯）这两个方面，暂时还处在需要外部支持和引导来逐步建立的阶段。这有时会形成一个“因方法不适而回避，因回避而更难入门”的循环。这明确地指向一个需要外部支持的信号，而并非孩子的能力问题。此刻，孩子最需要的不是催促，而是专业的引导和正向的激励，帮助TA找到学习的突破口。<br>
          <strong>家长常见困惑：</strong> “孩子好像对数学没什么兴趣，也找不到方法，我们说什么都听不进去，感觉很无力。”</div>
        <!-- 新增：象限图 -->
        <div id="chart-quadrant" class="quadrant-chart" style="width: 100%; height: 400px;"></div>

        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(1)">点击查看解读和理论依据</a>
        </div>
      </div>

      <!-- 1. 学生成长变化趋势柱状图 -->
      <div class="section-card">
        <div class="section-title">二、体验课进步展示</div>
        <div id="chart-container" style="width: 100%; height: 350px;"></div>
        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(2)">点击查看解读和理论依据</a>
        </div>
        <div id="chart-container-2" style="width: 100%; height: 350px;"></div>
        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(3)">点击查看解读和理论依据</a>
        </div>
        <div class="section-description">孩子的进步非常全面且深入。在理解层面，他实现了巨大飞跃，从最初需要老师引导，到现在已能完全理解“每日三反思”中，每一次反思的不同侧重点，以及“反思三问”的内在逻辑，将知识成功内化。<br>
          在此基础上，他的掌握也随之深化：反思已不再停留于对“学到了什么”的表层作答，而是真正深入到了结合个人感受的思考与规划之中。尤其在“如何做得更好”这一点上，他已能运用批判性思维，为第二天制定出清晰的改进计划。同时，他的总结输出也变得日益详尽、精准且逻辑性更强，表达能力显著提升，展现了知行合一的强大潜力。</div>
        <video controls class="report-video">
          <source src="/video.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>

      <div class="section-card">
        <div class="section-title">三、专属课程安排</div>
        <div class="section-description">我们的培养理念：我们坚信，授人以鱼不如授人以渔。我们致力于帮孩子建立一套能受益终身的卓越数学学习习惯。<br>
          “我们将通过教授一套简单、高效的‘数学学习四步法’，帮他快速入门：”<br>
          课前： 预习<br>
          课中： 笔记<br>
          课后： 及时复习<br>
          总结： 知识图谱<br>
          推荐课程：<br>
          基于以上专业评估，我们为您孩子量身推荐以下数学学习方案，以实现最高效的成长：数学思维与习惯养成·奠基阶段课程课程周期： 4个月<br>
          核心目标： 激发并增强孩子的学习兴趣和内在驱动力。通过建立数学“预习-笔记-复习-归纳”的高效学习闭环，赋能孩子获得持续的成功体验，让他/她从“被动学习”转变为“主动探索”，最终实现自信心、学习力与成绩的全面提升。</div>
        <!-- 新增：预期变化柱状图 -->
        <div id="chart-expected-progress" style="width: 100%; height: 300px;"></div>
      </div>

      <!-- 教练介绍模块 -->
      <div class="section-card coach-card">
        <div class="section-title">专属教练介绍</div>
        <div class="coach-profile">
          <img src="/public/img.png" alt="教练头像" class="coach-avatar">
          <div class="coach-info">
            <h4 class="coach-name">毛老师</h4>
            <p class="coach-experience">授课经验：2年</p>
            <p class="coach-bio">
              毕业于北京师范大学教育学专业，硕士研究生，擅长陪伴式互动式教育，在课程体系之外有一套自己的和孩子沟通交流的有效办法。
            </p>
          </div>
        </div>
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
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch, nextTick, onBeforeUnmount, defineOptions, onActivated} from 'vue';
import {onBeforeRouteLeave, useRouter} from 'vue-router';
import { Calendar, showToast } from 'vant';
import * as echarts from 'echarts';

defineOptions({
  name: 'report',
});

let chartInstances = {};

const router = useRouter();

const showCover = ref(true);
const isSliding = ref(false);

const startReport = () => {
  isSliding.value = true;
  setTimeout(() => {
    showCover.value = false;
  }, 500);
};

const goToAttachPage = (param) => {
  router.push({
    name: 'introduce',
    query: {
      content: param
    }
  });
};

const chartData = {
  labels: ['理解', '掌握'],
  series: [
    {
      name: '体验课-正课',
      data: [5, 5],
    },
    {
      name: '体验课-精英课1',
      data: [7, 6],
    },
    {
      name: '体验课-精英课2',
      data: [9, 7],
    }
  ]
};

const chartData2 = {
  labels: ['行为习惯', '逻辑思维', '批判性思维', '沟通表达', '持续改进'],
  series: [
    { name: '体验课-正课', data: [4, 5, 6, 4, 1] },
    { name: '体验课-精英课1', data: [4, 5, 6, 5, 2] },
    { name: '体验课-精英课2', data: [4, 5, 7, 6, 3] },
  ],
};

const initChart = (id, data) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) { chartInstances[id].dispose(); }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      legend: { data: data.series.map(s => s.name), top: 'top' },
      xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: { rotate: 60, interval: 0 }
      },
      yAxis: { type: 'value', min: 0, max: 10, interval: 1 },
      series: data.series.map(s => ({
        name: s.name,
        type: 'bar',
        barWidth: '20%',
        data: s.data
      }))
    };
    myChart.setOption(option);
  }
};

const scoreChartData1 = { score: 35, categories: [{ name: '奠基·起步区', scoreRange: [0, 49] }, { name: '形成·潜力区', scoreRange: [50, 69] }, { name: '巩固·优秀区', scoreRange: [70, 89] }, { name: '自动化·学霸区', scoreRange: [90, 100] }] };
const scoreChartData2 = { score: 40, categories: [{ name: '依赖提醒型', scoreRange: [0, 49] }, { name: '时常波动型', scoreRange: [50, 69] }, { name: '主动坚持型', scoreRange: [70, 89] }, { name: '高度自律型', scoreRange: [90, 100] }] };
const scoreChartData3 = { score: 33, categories: [{ name: '浅层模仿型', scoreRange: [0, 49] }, { name: '方法摸索型', scoreRange: [50, 69] }, { name: '熟练掌握型', scoreRange: [70, 89] }, { name: '迁移创新型', scoreRange: [90, 100] }] };

const initScoreChart = (id, data) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) { chartInstances[id].dispose(); }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const studentCategory = data.categories.find(c => data.score >= c.scoreRange[0] && data.score <= c.scoreRange[1]);
    const option = {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        data: data.categories.map(c => c.name),
        axisLabel: { interval: 0, rotate: 0, fontSize: 12 }
      },
      yAxis: {
        type: 'value',
        name: '分数',
        min: 0,
        max: 100,
        axisLabel: { formatter: '{value}' }
      },
      series: [
        {
          name: '学生得分',
          type: 'bar',
          barWidth: '50%',
          data: data.categories.map(c => {
            const isStudentCategory = c.name === studentCategory.name;
            return {
              value: isStudentCategory ? data.score : c.scoreRange[1] - (c.scoreRange[1] - c.scoreRange[0]) / 2,
              itemStyle: { color: isStudentCategory ? '#ff0000' : '#d3d3d3' },
              label: {
                show: isStudentCategory,
                position: 'top',
                formatter: `{c}`,
                color: '#967BB6',
                fontWeight: 'bold'
              },
            };
          })
        }
      ]
    };
    myChart.setOption(option);
  }
};

const initQuadrantChart = (id, studentFrequency, studentDepth) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) { chartInstances[id].dispose(); }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: {
        formatter: function(params) {
          if (params.seriesName === '学生点位') {
            return `林晨同学<br>频率：${params.value[0]}<br>深度：${params.value[1]}`;
          }
          return null;
        }
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: { formatter: '{value}', fontSize: 12 },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#666' } },
        name: '频率（坚持度）',
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: { formatter: '{value}', fontSize: 12 },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#666' } },
        name: '深度（思考力）',
        nameLocation: 'middle',
        nameGap: 30
      },
      series: [
        {
          name: '学生点位',
          type: 'scatter',
          symbolSize: 20,
          data: [[studentFrequency, studentDepth]],
          itemStyle: { color: '#967BB6' },
          label: { show: true, position: 'top', formatter: '林晨同学' },
          z: 2
        },
        {
          name: '象限线',
          type: 'line',
          markLine: {
            silent: true,
            data: [
              { xAxis: 50, lineStyle: { color: '#888', type: 'dashed' } },
              { yAxis: 50, lineStyle: { color: '#888', type: 'dashed' } }
            ]
          },
          z: 1
        }
      ],
      graphic: [
        { type: 'text', left: '20%', top: '25%', style: { text: '低频率 + 高深度\n(小聪明，动力不足型)', fill: '#555', font: '10px sans-serif', textAlign: 'center' } },
        { type: 'text', left: '55%', top: '25%', style: { text: '高频率 + 高深度\n(高度自驱，学霸潜质型)', fill: '#555', font: '10px sans-serif', textAlign: 'center' } },
        { type: 'text', left: '20%', top: '65%', style: { text: '低频率 + 低深度\n(信心不足，亟待扶持型)', fill: '#555', font: '10px sans-serif', textAlign: 'center' } },
        { type: 'text', left: '55%', top: '65%', style: { text: '高频率 + 低深度\n(伪勤奋，事倍功半型)', fill: '#555', font: '10px sans-serif', textAlign: 'center' } }
      ]
    };
    myChart.setOption(option);
  }
};

const progressChartData = {
  labels: ['学习习惯总分', '频率分 (坚持度)', '深度分 (思考力)'],
  series: [
    { name: '当前评估', data: [35, 40, 33] },
    { name: '一学期后预期', data: [68, 73, 65] }
  ]
};

const initProgressChart = (id, data) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) { chartInstances[id].dispose(); }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      legend: { data: data.series.map(s => s.name), top: 'top', textStyle: { fontSize: 14 } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: {
          interval: 0,
          rotate: 0,
          fontSize: 14,
          formatter: function (value) {
            if (value.length > 5) { return value.replace(' ', '\n'); }
            return value;
          }
        }
      },
      yAxis: {
        type: 'value',
        name: '分数',
        min: 0,
        max: 100,
        axisLabel: { formatter: '{value}' }
      },
      series: data.series.map(s => ({
        name: s.name,
        type: 'bar',
        barWidth: '30%',
        data: s.data.map(val => ({
          value: val,
          label: { show: true, position: 'top', formatter: '{c}', color: '#666' }
        })),
        itemStyle: { color: s.name === '当前评估' ? '#967BB6' : '#6B4A8E' }
      }))
    };
    myChart.setOption(option);
  }
};

const minDate = new Date(2025, 8, 1);
const maxDate = new Date(2025, 11, 31);
const defaultDate = new Date(2025, 8, 1);

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

watch(showCover, (newValue) => {
  if (newValue === false) {
    nextTick(() => {
      initChart('chart-container', chartData);
      initChart('chart-container-2', chartData2);
      initScoreChart('chart-health', scoreChartData1);
      initScoreChart('chart-persistence', scoreChartData2);
      initScoreChart('chart-thinking', scoreChartData3);
      initQuadrantChart('chart-quadrant', 40, 33);
      initProgressChart('chart-expected-progress', progressChartData);
    });
  }
});

onBeforeUnmount(() => {
  for (const id in chartInstances) {
    if (chartInstances[id] && !chartInstances[id].isDisposed()) {
      chartInstances[id].dispose();
    }
  }
});

// const pullRefreshRef = ref(null);
// let savedScrollTop = 0;
//
//
// onBeforeRouteLeave(() => {
//   const vanPullRefreshElement = document.querySelector('.report-container');
//   if (vanPullRefreshElement) {
//     savedScrollTop = vanPullRefreshElement.scrollTop;
//   }
// });
//
// onActivated(() => {
//   const vanPullRefreshElement = document.querySelector('.report-container');
//   if (savedScrollTop > 0 && vanPullRefreshElement) {
//     vanPullRefreshElement.scrollTop = savedScrollTop;
//   }
// });
</script>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    if (from.name === 'introduce') {
      next(vm => {
        vm.showCover = false;
      });
    } else {
      next();
    }
  }
};
</script>

<style scoped>
.cover-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('/public/report_start_bg.png');
  background-size: cover;
  background-position: center;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
}

.slide-up-animation {
  transform: translateY(-100vh);
}

.cover-content {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 1rem;
}

.cover-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.cover-text {
  font-size: 1.6rem;
  margin: 0.5rem 0;
}

.start-button {
  background-color: #967BB6;
  color: #fff;
  border: none;
  padding: 1.2rem 3.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 2.5rem;
  cursor: pointer;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #836ba3;
}

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

.report-video {
  width: 100%;
  border-radius: 0.8rem;
}

.calendar-wrapper {
  padding: 1.6rem 0;
}

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
  margin-bottom: 0.5rem;
}

.course-name-tag {
  font-size: 1rem;
  color: #fff;
  background-color: #967BB6;
  border-radius: 0.4rem;
  padding: 0.2rem 0.4rem;
  display: block;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 1.2;
}

.coach-card {
  text-align: center;
}

.coach-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2rem;
}

.coach-avatar {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.3rem solid #eee;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
}

.coach-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

.coach-experience {
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 1.2rem;
}

.coach-bio {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.5;
  text-align: left;
}

.link-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.6rem;
}

.link-container a {
  font-size: 1.4rem;
  color: #4c66f7;
  text-decoration: none;
}
</style>
