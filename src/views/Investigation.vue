<template>
  <div class="survey-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="好习惯试听课报名问卷"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
    />

    <div class="survey-form">
      <!-- 问卷问题列表 -->
      <van-cell-group inset>
        <div v-for="question in questions" :key="question.id" class="question-item">
          <!-- 题目文本 -->
          <h4 class="question-text">{{ question.number }}. {{ question.text }}</h4>

          <!-- 根据题目类型动态渲染不同组件 -->
          <div class="question-content">
            <!-- 单选题 -->
            <van-radio-group
                v-if="question.type === 'single-choice'"
                v-model="formData[question.id]"
                direction="vertical"
            >
              <van-radio
                  v-for="option in question.options"
                  :key="option.id"
                  :name="option.id"
              >
                {{ option.text }}
              </van-radio>
              <!-- 针对问题2的特殊处理 (原问题6) -->
              <div v-if="question.id === 'q2' && formData.q2 === 'yes'">
                <van-field
                    v-model="formData.q2_detail"
                    placeholder="请简述是哪类课程以及孩子的适应情况"
                    rows="1"
                    autosize
                    type="textarea"
                    class="conditional-textarea"
                />
              </div>
            </van-radio-group>

            <!-- 多选题 -->
            <van-checkbox-group
                v-else-if="question.type === 'multi-choice'"
                v-model="formData[question.id]"
                direction="vertical"
            >
              <van-checkbox
                  v-for="option in question.options"
                  :key="option.id"
                  :name="option.id"
              >
                {{ option.text }}
              </van-checkbox>
              <!-- 针对问题10的特殊处理 (原问题14) -->
              <div v-if="question.id === 'q10' && formData.q10.includes('other')">
                <van-field
                    v-model="formData.q10_other"
                    placeholder="请输入"
                    rows="1"
                    autosize
                    type="textarea"
                    class="conditional-textarea"
                />
              </div>
            </van-checkbox-group>

            <!-- 填空题 -->
            <van-field
                v-else-if="question.type === 'fill-in'"
                v-model="formData[question.id]"
                placeholder="请输入"
                rows="1"
                autosize
                type="textarea"
            />
          </div>
        </div>
      </van-cell-group>
    </div>

    <!-- 提交按钮 -->
    <div class="submit-btn-wrapper">
      <van-button round block type="primary" @click="onSubmit">提交</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { showToast } from 'vant';

