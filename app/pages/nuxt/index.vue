<template>
    <v-container fluid>
        <p class="text-h5 opacity-60">Errors and Solutions</p>
      
         <SourceCodeContainer 
            v-for="(x, index) in content"
            :key="index"
            :id="x.id"
            :routeTitle="x.routeTitle"
            :title="x.title"
            :details="x.details"
            :sampleCode="x.code"
            language="javascript"
        />
    </v-container>
</template>

<script setup>


const content = ref([
    {   
        id: 'route',
        routeTitle: 'Managing Route',
        title: 'app/router.options.ts',
        details:`Gusto ko ihide yung mismong right side nav kapag tumugma sa / route o sa root kaya lang may error
        kasi sa unang beses lang sya gagana pero kapag nag back ka lilitaw sya ulit. Yung pinaka error pala ay dahil
        naka static sya kumbaga isang beses lang sya mag loload sa isang loop`,
        code: `
       
        //hindi sya recommended gamitin kasi for static lang ito gagana
        <script setup>
        const hitRoute = ref(false)
        function indexPath() {
            if(route.path !== '/'){
              hitRoute.value = true
            }
        }

        onMounted(() => {
          indexPath()
        })
        <\/script>  `
        
    },
    {
        id: 'route',
        routeTitle:'',
        title: '~/pages/index.vue',
        details: `Ito yung solution para sa issue na yon yung static ay ginawang dynamic 
        gamit yung computed() na method ng vue/nuxt. At kung mapapansin mo merong pageToc na nakalagay yan
        ay isa sa mga composables na ginawa ko para sa pag handle ng mga page route dynamically`,
        code: `
        <script setup>
        // itago si pageToc kapag nasa path ng / or nasa indexpage
        // dynamic kahit ilang beses na cycle 
        const hitRoute = computed(() => route.path !== '/')
        
        <\/script>
        `
    },
    {
        id: 'route',
        title: '~/composables/useToc.vue',
        details: `logical composable para sa pag handle ng route dynamically meron ding mga added na extra
        feature pero di ko napansin na gumagana bale aalisin nalang yan soon`,
        code: `
        // composables/useToc.ts
        import { ref, onMounted, onUnmounted } from 'vue'

        export const useToc = () => {
        const toc = {
            '/nuxt': [
            { label: 'Managing Route', hash: '#route' },
            { label: 'Nuxt scroll', hash: '#nuxt-scroll' },
            { label: 'Navigation bottom', hash: '#navigation' }
            ],
            '/nuxt/introduction': [
            { label: 'What is Vue JS?', hash: '#sample01' },
            { label: 'Why it’s needed?', hash: '#sample02' },
            { label: 'What is an advantage?', hash: '#sample03' }
            ],
            '/nuxt/create-page': [
            { label: 'Creating First Page', hash: '#create01' },
            { label: 'Nested Pages', hash: '#create02' }
            ]
        }

        const active = ref<string | null>(null)

        const setActiveSection = () => {
            const sections = document.querySelectorAll<HTMLElement>('[id]')
            let current: string | null = null

            for (const el of sections) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120) { // 120px offset para di agad mag-trigger
                current = \`#\${el.id}\`
                }
            }

            active.value = current
        }

        onMounted(() => {
            window.addEventListener('scroll', setActiveSection)
            setActiveSection()
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', setActiveSection)
        })

        return { toc, active }
        }

        `
    },
    {
        id: 'route',
        title: '~/components/Navigation/PageToc.vue',
        details:`Ito naman yung pinaka child component ng pageToc ginawa ko syang Reusable Components 
        para mas mapabilis ang paggawa ng mga UI components, Compare sa pag manual bawat page bukod sa tipid sa oras
        mas readable at madali pang i-maintain`,
        code:`
        <!-- components/PageToc.vue -->
        <template>
        <v-sheet v-if="sections.length" class="pa-3">
            <!-- highlight active -->
            <div class="d-flex mt-5 mb-5 align-center">
                <v-icon size="24">mdi-sort-variant</v-icon>
                <p class="text-h6 opacity-80 text-uppercase">Contents</p>
            </div>
            <v-btn
                class="justify-start text-capitalize"
                variant="plain"
                v-for="s in sections"
                :key="s.hash"
                :ripple="false"
                :to="route.path + s.hash"
                :color="active === s.hash ? 'primary' : undefined"  
                :text="s.label"
            />
                
        </v-sheet>
        </template>


        <script setup>
        import { useRoute } from 'vue-router'
        import { useToc } from '~/composables/useToc'

        const route = useRoute()
        const { toc, active } = useToc()

        const sections = computed(() => toc[route.path] || [])



        <\/script>
        
        `
    },

    {   
        id: 'nuxt-scroll',
        routeTitle: 'Nuxt Scroll',
        title: 'app/router.options.ts',
        details: `Use for mouse scrolling`,
        code: ` 
        import type { RouterScrollBehavior } from 'vue-router'

        const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
        }

        if (to.hash) {
            const el = document.querySelector(to.hash)
                if (el) {
                // taas ng AppBar/Navbar
                const topOffset = 80 
                const elementPosition = el.getBoundingClientRect().top + window.scrollY
                return {
                    left: 0,
                    top: elementPosition - topOffset,
                    behavior: 'smooth'
                }
            }
        }

        return { left: 0, top: 0 }

        }

        export default {
            scrollBehavior
        }`
    },
    {
        id: 'navigation',
        routeTitle: 'Bottom Navigation Prev & Next Page',
        title: 'navigation.vue',
        details:`Ito yung ginawa kong solution para doon sa bottom navigation meron kasi akong nilagay
        na route navigation para sa previous at next page, ngayon ang naging problema nung una ay manual kong
        nilalagay ang dalawang button sa bawat page na nag cause ng pag haba ng code at hindi sya magandang option,
        kaya gumawa ako ng isang dynamic navigation na mas logical gamit ang route function, kaya lang medyo technical sya 
        mahirap intindihin kaya dapat kasama sa naka take note compare sa manual na inilalagay sa bawat pages
        `,
        code: `
        <template>
            <v-btn 
                v-if="prevPage" 
                :to="prevPage.href" 
                variant="plain" 
                prepend-icon="mdi-chevron-left" 
                class="justify-start text-capitalize" 
                size="large"
                :text="prevPage.title"
            />
            
            <v-btn 
                v-if="nextPage" 
                :to="nextPage.href" 
                variant="plain" 
                append-icon="mdi-chevron-right" 
                class="text-capitalize" 
                size="large"
                :text="nextPage.title"
            />
              
        </template>
        `
    },
    {
        title: '~/components/Navigation/Bottom.vue',
        details:`Ito yung pinalit sa button inimprove lang yung design gagawin nalang din isa sa mga reusable component`,
        code:`
        <div class="d-flex justify-space-between">
            <v-card 
                elevation="0" 
                :class="\`d-flex align-center 
                justify-center pa-2 justify-space-between
                \${theme.global.current.value.dark ? 'card-button-border-1': 'card-button-border-2'}\`" 
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
                :class="\`d-flex align-center
                justify-center pa-2 justify-space-between
                \${theme.global.current.value.dark ? 'card-button-border-1':'card-button-border-2'}\`" 
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
        </div>`
        
        
    },
    {
        id: 'navigation',
        title: '~/layouts/main.vue',
        details:`Ito yung function na ginawa ko para sa dynamic bottom navigation`,
        code: `
        <script setup>
        const prevPage = computed(() =>
        currentIndex.value > 0 ? pageOrder[currentIndex.value - 1] : null
        )
        const nextPage = computed(() =>
        currentIndex.value < pageOrder.length - 1
            ? pageOrder[currentIndex.value + 1]
            : null
        )
        <\/script>
        `
    },

    {
        id: 'theme',
        routeTitle: 'Customize theme with Local Storage setup',
        title: '~/composables/useThemes.ts',
        details: `🌙 Bakit kailangan isave ang theme?
        User Experience (UX):
        Kapag nag set ng theme ang user (halimbawa nag dark mode), ayaw nila na mawala kapag nag refresh sila o lumipat ng page.

        Consistency:
        Without saving, babalik lagi sa default (light/dark) every refresh. Ang localStorage ang nagsisigurado na persistent ang choice ng user.

        Performance:
        Hindi na kailangan ulit mag detect o mag compute sa bawat page load — diretsong babasahin lang ang naka-save na value.

        Personalization:
        Pinaparamdam nito sa user na ang site ay nakakabase sa kanilang preference, hindi lang sa default settings.
        
        `,
        code: `
        // /composables/useTheme.ts
        // import { useVuetify } from 'vuetify'

        import { useTheme } from "vuetify"

        export const useThemes = () => {
        const theme = useTheme()

        // Load from localStorage on mounted
        onMounted(() => {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
            theme.global.name.value = savedTheme
            }
        })

        function toggleTheme() {
            theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            localStorage.setItem('theme', theme.global.name.value)
        }

        return { theme, toggleTheme }
        }
        `
    },
    {
        id: 'theme',
        title: '~/pages/index.vue',
        code:`
        <script setup lang="ts">
        const { theme, toggleTheme } = useTheme()
        <\/script>

        <template>
            <v-btn @click="toggleTheme">
                Switch to {{ theme.global.name.value === 'dark' ? 'light' : 'dark' }}
            </v-btn>
        </template>

        `
    },
    {
        id: 'escape',
        routeTitle: 'Usage of Escape Characters',
        title: 'Escape',
        details: `
        Context at Benefits ng Paggamit ng Escape Character
        Ano ang Escape Character?
        Ang escape character ay isang special character na nagpapahiwatig na ang kasunod na character ay dapat bigyan ng ibang interpretation kaysa sa karaniwang meaning nito.
        Sa JavaScript, ang backslash  ang karaniwang escape character.
        `,
        code: `
        // Single quote sa loob ng single quotes
        const message = 'It\\'s a beautiful day';

        // Double quotes sa loob ng double quotes
        const quote = "He said, \\"Hello World!\\"";
        
        `

    }
])



definePageMeta({
    layout: 'main'
})

</script>