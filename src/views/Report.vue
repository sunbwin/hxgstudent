<template>
  <!-- 封面页，通过 v-if 控制显示与隐藏 -->
  <div v-if="showCover" :class="{'slide-up-animation': isSliding}" class="cover-page">
    <div class="cover-content">
      <h1 class="cover-title" style="color: goldenrod">乐培生好习惯让孩子<br>从“要我学”直达“我要学”</h1>
    </div>
    <div class="cover-content">
      <h1 class="cover-title">学生习惯养成总体报告</h1>
      <p class="cover-text">学生姓名：林**</p>
      <p class="cover-text">报告时间：2025年9月23日</p>
    </div>
    <button class="start-button" @click="startReport">开启报告</button>
  </div>

  <!-- 报告内容，在封面页隐藏后显示 -->
  <div v-if="!showCover" class="report-container">
    <div class="report-content">
      <!-- 报告开场白 -->
      <div class="section-card intro-card">
        <div class="section-title">尊敬的林**家长，您好！</div>
        <div class="section-description">
          这份报告将通过科学数据，与您一同“看见”孩子在学习行为上的真实面貌。但在深入分析具体数据前，我们希望与您分享这份评估报告的底层逻辑——我们用以定义和培养未来拔尖创新人才的“成长引擎”模型。
        </div>
        <div class="model-image-container">
          <img src="/public/model.png" alt="成长引擎模型" class="model-image">
        </div>
        <div class="section-description model-description">
          我们坚信，决定孩子未来高度的，并非仅仅是短期分数，而是其内在的、可不断迭代的综合素养。上图展示的，正是我们提炼出的顶尖人才必备的成长引擎：
          <ul class="intro-list">
            <li><strong>引擎内核：</strong> 由“知识储备”、“行为习惯”和“思维品质”构成了一个良性循环。好的行为习惯能高效积累知识，而卓越的思维品质又能指导和优化行为习惯。</li>
            <li><strong>六大支柱：</strong> 围绕内核，我们识别出逻辑、批判、学习、沟通、持续改进等关键能力。</li>
          </ul>
        </div>
        <div class="section-description">
          这份报告，就是对您的孩子在这个“成长引擎模型”中所处位置的一次精准诊断。 我们将主要从两大核心维度展开：
          <ul class="intro-list">
            <li><strong>“坚持度”（频率）：</strong>直接对应模型中的“行为习惯”维度。</li>
            <li><strong>“思考力”（深度）：</strong>直接对应模型中的“思维品质”维度。</li>
          </ul>
        </div>
        <div class="section-description">
          因此，我们接下来为您呈现的，并非孤立的分数，而是您孩子在未来人才必备能力框架下的现状图谱。
        </div>
      </div>

      <!-- 核心评估结果 -->
      <div class="section-card">
        <div class="section-title">一、核心评估结果：三大核心分数</div>
        <div class="section-description">我们从“坚持度”（频率）和“思考力”（深度）两大维度进行评估。</div>

        <!-- 1. 学习习惯总分 (综合健康度) -->
        <div class="score-summary-box">
          <p class="score-title-text">
            1. 数学学习习惯总分：<span class="score-value">35 / 100分</span>
          </p>
          <p class="score-text">
            <span class="score-label">当前区间：</span>奠基·起步区
          </p>
          <div class="core-performance">
            <p><span class="performance-title">核心表现：</span></p>
            <ul>
              <li>学习感受：有些吃力。</li>
              <li>学习行为：需家长督促。</li>
              <li>方法：尚未建立自己的节奏。</li>
            </ul>
          </div>
          <p class="score-text">
            <span class="score-label">核心需求：</span>需要搭建稳固的“脚手架”，进行方法引导。
          </p>
        </div>
        <div id="chart-health" class="score-chart" style="width: 100%; height: 250px;"></div>

        <!-- 2. 数学习惯频率分 (坚持度) -->
        <div class="score-summary-box">
          <p class="score-title-text">
            2. 学习频率分（坚持度）：<span class="score-value">40 / 100分</span>
          </p>
          <p class="score-text">
            <span class="score-label">当前类型：</span>依赖提醒型
          </p>
          <div class="core-performance">
            <p><span class="performance-title">核心表现：</span></p>
            <ul>
              <li>启动：严重依赖提醒。</li>
              <li>维持：需不断催促。</li>
            </ul>
          </div>
          <p class="score-text">如同缺少内置引擎的车辆，需要持续的外力推动。</p>
        </div>
        <div id="chart-persistence" class="score-chart" style="width: 100%; height: 250px;"></div>

        <!-- 3. 数学深度分 (思考力) -->
        <div class="score-summary-box">
          <p class="score-title-text">
            3. 数学深度分（思考力）：<span class="score-value">33 / 100分</span>
          </p>
          <p class="score-text">
            <span class="score-label">当前类型：</span>浅层模仿型
          </p>
          <div class="core-performance">
            <p><span class="performance-title">核心表现：</span></p>
            <ul>
              <li>方式：“听话照做”。</li>
              <li>习惯：机械模仿，不探究“为什么”。</li>
              <li>知识掌握：停留在“记住”，而非“理解”。</li>
            </ul>
          </div>
        </div>
        <div id="chart-thinking" class="score-chart" style="width: 100%; height: 250px;"></div>

        <!-- 深层学习习惯诊断 -->
        <div class="section-card-alt">
          <div class="section-title">二、深层学习习惯诊断</div>
          <p class="diagnosis-text">
            综合来看，孩子在数学学科的学习类型为：
            <span class="diagnosis-type">低频率 + 低深度 (信心不足，亟待扶持型)</span>
          </p>
          <div class="sub-section">
            <p class="sub-section-title">当前挑战</p>
            <ul class="challenge-list">
              <li>毅力层面：持续投入的习惯还在建立阶段。</li>
              <li>思考层面：深入钻研的习惯需要逐步培养。</li>
              <li>行为表现：遇到难题时，有时会因畏难而回避。</li>
            </ul>
          </div>
          <div class="sub-section">
            <p class="sub-section-title">核心解读</p>
            <ul class="interpretation-list">
              <li>这明确指向一个信号：孩子需要外部支持。</li>
              <li>这并非孩子的能力问题，请您放心。</li>
              <li>孩子当下最需要的，是专业的引导和正向的激励，帮助他找到学习的突破口。</li>
            </ul>
          </div>
        </div>
        <!-- 象限图 -->
        <div id="chart-quadrant" class="quadrant-chart" style="width: 100%; height: 400px;"></div>

        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(1)">点击查看解读和理论依据</a>
        </div>
      </div>

      <!-- 体验课进步展示 -->
      <div class="section-card">
        <div class="section-title">三、体验课进步展示</div>
        <div id="chart-container" style="width: 100%; height: 350px;"></div>
        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(2)">点击查看解读和理论依据</a>
        </div>
        <div id="chart-container-2" style="width: 100%; height: 350px;"></div>
        <div class="link-container">
          <a href="#" @click.prevent="goToAttachPage(3)">点击查看解读和理论依据</a>
        </div>
        <div class="section-description">
          孩子的进步全面而深入：<br><br>
          <ul class="progress-list">
            <li><span class="sub-point">理解层面：</span>从需要引导到完全理解，知识成功内化。</li>
            <li><span class="sub-point">掌握层面：</span>反思从表层深入到结合个人感受。</li>
            <li><span class="sub-point">批判性思维：</span>能为第二天制定清晰的改进计划。</li>
            <li><span class="sub-point">表达能力：</span>总结输出更详尽、精准、有逻辑。</li>
          </ul>
        </div>
        <video controls class="report-video" poster="/video_poster.png" x5-video-player-type="h5">
          <source src="/video.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>

      <!-- 专属课程安排 -->
      <div class="section-card">
        <div class="section-title">四、专属课程安排</div>
        <div class="section-description">
          <p><strong>我们的培养理念：</strong>授人以鱼不如授人以渔。我们帮孩子建立一套受益终身的卓越数学学习习惯。</p>
          <p>我们将通过简单高效的“数学学习四步法”，帮他快速入门：</p>
          <ul class="learning-steps">
            <li><strong>课前：</strong>预习</li>
            <li><strong>课中：</strong>笔记</li>
            <li><strong>课后：</strong>及时复习</li>
            <li><strong>总结：</strong>知识图谱</li>
          </ul>
          <p><strong>推荐课程：</strong>
            <span class="course-name">数学思维与习惯养成·奠基阶段课程</span>
          </p>
          <p><strong>核心目标：</strong><br>
            激发并增强孩子的学习兴趣和内在驱动力。通过建立高效学习闭环，让孩子从“被动学习”转变为“主动探索”，实现自信心、学习力与成绩的全面提升。
          </p>
        </div>
        <!-- 预期变化折线图 -->
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

      <!-- 课程日历 -->
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

