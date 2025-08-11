<template>
  <div class="trial-page-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="体验课报名"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
    />

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 页面标题 -->
      <h2 class="page-title">体验课课程介绍</h2>

      <!-- 课程图片 -->
      <img
          src="../assets/sfs.png"
          alt="体验课课程图片"
          class="course-image"
      />

      <!-- 课程内容详情 -->
      <div class="course-details van-cell-group van-cell-group--inset">
        <van-cell title="课程" value="1节正课（40分钟）+2节精英课（20分钟/每节）" />
        <van-cell title="价值" value="原价396元，体验课仅需39.9元" />
        <van-cell title="流程">
          <template #value>
            <span>报名成功后，我们会通过你注册的联系方式及时与您联系，为您安排专职老师和你协商上课时间等事宜</span>
          </template>
        </van-cell>
      </div>

      <!-- 提交按钮 -->
      <div class="submit-btn-wrapper">
        <van-button round block type="primary" @click="onSubmit">
          提交
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showToast } from 'vant';

defineOptions({
  name:'trial'
})

// 返回上一页
const onClickLeft = () => history.back();

// 提交表单逻辑
const onSubmit = () => {
  showToast('报名信息提交成功！');
  // 在这里可以添加实际的表单提交逻辑，例如调用API
};
</script>

<style scoped>
/* 整个页面的容器，为固定导航栏留出顶部空间 */
.trial-page-container {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-top: 4.6rem;
}

/* 主要内容区域的样式 */
.main-content {
  padding: 1.6rem;
}

/* 页面标题 */
.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: #323233;
  text-align: center;
  margin: 0 0 1.5rem 0;
}

/* 课程图片 */
.course-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
}

/* 课程详细信息部分 */
.course-details {
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 2rem;
}

.van-cell-group--inset {
  margin: 0;
}

/* 提交按钮容器 */
.submit-btn-wrapper {
  margin-top: 3rem;
  padding: 0 1rem;
}
</style>
