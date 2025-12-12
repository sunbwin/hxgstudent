// src/utils/auth.js
export const AuthHelper = {
    // 存储 UID 到 localStorage
    setUid(uid) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('uid', uid)
        }
    },

    // 从 localStorage 获取 UID
    getUid() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('uid')
        }
        return null
    },

    // 清除 UID
    clearUid() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('uid')
        }
    },

    // 从 URL 获取并存储 UID
    processUidFromUrl() {
        debugger
        if (typeof window === 'undefined') return null

        let urlAll = window.location.href

        urlAll = urlAll.substr(urlAll.indexOf('?'))

        // 从 URL 参数获取 UID
        const urlParams = new URLSearchParams(urlAll)
        const uid = urlParams.get('openid')

        if (uid) {
            this.setUid(uid)
            return uid
        }

        // 如果 URL 中没有，尝试从 localStorage 获取
        return this.getUid()
    },

    // 存储 UID 到 localStorage
    setAgent(uid) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('agent', uid)
        }
    },

    // 从 localStorage 获取 UID
    getAgent() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('agent')
        }
        return null
    },

    // // 清除 UID
    // clearUid() {
    //     if (typeof window !== 'undefined') {
    //         localStorage.removeItem('bds_uid')
    //     }
    // },

    // 从 URL 获取并存储 UID
    processAgentFromUrl() {
        if (typeof window === 'undefined') return null

        let urlAll = window.location.href

        urlAll = urlAll.substr(urlAll.indexOf('?'))

        // 从 URL 参数获取 UID
        const urlParams = new URLSearchParams(urlAll)
        const agent = urlParams.get('agent')

        if (agent) {
            this.setAgent(agent)
            return agent
        }

        // 如果 URL 中没有，尝试从 localStorage 获取
        return this.getAgent()
    }
}