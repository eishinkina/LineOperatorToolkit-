
import { createRouter, createWebHistory } from 'vue-router';
import IncomingLine from '@/views/IncomingLine.vue';
import OutgoingDRTV from '@/views/OutgoingDRTV.vue';
import Outgoing from '@/views/Outgoing.vue';

const routes = [
  {
    path: '/',
    name: 'IncomingLine',
    component: IncomingLine
  },
  {
    path: '/outgoingDrtv',
    name: 'OutgoingDRTV',
    component: OutgoingDRTV
  },
  {
    path: '/outgoing',
    name: 'Outgoing',
    component: Outgoing
  },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;
