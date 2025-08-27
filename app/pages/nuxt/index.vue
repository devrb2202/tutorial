<template>
    <v-container fluid>
        <p class="text-h5 opacity-60">Errors and Solutions</p>
      
         <SourceCodeContainer 
            v-for="(x, index) in solutions"
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
const { data } = await useFetch('/api/all')

const solutions = computed(() => data.value.solution || [])

</script>