// 新的图表数据，用于展示随时间变化的维度得分
const chartData1 = {
  labels: ['体验课-正课', '体验课-精英课1', '体验课-精英课2'],
  series: [
    {
      name: '理解',
      data: [5, 7, 9],
    },
    {
      name: '掌握',
      data: [5, 6, 7],
    },
  ]
};

const chartData2 = {
  labels: ['体验课-正课', '体验课-精英课1', '体验课-精英课2'],
  series: [
    {
      name: '行为习惯', data: [4, 4, 4]
    },
    {
      name: '逻辑思维', data: [5, 5, 5]
    },
    {
      name: '批判性思维', data: [6, 6, 7]
    },
    {
      name: '沟通表达', data: [4, 5, 6]
    },
    {
      name: '持续改进', data: [1, 2, 3]
    },
  ],
};

const initLineChart = (id, data, yMax = 10) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) {
      chartInstances[id].dispose();
    }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'line', lineStyle: { type: 'dashed' } },
        formatter: (params) => {
          let tooltipHtml = `${params[0].axisValue}<br>`;
          params.forEach(item => {
            tooltipHtml += `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${item.value}<br>`;
          });
          return tooltipHtml;
        }
      },
      legend: { data: data.series.map(s => s.name), top: 'top', textStyle: { fontSize: 12 } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: { rotate: 0, interval: 0, fontSize: 12 },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#ccc' } }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: yMax,
        interval: 1,
        axisLabel: { formatter: '{value}', fontSize: 12 },
        splitLine: { show: true, lineStyle: { type: 'dashed' } },
        axisLine: { lineStyle: { color: '#ccc' } }
      },
      series: data.series.map(s => ({
        name: s.name,
        type: 'line',
        data: s.data,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 2
        }
      }))
    };
    myChart.setOption(option);
  }
};

