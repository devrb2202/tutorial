<template>
  <v-container class="">
     <div class="d-flex justify-start align-center mb-2" >
        <v-icon size="100">mdi-cast-education</v-icon>
        <div>
           <p class="text-h4 text-block font-weight-bold">Source Nigga</p>
           <p class="text-caption">Developed by Super Nigga</p>
        </div>
       
        <!-- <v-btn 
          prepend-icon="mdi-github" 
          text="github"
          class="text-capitalize ma-2"
          size="small"
          variant="outlined"
        
        />
        <v-btn 
          prepend-icon="mdi-facebook" 
          text="facebook"
          class="text-capitalize ma-2"
          size="small"
          variant="outlined"
        
        />
        <v-btn 
          prepend-icon="mdi-linkedin" 
          text="linkedin"
          class="text-capitalize ma-2"
          size="small"
          variant="outlined"
          
        /> -->
      </div>
      <v-divider></v-divider>
      <div class="mt-2">
        <p class="text-h5">Nuxt Fullstack</p>
      
        <v-btn 
          variant="text" 
          :ripple="false" 
          v-for="(menu, index) in nuxtMenu" 
          :key="index" 
          block
          class="text-font-600 justify-start opacity-80"
          :text="menu.title"
        />
      </div>

      <div class="">
        <p class="text-h5">Supabase</p>
          <v-btn 
            variant="text" 
            :ripple="false" 
            v-for="(menu, index) in supabaseMenu" 
            :key="index" 
            block
            class="text-font-600 justify-start opacity-80"
            :text="menu.title"
          />

      </div>

          
      <div class="">
        <p class="text-h5">Networking</p>
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
        <p class="text-h5">Windows Server</p>
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
  </v-container>
</template>

<script setup>

const nuxtMenu = ref([
  { title: 'Introduction to Nuxt', to: '/home'},
  { title: 'Creating Pages', to: '/nuxt/pages'},
  { title: 'Reusable components', to: '/nuxt/components'},
  { title: 'Creating layouts(shared UI)', to: '/'},
  { title: 'State Management', to: '/'},
  { title: 'Data Fetching', to: '/'},
  { title: 'Composables', to: '/'},
  { title: 'Deployment(Frontend)', to: '/'},
  { title: 'Nuxt Server Side Basics', to: '/'}

])

const supabaseMenu = ref([
  { title: 'Introduction to Supabase', to: '/home'},
  { title: 'Project Setup', to: '/nuxt/pages'},
  { title: 'Creating Client', to: '/nuxt/components'},
  { title: 'Database Operation(CRUD)', to: '/'},
  { title: 'Realtime Subscription', to: '/'},
  { title: 'Storage for File Uploads', to: '/'},
  { title: 'Edge Function(Serverless function)', to: '/'},
  { title: 'Example Project using Nuxt with Supabase', to: '/'}

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
/* 

    padding: .6rem 0;
    color: var(--text-body);
    font-size: 1.1875em;
    font-weight: 300;
    
*/
</style>