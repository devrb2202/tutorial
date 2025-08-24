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
// const sampleCode = ref(`
//   <template>
//     <v-container>
//       <v-row align="center" justify="center">
//         <v-col cols="auto">
//           <v-btn size="x-small">Extra small Button</v-btn>
//         </v-col>

//         <v-col cols="auto">
//           <v-btn size="small">Small Button</v-btn>
//         </v-col>
//       </v-row>
//     </v-container>
//   </template>
// `)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(sampleCode.value)
    snackbar.value = true
    // Pwede kang mag-add ng snackbar notification dito
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}


// onMounted(() => {
//   highlightedCode.value = Prism.highlight(
//     sampleCode.value,
//     Prism.languages.markup, // 👈 gumamit ng markup (HTML/XML) highlight
//     'markup'
//   )
// })

onMounted(() => {
  const lang = props.language || 'javascript'
  highlighted.value = Prism.highlight(
    props.sampleCode,
    Prism.languages[lang],
    lang
  )
})


</script>

  

<!-- <style scoped>
.code-scroll {
  max-width: 100%;
  overflow-x: auto;
  background: #1e1e1e;
}

.code-content {
  color: #d4d4d4;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding: 16px;
  white-space: pre;
  word-wrap: normal;
  display: block;
}

/* Custom scrollbar styling */
.code-scroll::-webkit-scrollbar {
  height: 8px;
}

.code-scroll::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.code-scroll::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.code-scroll::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style> -->