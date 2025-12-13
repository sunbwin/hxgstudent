import request from '@/utils/request'; // 导入我们封装的 Axios 实例

/**
 * 获取用户的支付/报名状态及信息
 * @param {object} params - 请求参数
 * @returns {Promise<object>}
 */
export function getPayStatus(params) {
    return request({
        url: '/apiv1/trial/status', // 对应后端接口地址
        method: 'get',
        params,
        // hideLoading: true // 如果此接口不需要显示loading，可以在这里添加
    });
}

/**
 * 提交订单并获取支付信息（模拟）
 * @param {object} params - 包含姓名和手机号 { name: string, phone: string }
 * @returns {Promise<object>}
 */
export function submitOrder(params) {
    // 假设支付接口也是 GET 请求，携带参数
    return request({
        url: '/apiv1/pay',
        method: 'get',
        params,
    });
}

/**
 * 绑定学生编号
 * @param {object} data - 包含学生编号 { stuCode: string }
 * @returns {Promise<object>}
 */
export function bindStudent(data) {
    return request({
        url: '/apiv1/home/bindstu',
        method: 'post', // POST 请求
        data,
    });
}

/**
 * 获取用户信息
 * GET /apiv1/home/userinfo
 * @returns {Promise<object>} 包含学生信息的对象 { student: { name, gender, grade, ... } }
 */
export function getUserInfo() {
    return request({
        url: '/apiv1/home/userinfo',
        method: 'get',
    });
}

/**
 * 获取积分总数
 * GET /apiv1/home/energy/amount
 * @returns {Promise<object>} 包含 energy 字段的对象 { energy: number }
 */
export function getEnergyAmount() {
    return request({
        url: '/apiv1/home/energy/amount',
        method: 'get',
    });
}