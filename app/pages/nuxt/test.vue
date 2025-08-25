<template>
  <div>
    <Input
      v-for="(input, index) in sample"
      :key="index"
      :placeholder="input.placeholder"
      :type="input.type"
      :model="input.model"
    />
    <button @click="test">login</button>

    <ul v-for="(x, index) in store" :key="index">
      <li>Username: {{ x.username }}</li>
      <li>Password: {{ x.password }}</li>
      <li>Date Creation: {{ x.date }}</li>
    </ul>
  </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
const creation = ref('')
const store = ref([])

const sample = ref([
  { placeholder: 'Username', type: 'text', model: username },
  { placeholder: 'Password', type: 'password', model: password },
  { placeholder: 'Date', type: 'date', model: creation },
])

function test() {
  if (username.value.trim() && password.value.trim() && creation.value.trim()) {
    store.value.push({
      username: username.value,
      password: password.value,
      date: creation.value
    })
    alert('Account Registration Successfully')

    // reset form
    username.value = ''
    password.value = ''
    creation.value = ''
  } else {
    alert('Invalid!')
  }
}

definePageMeta({
  layout: 'main'
})
</script>
