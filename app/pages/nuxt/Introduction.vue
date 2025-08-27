<template>
  <p class="text-h5 opacity-80">⚖️ My Own Development Rules</p>
  <v-container fluid 
    v-for="(x, index) in content" 
    :key="index"
    
  >
      <p class="text-subtitle-1">{{ index+1 }}. {{ x.title }}</p>
      <p class="text-subtitle-1">{{ x.rule }}</p>
      <p class="text-subtitle-1">{{ x.hints }}</p>
      <v-card>
        <v-card-text>
          <p class="text-subtitle-1" v-for="(option, optionsIndex) in x.options" :key="optionsIndex">
            {{ optionsIndex+1 }}. {{ option }}
          </p>
        </v-card-text>
      </v-card>
  
  </v-container>
 
</template>

<script setup>


const content = ref([
  { 
   title: 'Reusable Components',
   rule: `🔑 Rule: Gumawa lang ng reusable component kapag paulit-ulit ang UI o logic, at hindi na efficient na kopya-paste.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Gagamitin ko ba ito ng higit sa 2-3 beses sa iba't ibang page?`,
    `Pareho lang ba lagi ang layout/design pero iba-iba ang data?`,
    `Kung baguhin ko ito sa isang lugar, kailangan ko bang baguhin din sa lahat?`,
    `Nagiging mahaba ba yung template dahil sa duplication?`,
    `Mas lilinaw ba ang structure ng project kung hiwalay ko ito?`
   ],
  },
  { 
   title: 'State Management (Pinia/Vuex/Composable)',
   rule: `🔑 Rule: Gumamit ng state management kung may data na kailangan i-share sa maraming component/page.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Kailangan ba ng parehong data sa 2 o higit pang component?`,
    `Mawawala ba ang data kapag nagpalit ng route kung hindi naka-store?`,
    `Frequent ba ang update ng data (ex: user auth, cart, theme)?`,
    `Hindi ba convenient kung sa props at emit lang i-handle?`,
    `Nagiging komplikado ba ang parent-child communication?`
   ],
  },
  { 
   title: 'Define Emits',
   rule: `🔑 Rule: Gumamit ng defineEmits kung child-to-parent communication ang kailangan.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `May event ba na galing sa child (ex: button click) na kailangan i-handle ng parent?`,
    `Ayaw ko bang i-hardcode yung logic sa child para flexible siya?`,
    `Dynamic ba yung action depende kung saan ginamit yung component?`,
    `Kailangan ba ng custom event name para mas descriptive kaysa @click lang?`,
    `Mas magiging reusable ba kung ipapasa na lang event sa parent kaysa gawin lahat sa child?`
   ],
  },
  { 
   title: 'Watchers',
   rule: `🔑 Rule: Gumamit ng watcher kung kailangan mag-react sa pagbabago ng value nang hindi automatic sa template.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `May side-effect ba kapag nagbago ang value (API call, log, timer)?`,
    `Hindi ba sapat ang computed para sa reactive value?`,
    `Kailangan bang bantayan ang nested object/array changes?`,
    `May condition ba na dapat gawin lang kapag nagbago ang data?`,
    `Real-time ba dapat ang reaksyon (ex: search filter habang nagta-type)?`
   ],
  },
  { 
   title: 'Computed',
   rule: `🔑 Rule: Gumamit ng computed kung derived value lang mula sa ibang reactive data.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Nakukuha lang ba ito mula sa ibang reactive values?`,
    `Uulitin ko ba yung logic na ito sa template kung wala ito?`,
    `Hindi ba siya dependent sa async action (kundi dapat methods/watch)?`,
    `Makakabawas ba sa code duplication kung gagawin kong computed?`,
    `Mas readable ba ang template kung i-compute ko na lang muna?`
   ],
  },
  { 
   title: 'onMounted()',
   rule: `🔑 Rule: Gumamit ng onMounted para sa actions na kailangan gawin lang pag-render na ang DOM.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Kailangan ko ba mag-fetch ng data agad pagkabukas ng page?`,
    `May external library ba na kailangang i-initialize after DOM render?`,
    `Dapat ba ng access sa DOM element (refs) bago mag-execute ng logic?`,
    `May side effect ba na hindi dapat tumakbo sa SSR (server-side)?`,
    `Critical ba na gawin ito isang beses lang per mount?`
   ],
  },
  { 
   title: 'Local Storage',
   rule: `🔑 Rule: Gumamit ng Local Storage para sa maliit na data na kailangan tumagal kahit i-refresh ang page.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Data ba ito na hindi sensitive (hindi password/token)?`,
    `Kailangan ba ma-retain kahit i-refresh o i-close browser?`,
    `Hindi ba ito sobrang laki para i-save (prefer DB/API for big data)?`,
    `Kailangan ba ito para sa user preference (theme, language, layout)?`,
    `Hindi ba siya critical sa security (dapat cookies/session ang gamitin kung sensitive)?`
   ],
  },
  { 
   title: 'v-for loop',
   rule: `🔑 Rule: Loop for rendering list/collection.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `May array/object ba na need i-render?`,
    `Pare-pareho ba structure ng UI?`,
    `May unique :key ba?`,
    `Hindi ba sobrang laki ng dataset?`,
    `Need ba nested loop o i-transform muna?`
   ],
  },
  { 
   title: 'Middleware',
   rule: `🔑 Rule: Middleware is for guarding routes, redirecting users, and running checks before entering a page.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Kailangan ko bang i-check kung authenticated ang user bago pumasok sa page?`,
    `May role-based access ba (admin/user/guest)?`,
    `May kailangan bang i-redirect depende sa state (hal. logged in → dashboard, guest → login)?`,
    `Kailangan ba mag-run ng logic bago i-render ang page (not after)?`,
    `Reusable ba ang guard (hal. same auth check sa maraming pages)?`
   ],
  },
  { 
   title: 'Middleware',
   rule: `🔑 Rule: Middleware is for guarding routes, redirecting users, and running checks before entering a page.`,
   hints: `❓ Mga tanong/hints:`,
   options: [
    `Kailangan ko bang i-check kung authenticated ang user bago pumasok sa page?`,
    `May role-based access ba (admin/user/guest)?`,
    `May kailangan bang i-redirect depende sa state (hal. logged in → dashboard, guest → login)?`,
    `Kailangan ba mag-run ng logic bago i-render ang page (not after)?`,
    `Reusable ba ang guard (hal. same auth check sa maraming pages)?`
   ],
  }
])




</script>