<template>
    <v-container fluid class="pa-0">
        <p class="text-h5 opacity-80">📚 Nuxt 3 & 4 – Layout Fundamentals"</p>
    </v-container>
    <ContainerNuxtLayout
        v-for="(x, index) in layout"
        :key="index"
        :courseSubtitle="x.subtitle"
        :courseDetails="x.subDetails"
        :courseBulletPoint="x.bullet"
        :courseSubject="x.subject"
    >
        <template #snippets>
            <SourceCodeContainer
                v-for="(y, index) in x.content"
                :key="index"
                :id="y.id"
                :routeTitle="y.routeTitle"
                :title="y.title"
                :details="y.details"
                :sampleCode="y.code"
                language="javascript"
            />
        </template>
    </ContainerNuxtLayout>
</template>

<script setup>
const { data } = await useFetch('/api/all')

const layout = computed(() => data.value.layout || [])

</script>