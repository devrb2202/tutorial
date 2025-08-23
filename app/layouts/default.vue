<template>
    <v-app>
      <v-app-bar id="ratbu">
            <v-btn text="Home" to="/" variant="plain" :ripple="false"/>
            <v-btn text="Vue" to="#vuejs" variant="plain" :ripple="false"/>
            <v-btn text="TypeScript" to="#typescript" variant="plain" :ripple="false"/>
            <v-btn text="Features" to="#features" variant="plain" :ripple="false"/>
            <v-btn text="Python"/>
            <v-btn text="React"/>
      </v-app-bar>
        <v-main class="pa-0" id="ratbu">
             <v-container class="pa-0" fluid> 
                <v-row  class="justify-center">
                    <v-col cols="2" class="h-screen">
                        <!-- <div class="d-flex justify-start align-center mb-3">
                            <v-icon size="60">mdi-cart</v-icon>
                            <p class="text-h4">BApp</p>
                        </div> -->
                        <v-sheet
                            class="overflow-auto h-80"
                        >
                            <v-list :items="items" />
                        </v-sheet>
                         <v-divider></v-divider>
                        <div class="d-flex justify-center align-center mt-5">
                            <p class="text-caption">Developed by <span class="font-weight-bold">Developer Name</span></p>
                        </div>
                          
                    </v-col>
                    <v-col cols="5" class="h-screen overflow-auto">
                        <slot />
                        <!-- <SourceCode v-for="x in 20"/> -->
                    </v-col>
                    <v-col cols="2" class="h-screen overflow-auto">
                         <div class="d-flex justify-start align-center mb-3">
                            <v-icon size="32">mdi-format-float-right</v-icon>
                            <p class="text-h5">Contents</p>
                        </div>
                        <v-sheet
                            class=" h-80"
                        >   
                            
                              <v-btn variant="plain" to="#" text="home"></v-btn>
                              <v-btn variant="plain" to="#typescript" text="typescript"></v-btn>
                              <v-btn variant="plain" to="#vuejs" text="vue js"></v-btn>
                              <v-btn variant="plain" to="#features" text="features"></v-btn>
                              <v-btn variant="plain" to="#typescript" text="typescript"></v-btn>
                           
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>

.h-80{
    height: 85%;
}
</style>

<script setup>
  const items = ref([
    {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
     {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
  ])

  const content = ref([
    {href: '/', title: 'code'},
    {href: '#vuejs', title: 'Vue Js Basics'},
    {href: '#typescript', title: 'Vue Js Basics'},
    {href: '#vuejs', title: 'Vue Js Basics'},
    {href: '#vuejs', title: 'Vue Js Basics'},
    {href: '#vuejs', title: 'Vue Js Basics'},
    { title: 'Features', href: '/#features', },
  ])




</script>