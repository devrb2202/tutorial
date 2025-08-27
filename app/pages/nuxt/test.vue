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
    <a class="v-btn v-btn--variant-text router-link-exact-active router-link-active">
      <span class="v-btn__overlay"></span>
      <span class="v-btn__underlay"></span>
      <span class="v-btn__content">Home</span>
    </a>

</template>


<script setup>
const { data: content, pending, error } = await useFetch('/api/test')


</script>

<style scoped>
/* hover */
.v-btn:hover .v-btn__content {
  color: #F50057 !important;
  opacity: 1 !important;
}

/* kapag active route */
.v-btn.router-link-exact-active .v-btn__content,
.v-btn.router-link-active .v-btn__content {
  color: #F50057 !important;
  opacity: 1 !important;
  font-weight: 600 !important;
}

</style>