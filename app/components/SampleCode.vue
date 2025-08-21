<template>
  <v-card class="my-4">
    <v-card-title class="bg-grey-darken-4 py-2">
      <span class="text-caption">Vue Component</span>
      <v-btn icon="mdi-content-copy" @click="copyCode" color="white"></v-btn>
    </v-card-title>
    
    <v-card-text class="pa-0">
      <div class="code-scroll">
        <!-- ✅ gamitin highlightedCode at v-html -->
        <pre><code class="language-markup" v-html="highlightedCode"></code></pre>
      </div>
    </v-card-text>
  </v-card>

  <v-snackbar v-model="snackbar" location="top" color="success">
    Code copied!
  </v-snackbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// load basic languages
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'


const highlightedCode = ref('')
const snackbar = ref(false)

const sampleCode = ref(`
<template>
  <v-row>
    <v-col cols="auto">
      <v-card class="overflow-auto" height="200" width="200">
        <v-card-text>
          <h3>Overflow Auto</h3>
          Lorem ipsum dolor sit amet...
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vuetify!')
<\/script>
`)


onMounted(() => {
  highlightedCode.value = Prism.highlight(
    sampleCode.value,
    Prism.languages.markup, // 👈 gumamit ng markup (HTML/XML) highlight
    'markup'
  )
})

const copyCode = async () => {
  await navigator.clipboard.writeText(sampleCode.value)
  snackbar.value = true
}




</script>

<style scoped>
.code-scroll {
  max-width: 100%;
  overflow-x: auto;
  background: #1e1e1e;
  padding: 16px;
  border-radius: 8px;
  font-size: 0.9rem;
}
</style>
