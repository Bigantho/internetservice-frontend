<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, watch } from 'vue'
const drawer = ref(true)
// group: null,

const rail = ref(true)
const menuUserOptions = ref([
  ['Crear usuario', 'mdi-account-multiple-outline', 'userCreate'],
  ['Settings', 'mdi-cog-outline'],
])
const menuPaymentOptions = ref([
  ['Cobros', 'mdi-account-cash-outline', 'paymentTotal'],
  ['Cobros pendientes', 'mdi-cash-clock','paymentPending'],
  ['Realizar Cobro', 'mdi-cash-plus','paymentCreate'],
])

const menuPlanOptions = ref([
  ['Crear plan', 'mdi-package-variant-plus','planCreate'],
  ['Planes', 'mdi-file-outline']
])

const menuCompanyOptions = ref([
  ['Crear compañia', 'mdi-office-building-plus-outline','companyCreate'],
  ['Planes', 'mdi-file-outline']
])

const open = ref(['Users'])

</script>

<template>
  <v-app>
    <!-- <v-app-bar app> -->
    <!-- <v-card> -->
    <v-app-bar color="#beface" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="rail = !rail"></v-app-bar-nav-icon>

      <v-toolbar-title>Internet Service</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template> -->
      <label for="">Anthony Vasquez</label>
      <v-btn icon="mdi-account-circle" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" permanent
      :rail="rail">

      <v-list v-model:opened="open">
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>


        <v-list-group value="Users">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Usuarios"></v-list-item>
          </template>
          <v-list-item v-for="([title, icon, component], i) in menuUserOptions" :key="i" :prepend-icon="icon" :title="title"
            :value="title" @click="$router.push({name: `${component}`})"></v-list-item>
        </v-list-group>

        <v-list-group value="Payments">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-currency-usd" title="Pagos"></v-list-item>
          </template>
          <v-list-item v-for="([title, icon, component], i) in menuPaymentOptions" :key="i" :prepend-icon="icon" :title="title"
            :value="title" @click="$router.push({name: `${component}`})"></v-list-item>
        </v-list-group>

        <v-list-group value="Companies">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-office-building" title="Compañias"></v-list-item>
          </template>
          <v-list-item v-for="([title, icon, component], i) in menuCompanyOptions" :key="i" :prepend-icon="icon" :title="title"
            :value="title" @click="$router.push({name: `${component}`})"></v-list-item>
        </v-list-group>
        <v-list-group value="Plans">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-package-variant" title="Planes"></v-list-item>
          </template>
          <v-list-item v-for="([title, icon, component], i) in menuPlanOptions" :key="i" :prepend-icon="icon" :title="title"
            :value="title" @click="$router.push({name: `${component}`})"></v-list-item>
        </v-list-group>
      </v-list>




    </v-navigation-drawer>

    <v-main>
      <RouterView />


    </v-main>

    <v-footer app>
      <span>&copy; 2024 My App</span>
    </v-footer>
    <!-- </v-card> -->

    <!-- <v-toolbar-title>Internet Service</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push({ name: 'companyCreate' })">Crear Compañia</v-btn>
      <v-btn text @click="$router.push({ name: 'paymentCreate' })">Realizar Cobro</v-btn>
      <v-btn text @click="$router.push({ name: 'paymentPending' })">Cobros Pendiente</v-btn>
      <v-btn text @click="$router.push({ name: 'paymentTotal' })">Cobros</v-btn>
      <v-btn text @click="$router.push({ name: 'planCreate' })">Crear Plan</v-btn>
      <v-btn text @click="$router.push({ name: 'userCreate' })">Crear Usuario</v-btn>
       -->
    <!-- </v-app-bar> -->

    <!-- <v-main>
      <RouterView />
    </v-main> -->

    <!-- <v-footer app>
      <span>&copy; 2024 My App</span>
    </v-footer> -->
  </v-app>

</template>





<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
