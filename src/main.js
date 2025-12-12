import { createApp } from 'vue'
import Vant from 'vant';
import './style.css'
import App from './App.vue'
import { Lazyload } from 'vant';
import router from './router'; // 导入我们创建的路由实例
import '@/utils/rem'; // <-- 引入 rem 适配文件，确保在应用挂载之前执行
import { AuthHelper } from './utils/auth'

// 应用启动时处理 UID
AuthHelper.processUidFromUrl()
AuthHelper.processAgentFromUrl()
const app = createApp(App);
app.use(Vant);
app.use(router); // 挂载 Vue Router
// Lazyload 指令需要单独进行注册
app.use(Lazyload);

// 注册时可以配置额外的选项
app.use(Lazyload, {
    lazyComponent: true,
});

app.mount('#app')
