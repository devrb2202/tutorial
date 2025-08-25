<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="11" sm="8">
        <p class="text-h4 opacity-80 text-center">
          "A Personal Developer’s Handbook – Errors, Solutions, and Lessons Learned"
        </p>
        <p class="text-subtitle-1 text-center mt-5">
          This project is my personal learning documentation a growing collection of notes, errors I’ve encountered, and the solutions that worked. Instead of just following the happy path from tutorials, this handbook also highlights the common pitfalls, real-world debugging, and code snippets that solved them.
        </p>
        <p class="text-subtitle-1 text-center mt-5">
          Whether you’re starting with Nuxt, Vue, Supabase, or exploring networking concepts, you’ll find practical examples, tested fixes, and a roadmap of what I’ve learned so far. What began as my own study guide is now being shaped into a resource that others can use to learn, avoid the same mistakes, and grow as developers.
        </p>
        <p class="text-h4 opacity-80 text-center mt-10">Tutorials</p>
        <div class="mt-5">
         
          <v-row class="justify-center">
            <TutorialsCard 
                v-for="(x, index) in card"
                :key="index"
                :source="x.img"
                :title="x.title"
                :toRouter="x.to"
            
            />
           
          </v-row>
        
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>


.v-card{
  /* transition: all 0.3s ease; */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: none; /* no elevation */
}
.v-card:hover {
  /* transform: scale(1.05);  
  box-shadow: 0 8px 20px rgba(0,0,0,0.3); 
  transform: rotate(15deg) scale(1.03); */
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25); /* custom elevation effect */

}


</style>

<script setup>
import { TutorialsCard } from '#components';



const card = ref([
  { 
    title: 'Nuxt Js FullStack',
    img: "https://imgs.search.brave.com/HLAR-gSKMR1kp4Q9l7KRtBTfiO0c6QmD1IWj-iWbLqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMyLzEvbnV4dC1s/b2dvLXBuZ19zZWVr/bG9nby0zMjgyMDQu/cG5n",
    to: '/nuxt'
  },
  { 
    title: 'Supabase',
    img: "https://imgs.search.brave.com/sbXQml0aQN0masqredkBerWgJYx-asvaSHifWmzOn-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRo/anMuZGV2L2ltZy9h/ZGFwdGVycy9zdXBh/YmFzZS5zdmc",
    to: '/supabase'
  },
  { 
    title: 'Networking',
    img: "https://imgs.search.brave.com/l_tCJljjZVVEg6DROP_L0rp-EykCsPbslUyHCXv0SJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMvMS9jaXNjby1s/b2dvLXBuZ19zZWVr/bG9nby0zMDY3NC5w/bmc",
    to: '/networking'
  },
  { 
    title: 'Windows Server',
    img: "https://imgs.search.brave.com/AcErv7F_FwEpGy7Fga9-PGCxD9RepjzFTax5Krxz9p8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RFJRdW1lYWRoZ1lB/QUFBbS93aW5kb3dz/MTAtd2luZG93cy53/ZWJw",
    to: '/windows'
  },

])


definePageMeta({
  layout: 'main'
})
</script>