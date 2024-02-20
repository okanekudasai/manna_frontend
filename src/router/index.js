import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import MainPageView from '@/views/MainPageView.vue'
import BulletinBoardViewVue from '@/views/BulletinBoardView.vue'
import ModalBase from '@/modal/ModalBase.vue'
import StartDialogModal from '@/modal/StartDialogModal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPageView,
      children: [
        {
          path: 'modal',
          component: ModalBase,
          children: [
            {
              path: 'startDialog',
              component: StartDialogModal,
            }
          ]
        }
      ]
    },
    {
      path: '/bulletinBoard',
      name: 'bulletinBoard',
      component: BulletinBoardViewVue
    }
  ]
})

export default router
