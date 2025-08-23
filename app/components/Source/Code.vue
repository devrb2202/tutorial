<template>
    <v-container id="code">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis velit nulla voluptatibus ipsa minima, provident impedit quaerat dignissimos, dolores nostrum vel repellendus doloribus! Architecto deserunt modi voluptatum a! Maxime molestias nostrum nihil quas, incidunt molestiae illum ipsa at consectetur dolores esse modi autem dolorum vitae tempora, assumenda necessitatibus deleniti corporis!</p>
    </v-container>
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
          <div class="bg-grey-darken-4">
              <pre class="pa-4"><code v-html="highlightedCode"></code></pre>
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

const highlightedCode = ref('')


const snackbar = ref(false)
const sampleCode = ref(`
  <template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-small">Extra small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="small">Small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn>Regular Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="large">Large Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="x-large">X-Large Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
`)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(sampleCode.value)
    snackbar.value = true
    // Pwede kang mag-add ng snackbar notification dito
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}


onMounted(() => {
  highlightedCode.value = Prism.highlight(
    sampleCode.value,
    Prism.languages.markup, // 👈 gumamit ng markup (HTML/XML) highlight
    'markup'
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