const scoreChartData1 = {
  score: 35,
  categories: [{name: '奠基·起步区', scoreRange: [0, 49]}, {
    name: '形成·潜力区',
    scoreRange: [50, 69]
  }, {name: '巩固·优秀区', scoreRange: [70, 89]}, {name: '自动化·学霸区', scoreRange: [90, 100]}]
};
const scoreChartData2 = {
  score: 40,
  categories: [{name: '依赖提醒型', scoreRange: [0, 49]}, {
    name: '时常波动型',
    scoreRange: [50, 69]
  }, {name: '主动坚持型', scoreRange: [70, 89]}, {name: '高度自律型', scoreRange: [90, 100]}]
};
const scoreChartData3 = {
  score: 33,
  categories: [{name: '浅层模仿型', scoreRange: [0, 49]}, {
    name: '方法摸索型',
    scoreRange: [50, 69]
  }, {name: '熟练掌握型', scoreRange: [70, 89]}, {name: '迁移创新型', scoreRange: [90, 100]}]
};

const initScoreChart = (id, data) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) {
      chartInstances[id].dispose();
    }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const studentCategory = data.categories.find(c => data.score >= c.scoreRange[0] && data.score <= c.scoreRange[1]);
    const option = {
      tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
      grid: {left: '3%', right: '4%', bottom: '3%', containLabel: true},
      xAxis: {
        type: 'category',
        data: data.categories.map(c => c.name),
        axisLabel: {interval: 0, rotate: 0, fontSize: 12}
      },
      yAxis: {
        type: 'value',
        name: '分数',
        min: 0,
        max: 100,
        axisLabel: {formatter: '{value}'}
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
              itemStyle: {color: isStudentCategory ? '#967BB6' : '#d3d3d3'},
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
    if (chartInstances[id]) {
      chartInstances[id].dispose();
    }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: {
        formatter: function (params) {
          if (params.seriesName === '学生点位') {
            const pointName = params.dataIndex === 0 ? '当前评估' : '一学期后预期';
            return `${pointName}<br>频率：${params.value[0]}<br>深度：${params.value[1]}`;
          }
          return null;
        }
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {formatter: '{value}', fontSize: 12},
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#666'}},
        name: '频率（坚持度）',
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {formatter: '{value}', fontSize: 12},
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#666'}},
        name: '深度（思考力）',
        nameLocation: 'middle',
        nameGap: 30
      },
      series: [
        {
          name: '学生点位',
          type: 'scatter',
          symbolSize: 20,
          data: [[studentFrequency, studentDepth], [75, 70]], // 增加了“一学期后”的点
          itemStyle: {color: '#967BB6'},
          label: {
            show: true,
            position: 'left',
            formatter: function (params) {
              return params.dataIndex === 0 ? '林**同学' : '一学期后';
            },
          },
          z: 2
        },
        {
          name: '象限线',
          type: 'line',
          markLine: {
            silent: true,
            data: [
              {xAxis: 50, lineStyle: {color: '#888', type: 'dashed'}},
              {yAxis: 50, lineStyle: {color: '#888', type: 'dashed'}}
            ]
          },
          z: 1
        }
      ],
      graphic: [
        {
          type: 'text',
          left: '20%',
          top: '25%',
          style: {
            text: '低频率 + 高深度\n(小聪明，动力不足型)',
            fill: '#555',
            font: '10px sans-serif',
            textAlign: 'center'
          }
        },
        {
          type: 'text',
          left: '55%',
          top: '25%',
          style: {
            text: '高频率 + 高深度\n(高度自驱，学霸潜质型)',
            fill: '#555',
            font: '10px sans-serif',
            textAlign: 'center'
          }
        },
        {
          type: 'text',
          left: '20%',
          top: '65%',
          style: {
            text: '低频率 + 低深度\n(信心不足，亟待扶持型)',
            fill: '#555',
            font: '10px sans-serif',
            textAlign: 'center'
          }
        },
        {
          type: 'text',
          left: '55%',
          top: '65%',
          style: {
            text: '高频率 + 低深度\n(伪勤奋，事倍功半型)',
            fill: '#555',
            font: '10px sans-serif',
            textAlign: 'center'
          }
        }
      ]
    };
    myChart.setOption(option);
  }
};

