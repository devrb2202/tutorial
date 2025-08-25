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



const components = ref([
    {
        id: 'basic',
        routeTitle: 'Basic Component',
        title: '~/components/Input.vue',
        details: `Basic Reusable Input Component`,
        code: `
        <template>
            // Child Component
            <div class="flex">
                <input
                    :placeholder="placeholder"
                    :type="type"
                    class="p-12"
                />
            </div>
        </template>

        <script setup>

        defineProps({
            label: String,
            placeholder: String,
            type: 'text' | 'number' | 'date' | 'password'

        })

        <\/script>


        <style scoped>
        .flex {
            display: flex;
        }
        .justify-center {
            justify-content: center;
        }
        .align-center {
            align-items: center;
        }
        .text-white {
            color: white;
        }
        .p-12 {
            padding: 12px;
        }
        .border-bottom {
            border-bottom: 2px solid red;
        }

        </style>`
    },
    {
        id: 'basic',
        routeTitle: '',
        title: 'Sample Usage',
        details: ``,
        code: `
        <template>
            // Parent Component
            <div>
                <Input placeholder="Username" type="text"/>
                <Input placeholder="Password" type="password"/>
                <Input placeholder="Date" type="date"/>
            </div>
        </template>

        `
    },
    {
        id: '',
        title: '',
        details: ``,
        code: ``
    },
    {
        id: '',
        title: '',
        details: ``,
        code: ``
    }
])


definePageMeta({
    layout: 'main'
})
</script>