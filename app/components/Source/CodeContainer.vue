<template>
  <v-container fluid>
    <p class="text-subtitle-1 opacity-80">
      {{ details }}
    </p>
  </v-container>
  <v-card class="my-4" variant="flat">
    <!-- Header -->
    <v-card-title class="d-flex justify-space-between align-center bg-grey-darken-3 py-2">
      <span class="text-caption">{{ title }}</span>
      <v-btn 
        size="small" 
        variant="text" 
        icon="mdi-content-copy" 
        @click="copyCode"
        color="white"
      />
    </v-card-title>
    
    <!-- Code Block -->
    <v-card-text class="pa-0">
      <div class="bg-grey-darken-4 w-100 overflow-auto" style="height: 300px;">
        <pre class="pa-4"><code v-html="highlighted"></code></pre>
      </div>
    </v-card-text>
  </v-card>

  <!-- Snackbar -->
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
import { ref, onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Load Prism languages
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

const props = defineProps({
  sampleCode: { type: String, required: true },
  title: { type: String, default: 'Code Example' },
  language: { type: String, default: 'javascript' },
  details: { type: String, default: 'lorem 2x sinta'}
})

const snackbar = ref(false)
const highlighted = ref('')   // <-- dito natin dinefine

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.sampleCode)
    snackbar.value = true
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onMounted(() => {
  const lang = props.language || 'javascript'
  highlighted.value = Prism.highlight(
    props.sampleCode,
    Prism.languages[lang],
    lang
  )
})
</script>
