import { createRouter, createWebHistory } from 'vue-router';
import RegistrationView from '../views/RegistrationView.vue';
import SearchView from '@/views/SearchView.vue';

const routes = [
  {
    path: '/register/:event?/:terminal?',
    name: 'register',
    component: RegistrationView
  },
  {
    path: '/search/:event?/:terminal?',
    name: 'search',
    component: SearchView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
