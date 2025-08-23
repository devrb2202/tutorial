<template>
    <v-container fluid>
        <v-row class="justify-start">
          
          <v-col cols="12" sm="8">
            <p>Introduction to Nuxt</p>
            <SourceCode v-for="x in 2" />
          </v-col>
          
        </v-row>
    </v-container>
</template>

<script setup>

definePageMeta({
    layout: 'main'
})

</script>