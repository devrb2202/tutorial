<template>
    <v-container fluid class="pa-0 h-screen bg-grey-lighten-4">
        <v-row class="justify-center">
            <v-col cols="2" class=" h-screen">
                <p>Tab</p>
                 <v-card class="h-100 overflow-auto">
                    <v-btn v-for="x in 230">Sample Code</v-btn>
                </v-card>
            </v-col>
            <v-col cols="5" class="h-screen overflow-auto">
                <SampleCode />
                 <v-card class="my-4" variant="flat" v-for="x in 100">
                    <v-card-title class="d-flex justify-space-between align-center bg-grey-darken-4 py-2">
                    <span class="text-caption">Vue Component</span>
                    <v-btn 
                        size="small" 
                        variant="text" 
                        icon="mdi-content-copy" 
                        @click="copyCode"
                        color="white"
                    ></v-btn>
                    </v-card-title>
                    
                    <v-card-text class="pa-0">
                    <div class="code-scroll">
                        <pre class="code-content"><code>{{ sampleCode }}</code></pre>
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
            </v-col>
             <v-col cols="2" class="bg- h-screen">
                <p>tabl</p>
                <v-card class="h-100 overflow-auto">
                    <v-btn v-for="x in 230">Sample Code</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script setup lang="ts">
import { ref } from 'vue'


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
</script>

<style scoped>
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
</style>

