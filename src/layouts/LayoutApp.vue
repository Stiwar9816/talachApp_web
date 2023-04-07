<template>
  <!-- Navbar -->
  <navbar>
    <slot name="navbar"></slot>
  </navbar>
  <!-- Navbar -->

  <!-- Aside Menu -->
  <aside>
    <slot name="asideMenu"></slot>
  </aside>
  <!-- Aside Menu -->
  
  <!-- Children -->
  <main>
    <slot> </slot>
  </main>
  <!-- Children -->

  <!-- Footer -->
  <footer>
    <slot name="footer"></slot>
  </footer>
  <!-- Footer -->
</template>
