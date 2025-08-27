<template>
    <v-container fluid class="pa-0">
        <p class="text-h5 opacity-80">📚 Nuxt 3 & 4 – Layout Fundamentals"</p>
    </v-container>
    <ContainerNuxtLayout
        v-for="(x, index) in testArr"
        :key="index"
        :courseSubtitle="x.sub"
        :courseDetails="x.sub1"
        :courseBulletPoint="x.bull"
        :courseSubject="x.course"
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
//const { data: content, pending, error } = await useFetch('/api/test')



const arr = ref(["dsadas","dsadsa","dsadasdas"])

const testArr = ref([
    {
        sub: "Ano ang Layout?",
        sub1: "Sa Nuxt, ang Layout ay parang template wrapper para sa iyong pages.",
        bull: [
            "Halimbawa: Navbar, Sidebar, at Footer na gusto mong gamitin sa maraming pages.",
            "Mas organized kaysa i-copy-paste yung UI sa bawat page."
        ],
        course: "Default Layout (layouts/default.vue)",
        content: [
            {
                id: 'advance',
                title: '~/layouts/default.vue',
                details: [
                    
                    "Lahat ng pages ay automatic gagamit ng default.vue kung hindi ka mag-set ng ibang layout."
                ],
                code: `
                <template>
                    <v-container fluid class="h-screen d-flex align-center bg-grey-lighten-3">
                        <v-row class="justify-center">
                            <v-col cols="12" xs="12" sm="5" md="4" lg="3" xl="3" xxl="4">
                                <v-container class="bg-white pa-16">
                                    <slot name="left"></slot>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </template>
                `
            }
        ]
    },
    {
        sub: "Custom Layouts",
        sub1: "Pwede kang gumawa ng iba pang layouts, e.g. layouts/admin.vue, layouts/guest.vue.",
        bull: [
            
        ],
        course: "Example (layouts/admin.vue):",
        content: [
            {
                id: 'advance',
                title: '~/layouts/default.vue',
                details: [
                    
                    "Lahat ng pages ay automatic gagamit ng default.vue kung hindi ka mag-set ng ibang layout."
                ],
                code: `
                <template>
                    <div class="flex">
                        <Sidebar />
                        <main class="flex-1">
                        <slot />
                        </main>
                    </div>
                </template>

                <script setup>
                import Sidebar from '~/components/Sidebar.vue'
                <\/script>

                `
            }
        ]
    }
])


</script>