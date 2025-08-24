<template>
    <v-container fluid>
        <p>Fixes and Recommendation</p>
        <SourceCodeContainer 
            title="My Function"
            :sampleCode="example"
            language="javascript"
        
        />

         <SourceCodeContainer 
            title="My Function"
            :sampleCode="example02"
            language="javascript"
        
        />
    </v-container>
</template>

<script setup>

const example = ref(`
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
`)


const example02 = ref(`
    <template>
    <v-card class="my-4" variant="flat">
        <v-card-title class="d-flex justify-space-between align-center bg-grey-darken-3 py-2">
        <span class="text-caption">Vue Component</span>
        <v-btn 
            size="small" 
            variant="text" 
            icon="mdi-content-copy" 
            @click="copyCode"
            color="white"
        />
        </v-card-title>
        
        <v-card-text class="pa-0">
          <div class="bg-grey-darken-4 w-100 overflow-auto" style="height: 300px;">
              <pre class="pa-4"><code :v-html="highlighted"></code></pre>
          </div>
        </v-card-text>
     
    </v-card>
    <v-snackbar
        v-model="snackbar"
        timeout="2000"
        color="grey-darken-4"
        location="top center"
        >
        <v-icon icon="mdi-check" class="mr-2"></v-icon>
        Copied to clipboard!
    </v-snackbar>
</template>



<script setup>
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// load basic languages
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'


const props = defineProps({
  sampleCode: { type: String, required: true },
  title: { type: String, default: 'Code Example' },
  language: { type: String, default: 'javascript' } // default JS
})

const snackbar = ref(false)
const highlighted = ref('')

`)

definePageMeta({
    layout: 'main'
})

</script>