const progressChartData = {
  x: ['当前评估', '一学期后预期'],
  series: [
    {
      name: '学习习惯总分',
      data: [35, 68],
      color: '#967BB6'
    },
    {
      name: '频率分 (坚持度)',
      data: [40, 73],
      color: '#B6967B'
    },
    {
      name: '深度分 (思考力)',
      data: [33, 65],
      color: '#7B96B6'
    }
  ]
};

const initExpectedProgressChart = (id, data) => {
  const chartDom = document.getElementById(id);
  if (chartDom) {
    if (chartInstances[id]) {
      chartInstances[id].dispose();
    }
    const myChart = echarts.init(chartDom);
    chartInstances[id] = myChart;
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          let tooltipHtml = `${params[0].axisValue}<br>`;
          params.forEach(item => {
            tooltipHtml += `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${item.value}<br>`;
          });
          return tooltipHtml;
        }
      },
      legend: {
        bottom: 0,
        left: 'center',
        itemGap: 10,
        textStyle: {
          fontSize: 12
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.x,
        axisLabel: {
          fontWeight: 'bold',
          fontSize: 14,
          padding: [5, 0, 0, 0]
        },
        axisTick: {show: false},
        axisLine: {show: false}
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 80,
        interval: 10,
        axisLabel: {
          fontSize: 12,
          formatter: (value) => value
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#e0e0e0'
          }
        }
      },
      series: data.series.map(s => ({
        name: s.name,
        type: 'line',
        data: s.data,
        smooth: true,
        lineStyle: {
          width: 3,
          color: s.color
        },
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: s.color,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false, // 移除点位分数
          position: 'top',
          formatter: '{c}',
          color: '#555'
        }
      }))
    };
    myChart.setOption(option);
  }
};

const minDate = new Date(2025, 8, 1);
const maxDate = new Date(2025, 11, 31);
const defaultDate = new Date(2025, 8, 1);

