<template>
  <div class="profile-edit-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="基本资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />

    <div class="form-container">
      <!-- 学生姓名 -->
      <van-field
          v-model="formData.name"
          label="学生姓名"
          placeholder="请输入学生姓名"
      />

      <!-- 学生性别 -->
      <van-field name="gender" label="学生性别">
        <template #input>
          <van-radio-group v-model="formData.gender" direction="horizontal">
            <van-radio name="male">男</van-radio>
            <van-radio name="female">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- 学习阶段 -->
      <van-field name="stage" label="学习阶段">
        <template #input>
          <van-radio-group v-model="formData.stage" direction="horizontal">
            <van-radio name="primary">小学</van-radio>
            <van-radio name="middle">初中</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- 入学年份 -->
      <van-field
          v-model="formData.admissionYear"
          is-link
          readonly
          name="yearPicker"
          label="入学年份"
          placeholder="点击选择年份"
          @click="showYearPicker = true"
      />
      <van-popup v-model:show="showYearPicker" round position="bottom">
        <van-picker
            :columns="yearColumns"
            @confirm="onYearConfirm"
            @cancel="showYearPicker = false"
        />
      </van-popup>

      <!-- 学校 -->
      <van-field
          v-model="formData.school"
          label="学校"
          placeholder="请输入学校名称"
      />

      <!-- 提交按钮 -->
      <div class="submit-btn-wrapper">
        <van-button round block type="primary" @click="onSubmit">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';

// 导航栏返回按钮
const onClickLeft = () => history.back();

// 表单数据
const formData = ref({
  name: '',
  gender: 'male',
  stage: 'primary',
  admissionYear: '',
  school: '',
});

// 年份选择器
const showYearPicker = ref(false);
const currentYear = new Date().getFullYear();
const yearColumns = Array.from({ length: 20 }, (_, i) => ({
  text: String(currentYear - i),
  value: currentYear - i,
}));

const onYearConfirm = ({ selectedOptions }) => {
  formData.value.admissionYear = selectedOptions[0].text;
  showYearPicker.value = false;
};

// 提交逻辑
const onSubmit = () => {
  if (!formData.value.name || !formData.value.school || !formData.value.admissionYear) {
    showToast('请填写完整信息');
    return;
  }
  showToast('提交成功');
  console.log('提交的表单数据:', formData.value);
  onClickLeft();
};
</script>

<style scoped>
.profile-edit-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.form-container {
  padding: 1.6rem;
}

.van-field {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  overflow: hidden;
}

.van-radio-group {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}

.van-radio {
  font-size: 1.6rem;
}

.submit-btn-wrapper {
  margin-top: 3rem;
  padding: 0 1rem;
}
</style>
