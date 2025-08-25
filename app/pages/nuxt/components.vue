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
        title: '~/pages/index.vue',
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
        id: 'advance',
        routeTitle: 'Advance Reusable Component',
        title: '~/components/Input.vue',
        details: `Advance Reusable Component`,
        code: `
        <template>
            <v-text-field
                v-for="(x, index) in model"
                :key="index"
                :label="x.label"
                :placeholder="x.placeholder"
                :prepend-inner-icon="x.icon"
                :type="x.type"
                color="orange-darken-3"
                variant="underlined"
                v-model="x.v_model"
            />
        </template>

        <script setup lang="ts">
        interface TextFieldItem {
            label: string
            placeholder: string
            icon: string
            type: string
            v_model: string
        }

        defineProps<{
            model: TextFieldItem[]
        }>()
        <\/script>
        `
    },
    {
        id: 'advance',
        title: '~/pages/index.vue',
        details: ``,
        code: `
        <template>
            <v-container>
                <h1>Advance Reusable Component</h1>
                <Input 
                :model="inputs"
                />
            </v-container>
        </template>

        <script setup lang="ts">

        interface InputField {
            label: string
            placeholder: string
            icon: string
            type: string
            v_model: Ref<string>
        }

        const email = ref('')
        const password = ref('')

        const inputs = ref<InputField[]>([
            { label: 'Username', placeholder: 'Username', icon: 'mdi-account', type: 'email', v_model: email },
            { label: 'Password', placeholder: 'Password', icon: 'mdi-lock', type: 'password', v_model: password }
        ])


        definePageMeta({
            layout: 'main'
        })
        <\script>
        `
    },
    {
        id: 'advance',
        title: '~/components/Container.vue',
        details: `Using Slot`,
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
    },
    {
        id: 'advance',
        title: '~/pages/index.vue',
        details: `Using Slot`,
        code: `
        <template>
            <Container>
                <template #left>
                    <h1>Advance Reusable Component</h1>
                    <v-btn>login</v-btn>
                    <v-text-field 
                        v-for="(x, index) in inputs"
                        :key="index"
                        :label="x.label"
                        :placeholder="x.placeholder"
                        :type="x.type"
                        :prepend-inner-icon="x.icon"
                        v-model="x.v_model"
                    />
                </template>
            </Container>
        </template>

        <script setup lang="ts">

        interface InputField {
            label: string
            placeholder: string
            icon: string
            type: string
            v_model: string
        }

        const email = ref('')
        const password = ref('')

        const inputs = ref<InputField[]>([
            { label: 'Username', placeholder: 'Username', icon: 'mdi-account', type: 'email', v_model: email.value },
            { label: 'Password', placeholder: 'Password', icon: 'mdi-lock', type: 'password', v_model: password.value }
        ])


        definePageMeta({
            layout: 'main'
        })
        <\/script>
        `
    }
])


definePageMeta({
    layout: 'main'
})
</script>