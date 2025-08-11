<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="title">欢迎使用好习惯课程平台</h1>

      <van-cell-group inset>
        <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
            type="tel"
            maxlength="11"
        />

        <van-field
            v-model="smsCode"
            center
            clearable
            label="验证码"
            placeholder="请输入验证码"
        >
          <template #button>
            <van-button
                size="small"
                type="primary"
                :disabled="isCounting"
                @click="getSmsCode"
            >
              {{ isCounting ? `${countDown}s后重新获取` : '获取验证码' }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>

      <div class="submit-btn-wrapper">
        <van-button
            round
            block
            type="primary"
            @click="submit"
        >
          提交
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {showToast} from 'vant';
import { useRouter,onBeforeRouteLeave } from 'vue-router';

const phone = ref('');
const smsCode = ref('');

// 倒计时状态
const isCounting = ref(false);
const countDown = ref(60);
let timer = null;

const router = useRouter();

// 获取验证码逻辑
const getSmsCode = () => {
  if (!phone.value || phone.value.length !== 11) {
    showToast('请输入正确的11位手机号');
    return;
  }

  showToast('验证码发送成功');

  isCounting.value = true;
  timer = setInterval(() => {
    if (countDown.value > 1) {
      countDown.value--;
    } else {
      clearInterval(timer);
      isCounting.value = false;
      countDown.value = 60; // 重置倒计时
    }
  }, 1000);
};

// 提交逻辑
const submit = () => {
  if (!phone.value || phone.value.length !== 11) {
    showToast('请输入正确的手机号');
    return;
  }
  if (!smsCode.value) {
    showToast('请输入验证码');
    return;
  }

  goToMain()
};
const goToMain = () => {
  router.replace({
    name:'home'
  })
};
</script>

<style scoped>
.login-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  /* 设置背景图片 */
  background-image: url('@/assets/register_bg.jpg');
  background-size: cover;
  background-position: center;
}

.login-container .login-form {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
}

.login-container .login-form .title {
  color: white;
  font-size: 4.8rem;
  margin-bottom: 4rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.login-container .login-form .van-cell-group {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.login-container .login-form .van-field {
  background-color: transparent;
  --van-field-label-color: #fff;
  --van-field-input-text-color: #fff;
  font-size: 1.6rem;
}

.login-container .login-form .van-field >>> .van-field__label {
  width: 5rem;
  flex: none;
}

.login-container .login-form .van-field .van-button {
  font-size: 1.6rem;
  padding: 0 1rem;
}

.login-container .login-form .submit-btn-wrapper {
  width: 100%;
  margin-top: 6rem;
}

.login-container .login-form .submit-btn-wrapper .van-button {
  font-size: 1.6rem;
}
</style>