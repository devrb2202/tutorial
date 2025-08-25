<template>
  <Lalagyan>
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
  </Lalagyan>
  
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
</script>