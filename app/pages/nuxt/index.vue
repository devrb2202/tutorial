<template>
    <v-container fluid>
        <p>Fixes and Recommendation</p>
      
         <SourceCodeContainer 
            v-for="(x, index) in content"
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
        title: 'app/router.options.ts',
        details:`Bisaya`,
        code: `// itago si pageToc kapag nasa path ng / or nasa indexpage
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
                // })`


    },
    {
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
        title: 'navigation.vue',
        details:'para sa dynamic page navigation',
        code: `
        <v-btn v-if="prevPage" :to="prevPage.href" variant="plain" prepend-icon="mdi-chevron-left" class="justify-start text-capitalize" size="large">
            {{ prevPage.title }}
        </v-btn>
    
        <v-btn v-if="nextPage" :to="nextPage.href" variant="plain" append-icon="mdi-chevron-right" class="text-capitalize" size="large">
            {{ nextPage.title }}
        </v-btn>
        `
    }
])


definePageMeta({
    layout: 'main'
})

</script>