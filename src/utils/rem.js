// src/utils/rem.js

// 设计稿的宽度 (例如 iPhone X/Xs/11Pro 等的宽度是 375px)
// 你可以根据你的设计稿实际宽度来设置
const DESIGN_WIDTH = 375;

// rem 的基准值 (例如，1rem = 10px)
// 你可以根据自己的计算习惯来设置，例如 100px 方便百分比换算，10px 方便像素换算
// 比如 1rem 对应设计稿 10px
const BASE_FONT_SIZE = 10;

function setRem() {
    // 获取当前设备的视口宽度
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;

    // 如果当前设备宽度大于某个最大值，例如 iPad 或桌面端，可以限制最大宽度，防止内容过大
    // 比如限制在 750px，超过 750px 就不再放大
    // if (clientWidth > 750) {
    //   clientWidth = 750;
    // }

    // 计算新的 html font-size
    // 计算公式：(当前设备宽度 / 设计稿宽度) * 基准字体大小
    // 例如：(375px / 375px) * 10px = 10px
    // 例如：(414px / 375px) * 10px = 11.04px
    const newFontSize = (clientWidth / DESIGN_WIDTH) * BASE_FONT_SIZE;

    // 将计算出的字体大小设置给 html 元素
    document.documentElement.style.fontSize = `${newFontSize}px`;
}

// 首次加载时执行
setRem();

// 监听窗口尺寸变化，当窗口大小改变时重新设置 rem
// 使用事件节流 (throttle) 可以优化性能，避免频繁计算
let timeoutId = null;
window.addEventListener('resize', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(setRem, 100); // 延迟 100ms 执行，避免抖动
});

// 也可以暴露 setRem 函数，在特定需要时手动调用
export { setRem };