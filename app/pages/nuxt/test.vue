<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load data</div>
    <div v-else>
      <SourceCodeContainer
        v-for="(x, index) in content"
        :key="index"
        :id="x.id"
        :routeTitle="x.routeTitle"
        :title="x.title"
        :details="x.details"
        :sampleCode="x.code"
        language="javascript"
      />
    </div>
</template>


<script setup>
const { data: content, pending, error } = await useFetch('/api/test')

definePageMeta({
  layout: 'main'
})

</script>