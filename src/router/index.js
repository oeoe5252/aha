import Vue from 'vue'
import VueRouter from 'vue-router';
import Hw5 from '@/views/main/Hw5';
import GuideMain from "@/views/styleGuide/Main";
import GuideForm from "@/views/styleGuide/Form";
import GuideTest from "@/views/styleGuide/Test";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Hw5',
        components: {
            default: Hw5
        }
    },
    {
        path: '/styleGuide',
        name: 'form',
        components: {
            default: GuideMain
        }
    },
    {
        path: '/styleGuide/form',
        name: 'form',
        components: {
            default: GuideForm
        }
    },
    {
        path: '/styleGuide/test',
        name: 'form',
        components: {
            default: GuideTest
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
