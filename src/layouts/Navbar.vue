<template>
  <nav class="fixed top-0 z-50 w-full bg-orange-500 dark:bg-black-800">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-black-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-black-400 dark:hover:bg-black-700 dark:focus:ring-black-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <img
            src="../assets/images/logo-talachApp.png"
            class="h-12 w-48 flex ml-4 md:mr-20"
            alt="TalachApp Logo"
          />
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-black-800 rounded-full focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none px-2 bg-orange-100 divide-y divide-black-500 rounded shadow dark:bg-black-700 dark:divide-black-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-black-900 dark:text-white" role="none">
                  {{ nameProfile }}
                </p>
                <p
                  class="text-sm font-medium text-black-900 truncate dark:text-black-300"
                  role="none"
                >
                  {{ roleProfile }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black-700 hover:bg-black-100 dark:text-black-300 dark:hover:bg-black-600 dark:hover:text-white active:bg-orange-300"
                    role="menuitem"
                    >Perfil</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black-700 hover:bg-black-100 dark:text-black-300 dark:hover:bg-black-600 dark:hover:text-white active:bg-orange-300"
                    role="menuitem"
                    >Cerrar Sesión</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  nameProfile: {
    type: String,
    default: 'Jhon Doe'
  },
  roleProfile: {
    type: String,
    default: 'Administrador'
  }
})
</script>
