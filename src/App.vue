<template>
  <Layout>
    <template v-slot:navbar>
      <navbar />
    </template>

    <template v-slot:asideMenu>
      <aside-menu />
    </template>

    <!-- Children  -->
    <template v-slot:default>
      <div class="p-5 mt-16 sm:ml-64">
        <Transition name="slide-fade">
          <RouterView />
        </Transition>
      </div>
    </template>
    <!-- Children -->

    <template v-slot:footer>
      <app-footer />
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/layouts/LayoutApp.vue'
import Navbar from '@/layouts/Navbar.vue'
import AsideMenu from '@/layouts/AsideMenu.vue'
import AppFooter from '@/layouts/Footer.vue'
</script>
