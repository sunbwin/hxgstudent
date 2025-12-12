
<template>
  <div class="profile-container">
    <!-- 头部个人信息卡片 -->
    <div class="profile-header">
      <div class="user-info">
        <h1 class="user-name">王大鹏</h1>
        <span class="user-gender">男</span>
      </div>
      <div class="user-tags">
        <van-tag type="primary" plain class="user-tag">小学</van-tag>
        <span class="admission-info">入学: 2018年</span>
      </div>
      <div class="school-info">
        <p>四川省成都市龙江路小学</p>
      </div>
    </div>

    <!-- 功能列表 -->
    <div class="feature-list">
      <van-cell-group inset style="margin: 1rem">
        <van-cell
            title="基本资料"
            is-link
            @click="skipEditProfile"
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
        </van-cell>
        <van-cell
            title="学习情况调查表"
            is-link
            @click="skipInvestigation"
        >
          <template #icon>
            <van-icon name="setting-o" class="cell-icon" />
          </template>
        </van-cell>
<!--        <van-cell-->
<!--            title="我的课时"-->
<!--            is-link-->
<!--            @click="skipClassHour"-->
<!--        >-->
<!--          <template #icon>-->
<!--            <van-icon name="setting-o" class="cell-icon" />-->
<!--          </template>-->
<!--        </van-cell>-->
<!--        <van-cell-->
<!--            title="我的订单"-->
<!--            is-link-->
<!--            @click="onCellClick('my-orders')"-->
<!--        >-->
<!--          <template #icon>-->
<!--            <van-icon name="setting-o" class="cell-icon" />-->
<!--          </template>-->
<!--        </van-cell>-->
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { showToast } from 'vant';
import {useRouter} from "vue-router";


defineOptions({
  name:'profile'
})

const router = useRouter();
// 模拟点击事件
const onCellClick = (type) => {
  showToast(`点击了: ${type}`);
};
const skipEditProfile = () => {
  router.push({
    name: 'editprofile',
  });
};

const skipInvestigation = () => {
  router.push({
    name: 'investigation',
  });
};
const skipClassHour = () => {
  router.push({
    name: 'classhour',
  });
};

</script>

<style scoped>
.profile-container {
  min-height: 100vh;
  background-color: #f7f8fa; /* Vant 的默认背景色 */
  padding: 1rem 0;
}

/* 头部个人信息卡片 */
.profile-header {
  background-color: var(--primary-green);
  color: #fff;
  padding: 2rem;
  margin: 0 1rem 2rem;
  border-radius: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.user-name {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.user-gender {
  margin-left: 2rem;
  font-size: 1.6rem;
}

.user-tags {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.user-tag {
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.4rem;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
}

.admission-info {
  margin-left: 1rem;
  font-size: 1.6rem;
}

.school-info {
  font-size: 1.6rem;
}

/* 功能列表 */
.feature-list {

}

.cell-icon {
  font-size: 2rem;
  color: var(--primary-green);
  margin-right: 1rem;
}

.van-cell {
  padding: 1.2rem 1.6rem;
}

.van-cell__title {
  font-size: 1.6rem;
}
</style>