// 从 JSON 文件中导入问卷数据，这里我们假设你已经将 JSON 复制到了一个变量中
// 在实际项目中，你可以通过 import 或者异步请求来加载这个 JSON
const questions = [
  {
    "id": "q1",
    "number": 1,
    "text": "您认为孩子目前在学习上属于",
    "type": "single-choice",
    "options": [
      { "id": "leading", "text": "领先型 (学习内容轻松掌握，学有余力)" },
      { "id": "stable", "text": "平稳型 (能跟上学校进度，表现良好)" },
      { "id": "striving", "text": "努力型 (需要较多努力才能跟上进度)" },
      { "id": "improving", "text": "待提升型 (在学习上遇到一些困难)" }
    ]
  },
  {
    "id": "q2",
    "number": 2,
    "text": "孩子是否有过线上学习经历",
    "type": "single-choice",
    "options": [
      { "id": "yes", "text": "有，请简述是哪类课程以及孩子的适应情况" },
      { "id": "no", "text": "没有" }
    ]
  },
  {
    "id": "q3",
    "number": 3,
    "text": "孩子平时有课前预习的习惯吗？",
    "type": "single-choice",
    "options": [
      { "id": "often", "text": "经常" },
      { "id": "sometimes", "text": "有时" },
      { "id": "rarely", "text": "很少" },
      { "id": "never", "text": "没有" }
    ]
  },
  {
    "id": "q4",
    "number": 4,
    "text": "孩子预习时通常能抓住重点吗？",
    "type": "single-choice",
    "options": [
      { "id": "always", "text": "总能" },
      { "id": "mostly", "text": "大部分能" },
      { "id": "some-difficulty", "text": "有些困难" },
      { "id": "completely-not", "text": "完全不能" }
    ]
  },
  {
    "id": "q5",
    "number": 5,
    "text": "孩子在预习的过程中或预习后，会主动提出疑问吗？",
    "type": "single-choice",
    "options": [
      { "id": "often", "text": "经常会" },
      { "id": "sometimes", "text": "有时会" },
      { "id": "rarely", "text": "很少会" },
      { "id": "never", "text": "基本不会" }
    ]
  },
  {
    "id": "q6",
    "number": 6,
    "text": "孩子上课的注意力怎么样？",
    "type": "single-choice",
    "options": [
      { "id": "very-focused", "text": "非常集中" },
      { "id": "focused", "text": "比较集中" },
      { "id": "distracted-sometimes", "text": "一般，有时会走神" },
      { "id": "easily-distracted", "text": "容易分心" },
      { "id": "not-focused", "text": "注意力不太集中" }
    ]
  },
  {
    "id": "q7",
    "number": 7,
    "text": "孩子在课堂上是否积极思考和提问？",
    "type": "single-choice",
    "options": [
      { "id": "very-active", "text": "非常积极" },
      { "id": "active", "text": "比较积极" },
      { "id": "general", "text": "一般" },
      { "id": "not-active", "text": "不太积极" }
    ]
  },
  {
    "id": "q8",
    "number": 8,
    "text": "孩子做课堂笔记的习惯如何？",
    "type": "single-choice",
    "options": [
      { "id": "detailed", "text": "详细且有条理" },
      { "id": "key-points", "text": "会记录重点" },
      { "id": "occasionally", "text": "偶尔会记" },
      { "id": "never", "text": "基本不记" }
    ]
  },
  {
    "id": "q9",
    "number": 9,
    "text": "孩子课后会主动复习当天所学内容吗？",
    "type": "single-choice",
    "options": [
      { "id": "often", "text": "经常" },
      { "id": "sometimes", "text": "有时" },
      { "id": "rarely", "text": "很少" },
      { "id": "never", "text": "没有" }
    ]
  },
  {
    "id": "q10",
    "number": 10,
    "text": "孩子通常采用哪种方式复习？(可多选)",
    "type": "multi-choice",
    "options": [
      { "id": "read-notes", "text": "阅读笔记" },
      { "id": "exercises", "text": "完成配套练习" },
      { "id": "discussion", "text": "和家长讨论" },
      { "id": "memorization", "text": "背诵记忆" },
      { "id": "other", "text": "其他" }
    ]
  },
  {
    "id": "q11",
    "number": 11,
    "text": "您认为孩子在知识巩固和记忆方面表现如何？",
    "type": "single-choice",
    "options": [
      { "id": "very-good", "text": "非常好" },
      { "id": "good", "text": "比较好" },
      { "id": "general", "text": "一般" },
      { "id": "to-be-improved", "text": "有待提高" }
    ]
  },
  {
    "id": "q12",
    "number": 12,
    "text": "孩子通常能独立完成作业吗？",
    "type": "single-choice",
    "options": [
      { "id": "always", "text": "总能独立完成" },
      { "id": "mostly", "text": "大部分能独立完成" },
      { "id": "sometimes-need-help", "text": "有时需要帮助" },
      { "id": "often-need-help", "text": "经常需要帮助" }
    ]
  },
  {
    "id": "q13",
    "number": 13,
    "text": "孩子完成作业的专注度和效率如何？",
    "type": "single-choice",
    "options": [
      { "id": "efficient-focused", "text": "高效专注" },
      { "id": "focused-average", "text": "比较专注，效率尚可" },
      { "id": "distracted-general", "text": "容易分心，效率一般" },
      { "id": "dragging", "text": "拖沓，效率较低" }
    ]
  },
  {
    "id": "q14",
    "number": 14,
    "text": "孩子对于作业中的错题，会如何处理？",
    "type": "single-choice",
    "options": [
      { "id": "correct-understand", "text": "主动订正并弄懂" },
      { "id": "correct-with-remind", "text": "在提醒下会订正" },
      { "id": "just-correct-answer", "text": "只是订正答案，不探究原因" },
      { "id": "dont-care", "text": "不太在意错题" }
    ]
  },
  {
    "id": "q15",
    "number": 15,
    "text": "您认为孩子擅长总结和归纳知识点吗？",
    "type": "single-choice",
    "options": [
      { "id": "very-good", "text": "非常擅长" },
      { "id": "good", "text": "比较擅长" },
      { "id": "general", "text": "一般擅长" },
      { "id": "not-good", "text": "不太擅长" }
    ]
  },
  {
    "id": "q16",
    "number": 16,
    "text": "孩子在学习新知识时，更倾向于",
    "type": "single-choice",
    "options": [
      { "id": "understand-concepts", "text": "理解概念和原理" },
      { "id": "memorize-formulas", "text": "记忆公式和方式" },
      { "id": "practice", "text": "通过大量练习掌握" },
      { "id": "superficial-understanding", "text": "表面理解" }
    ]
  },
  {
    "id": "q17",
    "number": 17,
    "text": "您认为孩子在逻辑思维和问题解决能力方面表现如何？",
    "type": "single-choice",
    "options": [
      { "id": "very-strong", "text": "非常强" },
      { "id": "strong", "text": "比较强" },
      { "id": "general", "text": "一般" },
      { "id": "weak", "text": "比较薄弱" }
    ]
  },
  {
    "id": "q18",
    "number": 18,
    "text": "孩子学习的主动性如何？",
    "type": "single-choice",
    "options": [
      { "id": "very-active", "text": "非常主动，有自己的学习计划" },
      { "id": "active", "text": "比较主动，能够按照要求学习" },
      { "id": "not-active", "text": "不太主动，需要督促" },
      { "id": "passive", "text": "非常被动" }
    ]
  },
  {
    "id": "q19",
    "number": 19,
    "text": "孩子是否有制定学习计划的习惯 (例如每日/每周计划)？",
    "type": "single-choice",
    "options": [
      { "id": "yes-adheres", "text": "有，且能坚持" },
      { "id": "yes-sometimes", "text": "有，但坚持一般" },
      { "id": "occasionally", "text": "偶尔制定" },
      { "id": "never", "text": "没有" }
    ]
  },
  {
    "id": "q20",
    "number": 20,
    "text": "孩子的时间观念如何？",
    "type": "single-choice",
    "options": [
      { "id": "strong", "text": "很强，能合理安排时间" },
      { "id": "ok-sometimes-delay", "text": "尚可，大致可安排，偶尔拖延需提醒" },
      { "id": "general-delay", "text": "一般，容易拖延，需要经常督促" },
      { "id": "weak", "text": "比较弱，非常拖沓" }
    ]
  },
  {
    "id": "q21",
    "number": 21,
    "text": "您认为孩子在学习上目前主要的困难或挑战是什么？",
    "type": "fill-in"
  },
  {
    "id": "q22",
    "number": 22,
    "text": "您对本次线上课程的期待？",
    "type": "fill-in"
  },
  {
    "id": "q23",
    "number": 23,
    "text": "您还有其他需要老师了解或关注的情况吗？",
    "type": "fill-in"
  }
];

