<template>
  <div>
    <Input
      v-for="(input, index) in sample"
      :key="index"
      :placeholder="input.placeholder"
      :type="input.type"
      v-model="input.model"
    
    />
    <button>login</button>
    
  </div>
</template>

<script setup>

const account = ref({
  username: '',
  password: '',
  creation: ''
})
const sample = ref([
  { placeholder: 'Username', type: 'text', model: account.username },
  { placeholder: 'Username', type: 'text', model: account.password },
  { placeholder: 'Username', type: 'text', model: account.creation },
])
const store = ref([])

function test(){
  if(account.value.username.trim() && account.value.password.trim() && account.value.creation.trim()){
    store.value.push({...sample})
  }
}
</script>
