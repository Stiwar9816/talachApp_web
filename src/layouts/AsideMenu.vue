<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-orange-100 sm:translate-x-0 dark:bg-black-800 dark:border-black-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-orange-100 dark:bg-black-800">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon Home -->
            <HomeIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon Home -->
            <span class="ml-3">Incio</span>
          </router-link>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-black-900 transition duration-75 rounded-lg group hover:bg-black-100 dark:text-white dark:hover:bg-black-700 active:bg-orange-300"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <!-- Icon Wallet -->
            <WalletIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon Wallet -->
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Precios</span>
            <!-- Icon ArrowDown -->
            <ChevronDownIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon ArrowDown -->
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <li>
              <router-link
                to="products"
                class="flex items-center w-full p-2 text-black-900 transition duration-75 rounded-lg pl-11 group hover:bg-black-100 dark:text-white dark:hover:bg-black-700 active:bg-orange-300"
              >
                <!-- Icon Product -->
                <ArchiveBoxIcon class="h-6 w-6 text-orange-400 mr-1" />
                <!-- End Icon Product -->
                Productos
              </router-link>
            </li>
            <li>
              <router-link
                to="services"
  
                class="flex items-center w-full p-2 text-black-900 transition duration-75 rounded-lg pl-11 group hover:bg-black-100 dark:text-white dark:hover:bg-black-700 active:bg-orange-300"
              >
                <!-- Icon Service -->
                <BuildingStorefrontIcon class="h-6 w-6 text-orange-400 mr-1" />
                <!-- End Icon Product -->
                Servicios
              </router-link>
            </li>
            <li>
              <router-link
                to="fixed-costs"
  
                class="flex items-center w-full p-2 text-black-900 transition duration-75 rounded-lg pl-11 group hover:bg-black-100 dark:text-white dark:hover:bg-black-700 active:bg-orange-300"
              >
                <!-- Icon Dollar -->
                <CurrencyDollarIcon class="h-6 w-6 text-orange-400 mr-1" />
                <!-- End Icon Product -->
                Costos Fijos
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link
            to="inventory"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon Cube -->
            <CubeIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon Cube -->
            <span class="flex-1 ml-3 whitespace-nowrap">Inventario</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="orders"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon ListBullet -->
            <ListBulletIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon ListBullet -->
            <span class="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="payments"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon Payment -->
            <ReceiptPercentIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon Payment -->
            <span class="flex-1 ml-3 whitespace-nowrap">Pagos</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="users"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon UserGroups -->
            <UserGroupIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon UserGroups -->
            <span class="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="ratings"
            class="flex items-center p-2 text-black-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700 active:bg-orange-300"
          >
            <!-- Icon Star -->
            <StarIcon class="h-6 w-6 text-orange-400" />
            <!-- End Icon Star -->
            <span class="flex-1 ml-3 whitespace-nowrap">Calificaciones</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
//Icons
import { HomeIcon } from '@heroicons/vue/24/outline'
import { WalletIcon } from '@heroicons/vue/24/outline'
import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
import { CurrencyDollarIcon } from '@heroicons/vue/24/outline'
import { CubeIcon } from '@heroicons/vue/24/outline'
import { ListBulletIcon } from '@heroicons/vue/24/outline'
import { ReceiptPercentIcon } from '@heroicons/vue/24/outline'
import { UserGroupIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>
