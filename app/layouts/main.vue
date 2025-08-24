<template>
  <v-app id="inspire" class="">
    <v-navigation-drawer v-model="drawer" width="350" class="">
        <NavigationLeft />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon 
        @click="drawer = !drawer" 
        icon="mdi-format-align-left" 
      />

      <v-app-bar-title>
         <v-breadcrumbs :items="breadcrumbs" class="d-none d-sm-flex">
            <template v-slot:title="{ item }">
              <p class="text-capitalize text-subtitle-2 opacity-80 text-truncate">{{ item.title }}</p>
            </template>
          </v-breadcrumbs>
      </v-app-bar-title>

      <!-- For mobile view -->
      <v-app-bar-nav-icon 
        class="d-flex d-sm-none"
        @click="mobileDrawer = !mobileDrawer" 
        icon="mdi-format-align-right"
      />
     
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container fluid>
          <v-row class="justify-start">
              <v-col cols="12" sm="10">
                <slot />
              </v-col>
              <!-- <v-navigation-drawer  width="250" location="right">
                <NavigationPageToc />
              </v-navigation-drawer> -->
              <!-- for mobile -->
              <v-col cols="2">
                 <v-navigation-drawer v-model="mobileDrawer" width="250" location="right">
                   <NavigationPageToc />
                 </v-navigation-drawer>
               
              </v-col>
            <v-col cols="10" sm="8" class="d-flex justify-space-between">
                <v-btn v-if="prevPage" :to="prevPage.href" variant="plain" prepend-icon="mdi-chevron-left" class="justify-start text-capitalize" size="large">
                  {{ prevPage.title }}
                </v-btn>
            
                <v-btn v-if="nextPage" :to="nextPage.href" variant="tonal" append-icon="mdi-chevron-right" class="text-capitalize" size="large">
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
const mobileDrawer = ref(null)

const pageOrder = [
  { title: 'Home', href: '/' },
  { title: 'Nuxt', href: '/nuxt' },
  { title: 'Introduction', href: '/nuxt/introduction'},
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
// const currentIndex = computed(() =>
//   pageOrder.findIndex(p => p.href === route.path)
// )
const currentIndex = computed(() => {
  // kunin lang yung path part (walang hash)
  const cleanPath = route.path
  return pageOrder.findIndex(p => p.href === cleanPath)
})


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


