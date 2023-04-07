import { createRouter, createWebHistory } from 'vue-router'
// Views
import HomeView from '../views/HomeView.vue'
import InventoryView from '../views/InventoryView.vue';
import FixedCostsView from '../views/FixedCostsView.vue';
import OrdersView from '../views/OrdersView.vue';
import PaymentsView from '../views/PaymentsView.vue';
import ProductsView from '../views/ProductsView.vue';
import RatingsView from '../views/RatingsView.vue';
import ServicesView from '../views/ServicesView.vue';
import UsersView from '../views/UsersView.vue';
import _404View from '../views/_404View.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/fixed-costs',
      name: 'fixed-costs',
      component: FixedCostsView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: RatingsView
    },
    {
      path: '/:patchMatch(.*)*',
      component: _404View
    }
  ]
})

export default router
