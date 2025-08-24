<template>
  <v-app id="inspire" class="">
    <v-navigation-drawer v-model="drawer" width="350" class="">
        <NavigationLeft />
    </v-navigation-drawer>

    <v-app-bar :class="theme.global.current.value.dark ? 'border-bottom':'none'">
      <v-app-bar-nav-icon 
        @click="drawer = !drawer" 
        icon="mdi-format-align-left" 
      />

      <!-- Only visible on desktop view-->
      <v-app-bar-title>
         <v-breadcrumbs :items="breadcrumbs" class="d-none d-sm-flex">
            <template v-slot:title="{ item }">
              <p class="text-capitalize text-subtitle-2 opacity-80 text-truncate">{{ item.title }}</p>
            </template>
          </v-breadcrumbs>
      </v-app-bar-title>

      <v-btn
          @click="toggleTheme"
          :icon="theme.global.current.value.dark ? 'mdi-lightbulb-on-10': 'mdi-weather-night'"
          class="bg-pink-accent-3 mr-2"
          size="small"
      />

      <!-- For mobile view -->
      <v-app-bar-nav-icon 
        v-if="hitRoute"
        class="d-flex d-sm-none"
        @click="mobileDrawer = !mobileDrawer" 
        icon="mdi-format-align-right"
      />
     
    </v-app-bar>

    <v-main class="">
      <v-container fluid>
          <v-row class="justify-start">

              <v-col cols="12" sm="10">
                <slot />
              </v-col>
          
              <v-col cols="2">
                 <v-navigation-drawer v-model="mobileDrawer" width="250" location="right" v-if="hitRoute">
                   <NavigationPageToc />
                 </v-navigation-drawer>
              </v-col>
              <!-- Navigation -->
            <v-col cols="12" sm="10">
              <div class="d-flex justify-space-between">
                <v-card 
                  elevation="0" 
                  :class="`d-flex align-center 
                  justify-center pa-2 justify-space-between
                  ${theme.global.current.value.dark ? 'card-button-border-1': 'card-button-border-2'}`" 
                  width="150"
                  v-if="prevPage" :to="prevPage.href"
                >
                  <v-icon size="40">mdi-chevron-left</v-icon>
                  <div>
                    <p class="text-capitalize text-caption opacity-60">
                      previous page
                    </p>
                    <p class="text-capitalize text-sm-subtitle-2 text-caption">
                      
                      {{ prevPage.title }}
                    </p>
                  </div>
                 
                </v-card>

                 <v-card 
                    elevation="0" 
                    :class="`d-flex align-center
                     justify-center pa-2 justify-space-between
                     ${theme.global.current.value.dark ? 'card-button-border-1':'card-button-border-2'}`" 
                    width="150"
                    v-if="nextPage" :to="nextPage.href"
                  >
                    <div>
                        <p class="text-capitalize text-caption opacity-60">
                          next page
                        </p>
                        <p class="text-capitalize text-sm-subtitle-2 text-caption">
                            {{ nextPage.title }}
                        </p>
                    </div>
                
                  <v-icon size="40">mdi-chevron-right</v-icon>
                </v-card>
                <!-- <v-btn v-if="prevPage" :to="prevPage.href" variant="plain" prepend-icon="mdi-chevron-left" class="justify-start text-capitalize" size="large">
                  {{ prevPage.title }}
                </v-btn>
            
                <v-btn v-if="nextPage" :to="nextPage.href" variant="plain" append-icon="mdi-chevron-right" class="text-capitalize" size="large">
                  {{ nextPage.title }}
                </v-btn> -->
              </div>
            
            </v-col>

          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/composables/theme.mjs'


const drawer = ref(null)
const mobileDrawer = ref(null)


const theme = useTheme()

// itago si pageToc kapag nasa path ng / or nasa indexpage
// dynamic kahit ilang beses na cycle 
const hitRoute = computed(() => route.path !== '/')

// hindi sya recommended gamitin kasi for static lang ito gagana
// function indexPath() {
//     if(route.path !== '/'){
//       hitRoute.value = true
//     }
//     
   
// }

// onMounted(() => {
//   indexPath()
// })

function toggleTheme(){
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
 
}


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

// Hanapin si current index
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

<style scoped>

.border-bottom {
  border-bottom: 2px solid #F50057;
  transition: border-bottom 2.4s ease, color 0.4s ease;
}
html, body, #__nuxt, .v-application {
  transition: background-color 0.4s ease, color 0.4s ease;
}

.card-button-border-1 {
  border: 1px solid #F50057;
  transition: border 0.4s ease, color 0.4s ease;
}

.card-button-border-2 {
  border: 1px solid #1565C0;
  transition: border 0.4s ease, color 0.4s ease;
}
</style>

