import axios from 'axios';
import { showToast, showLoadingToast, closeToast } from 'vant'; // 导入 Vant 的 Toast 组件
import { AuthHelper } from '../utils/auth.js'

// 1. 创建 Axios 实例
const service = axios.create({
    baseURL: import.meta.env.DEV ? '' : '', // 从环境变量获取 API 基础路径
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

let loadingToast = null; // 用于存储 Loading Toast 实例

// 2. 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 例如：显示加载提示
        if (!config.hideLoading) { // 允许通过 config.hideLoading 控制是否显示 loading
            loadingToast = showLoadingToast({
                message: '加载中...',
                forbidClick: true, // 禁止背景点击
                duration: 0, // 不会自动关闭
            });
        }

        // 统一在请求参数中注入 openid, agentCode 和 productCode
        // 这样可以正确处理 GET 请求的参数序列化，避免手动拼接 URL 字符串
        config.params = config.params || {};

        // 自动添加固定参数
        config.params.uid = AuthHelper.getUid();
        config.params.agentCode = AuthHelper.getAgent();

        return config;
    },
    error => {
        // 对请求错误做些什么
        closeToast(); // 关闭加载提示
        console.error('请求发送失败：', error);
        showToast('请求发送失败');
        return Promise.reject(error);
    }
);

// 3. 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        closeToast(); // 关闭加载提示

        const res = response.data;

        // 根据后端返回的 code 或 status 进行判断
        if (res.code === 0) { // 假设成功状态码是 200 或 'success'
            return res.obj; // 返回真正的数据
        } else {
            // 统一处理错误
            showToast(res.message || '请求失败，请稍后再试');
            console.error('业务请求失败：', res);
            return Promise.reject(new Error(res.message || 'Error'));
        }
    },
    error => {
        // 对响应错误做些什么
        closeToast(); // 关闭加载提示
        console.error('响应接收失败：', error);

        let message = '请求异常';
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            switch (error.response.status) {
                case 400:
                    message = '请求错误';
                    break;
                case 401:
                    message = '未授权，请重新登录';
                    // 可以跳转到登录页
                    // router.push('/login');
                    break;
                case 403:
                    message = '拒绝访问';
                    break;
                case 404:
                    message = '请求地址出错';
                    break;
                case 500:
                    message = '服务器内部错误';
                    break;
                default:
                    message = `连接错误 ${error.response.status}`;
            }
        } else if (error.request) {
            // 请求已经成功发起，但没有收到响应
            message = '网络连接异常或请求超时';
        } else {
            // 发送请求时出了些问题，表示发生了事情导致请求未能完成
            message = error.message;
        }
        showToast(message);
        return Promise.reject(error);
    }
);

export default service;