<template>
  <v-app id="inspire" class="">
    <v-navigation-drawer v-model="drawer" width="400" class="bg-grey-darken-4">
        <NavigationLeft />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
 
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-row>
         <v-col cols="10">
          <slot />
        </v-col>
      </v-row>
     
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)



</script>
