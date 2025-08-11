// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 导入所有视图组件
import Main from '@/views/Main.vue';
import Home from '@/views/tabs/Home.vue';
import Plan from '@/views/tabs/Plan.vue';
import Profile from '@/views/tabs/Profile.vue';
import VideoPlayer from "@/views/VideoPlayer.vue";
import Login from "@/views/Login.vue";
import EditProfile from "@/views/EditProfile.vue";
import Investigation from "@/views/Investigation.vue";
import Trial from "@/views/Trial.vue";
import ClassHour from "@/views/ClassHour.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: '/home',
        meta: {
            // 这个 meta.keepAlive 在这里不重要，因为 App.vue 中写死了 include="main"
            title: '主页',
        },
        children:[
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: {
                    title: '首页',
                    keepAlive: true // 这个标记很重要，在 Main.vue 的 keep-alive 中使用
                }
            },
            {
                path: 'plan',
                name: 'plan',
                component: Plan,
                meta: {
                    title: '课表',
                    keepAlive: true // 这个标记很重要，在 Main.vue 的 keep-alive 中使用
                }
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile,
                meta: {
                    title: '个人',
                    keepAlive: true
                }
            },
        ]
    },
    {
        path: '/video',
        name: 'VideoPlayer',
        component: VideoPlayer,
        meta: {
            keepAlive: false // 这个页面不缓存
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/investigation',
        name: 'investigation',
        component: Investigation
    },
    {
        path: '/trial',
        name: 'trial',
        component: Trial
    },
    {
        path: '/classhour',
        name: 'classhour',
        component: ClassHour
    },
    {
        path: '/editprofile',
        name: 'editprofile',
        component: EditProfile
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


export default router;