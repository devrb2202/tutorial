<template>
    <v-container fluid>
        <p class="text-h5 opacity-60">Components</p>
        <SourceCodeContainer 
            v-for="(x, index) in components"
            :key="index"
            :id="x.id"
            :title="x.title"
            :details="x.details"
            :sample-code="x.code"
            :routeTitle="x.routeTitle"
            language="javascript"
        />
       
    </v-container>
</template>

<script setup>
import { SourceCodeContainer } from '#components';

const { data } = await useFetch('/api/all')

const components = computed(() =>  data.value?.components || [] )


</script>