import request from '@/utils/request'; // 导入我们封装的 Axios 实例

export function getPayStatus(params) {
    return request({
        url: '/apiv1/status', // 对应后端接口地址
        method: 'get',
        params,
        // hideLoading: true // 如果此接口不需要显示loading，可以在这里添加
    });
}