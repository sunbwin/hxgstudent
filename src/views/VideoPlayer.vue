<template>
  <div class="video-player-page">
    <!-- 视频容器 -->
    <div class="video-container">
      <video
          ref="videoPlayer"
          class="video-element"
          controls
          :poster="posterUrl"
          @play="onPlay"
          @pause="onPause"
      >
        <source :src="videoUrl" type="video/mp4">
        您的浏览器不支持HTML5视频
      </video>
    </div>

    <!-- 返回按钮 -->
    <button class="back-button" @click="goBack">
      <i class="back-icon">←</i> 返回
    </button>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      videoUrl: '/ad.mp4',  // public文件夹下的视频路径
      posterUrl: '/ad.png'  // 视频封面路径
    }
  },
  methods: {
    onPlay() {
      console.log('视频开始播放')
    },
    onPause() {
      console.log('视频暂停')
    },
    goBack() {
      this.$router.go(-1)  // 返回上一页
    }
  }
}
</script>

<style scoped>
/* 页面样式 */
.video-player-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 视频容器样式 */
.video-container {
  width: 100%;
  max-width: 1200px;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 宽高比 */
  position: relative;
}

/* 视频元素样式 */
.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}

/* 返回按钮样式 */
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.back-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.6);
}

.back-icon {
  margin-right: 5px;
}
</style>