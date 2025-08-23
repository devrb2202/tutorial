<template>
  <v-app id="inspire" class="">
    <v-navigation-drawer v-model="drawer" width="400" class="bg-grey-darken-4">
        <NavigationLeft />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
         <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:title="{ item }">
              <p class="text-capitalize opacity-80">{{ item.title }}</p>
            </template>
          </v-breadcrumbs>

      </v-app-bar-title>
 
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">

       <slot />
      <v-container fluid>
          <v-row class="justify-start">
            <v-col cols="10" sm="8" class="d-flex justify-space-between">
                <v-btn v-if="prevPage" :to="prevPage.href" variant="plain" prepend-icon="mdi-chevron-left" class="justify-start text-capitalize" size="x-large">
                  {{ prevPage.title }}
                </v-btn>
            
                <v-btn v-if="nextPage" :to="nextPage.href" variant="tonal" append-icon="mdi-chevron-right" class="text-capitalize" size="x-large">
                  {{ nextPage.title }}
                </v-btn>
            </v-col>
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)

const pageOrder = [
  { title: 'Home', href: '/' },
  { title: 'Nuxt', href: '/nuxt' },
  { title: 'Introduction', href: '/nuxt/introduction' },
  { title: 'Creating Page', href: '/nuxt/create-page' },
  { title: 'Components', href: '/nuxt/components' },
  { title: 'Layouts', href: '/nuxt/layouts' },
  { title: 'State Management', href: '/nuxt/state-management' },
  { title: 'Data Fetching', href: '/nuxt/data-fetching' },
  { title: 'Composables', href: '/nuxt/composables' },
  { title: 'Deployment', href: '/nuxt/deployment' },
  { title: 'Server Side Basic', href: '/nuxt/server-side' },

  // Supabase
  { title: 'Intro to Supabase', href: '/supabase/introduction' },
  { title: 'Project Setup', href: '/supabase/project-setup' },
  { title: 'Creating Client', href: '/supabase/creating-client' },
  { title: 'Database Operation', href: '/supabase/database-operation' },
  { title: 'Real Time Subscription', href: '/supabase/realtime-subscription' },
  { title: 'Storage for File Uploads', href: '/supabase/storage-for-file-uploads' },
  { title: 'Edge Function', href: '/supabase/edge-function' },
  { title: 'Example Project', href: '/supabase/example-project' },
  
]


const titleMap = {
  nuxt: 'Nuxt',
  intro: 'Intro to Nuxt',
  about: 'About Us',
  team: 'Our Team'
}

const route = useRoute()
const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(Boolean)

  let currentPath = ''
  return [
      { title: 'Home', href: '/', disabled: pathArray.length === 0 },
      ...pathArray.map((segment, index) => {
        currentPath += '/' + segment
        return {
          title: titleMap[segment] || segment,
          href: index === pathArray.length - 1 ? null : currentPath,
          disabled: index === pathArray.length - 1
        }
      })
    ]
})

// Hanapin current index
const currentIndex = computed(() =>
  pageOrder.findIndex(p => p.href === route.path)
)

// Prev & Next
const prevPage = computed(() =>
  currentIndex.value > 0 ? pageOrder[currentIndex.value - 1] : null
)
const nextPage = computed(() =>
  currentIndex.value < pageOrder.length - 1
    ? pageOrder[currentIndex.value + 1]
    : null
)

</script>