const courses = [
  {date: new Date(2025, 8, 2), name: '每日三反思-正课'},
  {date: new Date(2025, 8, 4), name: '每日三反思-精英课'},
  {date: new Date(2025, 8, 8), name: '每日三反思-精英课'},
  {date: new Date(2025, 8, 11), name: '每日三反思-精英课'},
  {date: new Date(2025, 8, 13), name: '精英课2'},
  {date: new Date(2025, 8, 18), name: '正课'},
  {date: new Date(2025, 8, 20), name: '精英课1'},
  {date: new Date(2025, 8, 22), name: '精英课2'},
  {date: new Date(2025, 9, 2), name: '每日三反思-正课'},
  {date: new Date(2025, 9, 4), name: '每日三反思-精英课'},
  {date: new Date(2025, 9, 8), name: '每日三反思-精英课'},
  {date: new Date(2025, 9, 11), name: '每日三反思-精英课'},
  {date: new Date(2025, 9, 13), name: '精英课2'},
  {date: new Date(2025, 9, 18), name: '正课'},
  {date: new Date(2025, 9, 20), name: '精英课1'},
  {date: new Date(2025, 9, 22), name: '精英课2'},
  {date: new Date(2025, 10, 8), name: '每日三反思-正课'},
  {date: new Date(2025, 10, 10), name: '每日三反思-精英课'},
  {date: new Date(2025, 10, 12), name: '每日三反思-精英课'},
  {date: new Date(2025, 10, 14), name: '每日三反思-精英课'},
  {date: new Date(2025, 10, 16), name: '精英课2'},
  {date: new Date(2025, 10, 18), name: '正课'},
  {date: new Date(2025, 10, 20), name: '精英课1'},
  {date: new Date(2025, 10, 22), name: '精英课2'},
  {date: new Date(2025, 11, 8), name: '每日三反思-正课'},
  {date: new Date(2025, 11, 10), name: '每日三反思-精英课'},
  {date: new Date(2025, 11, 12), name: '每日三反思-精英课'},
  {date: new Date(2025, 11, 14), name: '每日三反思-精英课'},
  {date: new Date(2025, 11, 16), name: '精英课2'},
  {date: new Date(2025, 11, 18), name: '正课'},
  {date: new Date(2025, 11, 20), name: '精英课1'},
  {date: new Date(2025, 11, 22), name: '精英课2'},
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
      initLineChart('chart-container', chartData1, 10);
      initLineChart('chart-container-2', chartData2, 10);
      initScoreChart('chart-health', scoreChartData1);
      initScoreChart('chart-persistence', scoreChartData2);
      initScoreChart('chart-thinking', scoreChartData3);
      initQuadrantChart('chart-quadrant', 40, 33);
      initExpectedProgressChart('chart-expected-progress', progressChartData);
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

let savedScrollTop = 0;
onBeforeRouteLeave(() => {
  const vanPullRefreshElement = document.querySelector('.report-container');
  if (vanPullRefreshElement) {
    savedScrollTop = vanPullRefreshElement.scrollTop;
  }
});

onActivated(() => {
  const vanPullRefreshElement = document.querySelector('.report-container');
  if (savedScrollTop > 0 && vanPullRefreshElement) {
    vanPullRefreshElement.scrollTop = savedScrollTop;
  }
});

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
  flex: 1; /* 让内容区占据剩余所有空间 */
  overflow-y: auto; /* **关键：设置可滚动** */
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
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

.section-card-alt {
  background-color: #f0f0f0; /* New background for visual separation */
  border-radius: 0.8rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
  border-left: 4px solid #967BB6;
}

.score-summary-box {
  background-color: #fafafa;
  border-radius: 0.6rem;
  padding: 1.2rem;
  margin-bottom: 1.6rem;
}

.score-title-text {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
}

.score-value {
  color: #967BB6;
}

.score-text {
  font-size: 1.4rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.score-label {
  font-weight: bold;
  color: #333;
}

.core-performance ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0.8rem;
}

.core-performance li {
  font-size: 1.4rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 20px;
}

.core-performance li::before {
  content: "•";
  color: #967BB6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.performance-title {
  font-weight: bold;
  color: #333;
}

.diagnosis-text {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.diagnosis-type {
  color: #967BB6;
}

.diagnosis-description {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.2rem;
}

.parent-dilemma {
  background-color: #f7f7f7;
  border-radius: 0.6rem;
  padding: 1.2rem;
}

.parent-dilemma p {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.dilemma-title {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.sub-point {
  font-weight: bold;
  color: #444;
}

.progress-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
}

.progress-list li {
  margin-bottom: 0.8rem;
}

.learning-steps {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.learning-steps li {
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  position: relative;
  padding-left: 20px;
}

.learning-steps li::before {
  content: "▶";
  color: #967BB6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.course-name {
  font-weight: bold;
  color: #967BB6;
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
  /* 强制视频保持 16:9 的宽高比 */
  aspect-ratio: 16 / 9;
  height: auto;
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

.sub-section {
  background-color: #fafafa;
  border-radius: 0.6rem;
  padding: 1.2rem;
  margin-bottom: 1.6rem;
}

.sub-section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.challenge-list,
.interpretation-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.challenge-list li,
.interpretation-list li {
  font-size: 1.4rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 20px;
}

.challenge-list li::before,
.interpretation-list li::before {
  content: "•";
  color: #967BB6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* 新增的样式 */
.intro-card {
  padding-top: 0;
}

.model-image-container {
  text-align: center;
  margin: 1.6rem 0;
}

.model-image {
  max-width: 100%;
  height: auto;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
}

.model-description {
  margin-top: 1.6rem;
  font-size: 1.4rem;
  color: #444;
}

.intro-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.intro-list li {
  font-size: 1.4rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 20px;
}

.intro-list li::before {
  content: "●";
  color: #967BB6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