// 初始化表单数据
const formData = reactive({});
questions.forEach(q => {
  if (q.type === 'single-choice') {
    // 为单选题初始化一个空字符串
    formData[q.id] = '';
  } else if (q.type === 'multi-choice') {
    // 为多选题初始化一个空数组
    formData[q.id] = [];
  } else if (q.type === 'fill-in') {
    // 为填空题初始化一个空字符串
    formData[q.id] = '';
  }
});

// 针对特殊问题增加字段
formData.q2_detail = '';
formData.q10_other = '';

// 导航栏返回
const onClickLeft = () => history.back();

// 提交逻辑
const onSubmit = () => {
  showToast('问卷提交成功');
  console.log('提交的问卷数据:', formData);
};
</script>

<style scoped>
.survey-container {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-top: 4.6rem; /* 增加顶部填充以适应固定的导航栏 */
}

.survey-form {
  padding: 0;
}

.van-cell-group {
  margin-bottom: 2rem;
}

.question-item {
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-bottom: 1.5rem;
}

.question-text {
  font-size: 1.6rem;
  font-weight: 500;
  color: #323233;
  margin: 0 0 1.5rem 0;
}

.question-content {
  padding-left: 1rem;
}

.van-radio-group,
.van-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.van-radio,
.van-checkbox {
  font-size: 1.6rem;
  line-height: 1.8;
}

.conditional-textarea {
  margin-top: 1rem;
}

.van-field {
  margin-top: 1rem;
  border: 1px solid #ebedf0;
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
}

.submit-btn-wrapper {
  margin-top: 3rem;
  padding: 0 1rem;
}
</style>
