<!-- components/PageToc.vue -->
<template>
  <v-sheet v-if="sections.length" class="pa-3">
      <!-- highlight active -->
    <div class="d-flex mt-5 mb-5 align-center">
        <v-icon size="24">mdi-format-align-right</v-icon>
        <p class="text-h6 opacity-80 text-uppercase">Contents</p>
    </div>
    <v-btn
        v-for="s in sections"
        :key="s.hash"
        variant="plain"
        :ripple="false"
        :to="route.path + s.hash"
        :color="active === s.hash ? 'primary' : undefined"  
        class="justify-start text-capitalize"

        >
        {{ s.label }}
    </v-btn>
          
  </v-sheet>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useToc } from '~/composables/useToc'

const route = useRoute()
const { toc, active } = useToc()

const sections = computed(() => toc[route.path] || [])




</script>