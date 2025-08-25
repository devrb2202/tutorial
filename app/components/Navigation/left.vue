<template>
  <v-container class="">
     <div class="d-flex justify-start align-center mb-2" >
        <v-icon size="100">mdi-microsoft-visual-studio-code</v-icon>
        <div>
           <p class="text-h6 opacity-80 font-weight-bold text-uppercase">I.T Engineer’s Handbook</p>
           <!-- ${theme.global.current.value.dark ? 'text-pink': 'none'} -->
        </div>
      </div>
      <v-divider></v-divider>
      <div class="mt-2">
        <div class="d-flex mt-5 mb-5 align-center">
          <v-icon>mdi-nuxt</v-icon>
           <p class="text-h6 opacity-80 text-uppercase ml-1">Nuxt FullStack</p>
        </div>
        <v-btn 
          variant="text" 
          :ripple="false" 
          v-for="(menu, index) in nuxtMenu" 
          :key="index" 
          block
          class="text-font-600 justify-start opacity-80"
          :text="menu.title"
          :to="menu.to"
        />
      </div>

      <div class="">
        <div class="d-flex mt-5 mb-5 align-center">
          <v-icon>mdi-database</v-icon>
           <p class="text-h6 opacity-80 text-uppercase ml-1">Supabase</p>
        </div>
          <v-btn 
            variant="text" 
            :ripple="false" 
            v-for="(menu, index) in supabaseMenu" 
            :key="index" 
            block
            class="text-font-600 justify-start opacity-80"
            :text="menu.title"
            :to="menu.to"
          />
      </div>

      <div class="">
        <div class="d-flex mt-5 mb-5 align-center">
          <v-icon>mdi-lan</v-icon>
           <p class="text-h6 opacity-80 text-uppercase ml-1">Networking</p>
        </div>
          <v-btn 
            variant="text" 
            :ripple="false" 
            v-for="(menu, index) in networkingMenu" 
            :key="index" 
            block
            class="text-font-600 justify-start opacity-80"
            :text="menu.title"
          />
      </div>
      
      <div class="">
        <div class="d-flex mt-5 mb-5 align-center">
          <v-icon>mdi-microsoft-windows</v-icon>
          <p class="text-h6 opacity-80 text-uppercase ml-1">Windows Server</p>
        </div>
        
          <v-btn 
            variant="text" 
            :ripple="false" 
            v-for="(menu, index) in windowsMenu" 
            :key="index" 
            block
            class="text-font-600 justify-start opacity-80"
            :text="menu.title"
          />
      </div>
      <v-divider></v-divider>
       <div class="pt-10 pb-5">
          <p class="text-h4 text-block font-weight-bold"></p>
          <p class="text-caption">Developed by Ramil Bercasio</p>
          <span class="text-body-2">
              &copy; {{ new Date().getFullYear() }} Open Source Project. All rights reserved.
          </span>
          <!-- <v-btn 
            text="github"
            prepend-icon="mdi-github"
            variant="outlined"
            size="small"
            color="green"
          />
          <v-btn 
            text="facebook"
            prepend-icon="mdi-facebook"
            variant="outlined"
            size="small"
            color="blue"
          />
           <v-btn 
            text="linkedin"
            prepend-icon="mdi-linkedin"
            variant="outlined"
            size="small"
            color="pink"
          /> -->


       </div>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify/lib/composables/theme.mjs'


const theme = useTheme()


const nuxtMenu = ref([
  { title: 'Introduction to Nuxt', to: '/nuxt/introduction'},
  { title: 'Creating Pages', to: '/nuxt/create-page'},
  { title: 'Reusable components', to: '/nuxt/components'},
  { title: 'Creating layouts(shared UI)', to: '/nuxt/layouts'},
  { title: 'State Management', to: '/nuxt/state-management'},
  { title: 'Middleware', to: '/nuxt/middleware'},
  { title: 'Data Fetching', to: '/nuxt/data-fetching'},
  { title: 'Composables', to: '/nuxt/composables'},
  { title: 'Deployment(Frontend)', to: '/nuxt/deployment'},
  { title: 'Nuxt Server Side Basics', to: '/nuxt/server-side'}

])

const supabaseMenu = ref([
  { title: 'Introduction to Supabase', to: '/supabase/introduction'},
  { title: 'Project Setup', to: '/supabase/project-setup'},
  { title: 'Creating Client', to: '/supabase/creating-client'},
  { title: 'Database Operation(CRUD)', to: '/supabase/database-operation'},
  { title: 'Realtime Subscription', to: '/supabase/realtime-subscription'},
  { title: 'Storage for File Uploads', to: '/supabase/storage-for-file-uploads'},
  { title: 'Edge Function(Serverless function)', to: '/supabase/edge-function'},
  { title: 'Example Project with Supabase', to: '/supabase/example-project'}

])

const networkingMenu = ref([
  { title: 'Introduction to Networking', to: '/home'},
  { title: 'OSI Layers', to: '/nuxt/pages'},
  { title: 'Transport Layer', to: '/nuxt/components'},
  { title: 'Physical Layer', to: '/'},
  { title: 'L2 and L3 Encapsulations', to: '/'},
  { title: 'Subnetting Conversions', to: '/'},
  { title: 'IPv4 Address Structure', to: '/'},
  { title: 'Subnetting by Network Requirement', to: '/'},
  { title: 'Subnetting by Host Requirement', to: '/'},
  { title: 'Variable Length Subnet Mask(VLSM)', to: '/'},
  { title: 'Reverse Subnetting', to: '/'},
  { title: 'Supernetting', to: '/'},
  { title: 'Wildcard Mask', to: '/'},

])

const windowsMenu = ref([
  { title: 'Introduction to Windows Server', to: '/home'},
  { title: 'Basic Setup Essentials', to: '/nuxt/pages'},
  { title: 'Active Directory(AD)', to: '/nuxt/components'},
  { title: 'Group Policy(GPO)', to: '/'},
  { title: 'DNS & DHCP Essentials', to: '/'},
  { title: 'File Server Essentials', to: '/'},
  { title: 'Maintenance Essentials', to: '/'},
  { title: 'Useful Powershell Command', to: '/'}

])

</script>


<style scoped>

.w-99 {
  width: 96%;
}
.p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 44px;
}

.text-font-600 {
  font-weight: 600;
  text-transform: capitalize;
  font-family: Arial, Helvetica, sans-serif;
}

.text-custom-1 {
  padding: .6rem 0;
  font-size: 1.1875em;
  font-weight: 300;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.v-btn:hover {
  color: #DD2C00;
  
}

.inline {
  display: inline;
}

.text-pink {
  color: #F50057;
  transition: border-bottom 5.4s ease, color 2.4s ease;
}


</style>